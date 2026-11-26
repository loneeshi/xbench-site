import fs from 'node:fs';
import path from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
if (process.argv.length !== 3) throw new Error('Usage: node scripts/import_mechanism_videos.mjs <render-batch-directory>');
const batch = path.resolve(process.argv[2]);
const publicDir = path.join(batch, 'public');
const limit = 40_000_000;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

function readData(filename, variable) {
  const source = fs.readFileSync(path.join(root, filename), 'utf8').trim();
  const prefix = 'const ' + variable + ' = ';
  if (!source.startsWith(prefix) || !source.endsWith(';')) throw new Error('Unexpected format in ' + filename);
  return JSON.parse(source.slice(prefix.length, -1));
}

function writeChanged(filename, text) {
  const dest = path.join(root, filename);
  if (fs.readFileSync(dest, 'utf8') === text) return;
  const temp = dest + '.' + randomUUID() + '.tmp';
  try {
    fs.writeFileSync(temp, text, {flag:'wx'});
    fs.renameSync(temp, dest);
  } finally {
    fs.rmSync(temp, {force:true});
  }
}

const records = readData('media-records.js', 'recordings');
const ids = new Set(readData('catalog.js', 'catalogue').map(task => task.id));
const metadata = JSON.parse(fs.readFileSync(path.join(batch, 'records.json'), 'utf8').replace(/^\uFEFF/, ''));
if (!fs.lstatSync(publicDir).isDirectory()) throw new Error('Expected a regular public directory');
const publicFiles = fs.readdirSync(publicDir, {withFileTypes:true}).filter(entry => entry.isFile() && /\.mp4$/i.test(entry.name));
const plan = [];
const ignore = fs.readFileSync(path.join(root, '.gitignore'), 'utf8');
const rules = new Set(ignore.split(/\r?\n/));
const additions = [];

// Only regular files directly inside public/ can become inputs.
for (const {name} of publicFiles) {
  const rows = metadata.filter(row => row.publicFileName === name);
  if (rows.length !== 1) throw new Error('Expected one public record for ' + name);
  const row = rows[0];
  if (!ids.has(row.taskId) || row.demoType !== 'mechanism' ||
      !/^[a-z][0-9]{2}-[a-z0-9-]+\.mp4$/.test(name) ||
      !name.startsWith(row.taskId.toLowerCase() + '-') || row.file !== 'media/' + name) {
    throw new Error('Unexpected task or filename: ' + name);
  }
  const source = path.join(publicDir, name);
  const size = fs.statSync(source).size;
  if (!size || size !== row.publicBytes || size > limit || row.width !== 1280 || row.height !== 720 ||
      row.codec !== 'H.264' || !/^[0-9a-f]{64}$/.test(row.originalSha256) ||
      hash(fs.readFileSync(source)) !== row.publicSha256) throw new Error('Media verification failed: ' + name);
  for (const key of ['label','outcome','robotModel','clock','renderDateUTC']) {
    if (typeof row[key] !== 'string' || !row[key].trim()) throw new Error('Missing ' + key + ' for ' + name);
  }
  const scope = row.scope ?? 'full'; // Describes the mechanism clip, not task completion.
  if (!['full','partial','old-design'].includes(scope)) throw new Error('Unexpected scope: ' + name);
  const record = {kind:'mechanism', scope, file:row.file, originalSha256:row.originalSha256, publicSha256:row.publicSha256,
    label:'Mechanism demo · robot stays still · not a solution · ' + row.label, outcome:row.outcome,
    robotModel:row.robotModel, clock:row.clock, renderDateUTC:row.renderDateUTC};
  const clips = records[row.taskId] ??= [];
  const index = clips.findIndex(clip => clip.file === row.file);
  if (index < 0) clips.push(record);
  else {
    if (clips[index].publicSha256 !== record.publicSha256 || clips[index].kind !== 'mechanism')
      throw new Error('Existing record differs: ' + name);
    clips[index] = record;
  }
  const dest = path.join(root, row.file);
  if (fs.existsSync(dest)) {
    if (!fs.lstatSync(dest).isFile() || hash(fs.readFileSync(dest)) !== row.publicSha256)
      throw new Error('Existing file differs: ' + name);
  } else plan.push({source, dest, sha:row.publicSha256});
  const rule = '!/' + row.file;
  if (!rules.has(rule)) additions.push(rule);
}

for (const {source, dest, sha} of plan) {
  const temp = dest + '.' + randomUUID() + '.tmp';
  try {
    fs.copyFileSync(source, temp, fs.constants.COPYFILE_EXCL);
    if (hash(fs.readFileSync(temp)) !== sha) throw new Error('Source changed during import');
    fs.linkSync(temp, dest);
  } finally {
    fs.rmSync(temp, {force:true});
  }
}
if (additions.length) writeChanged('.gitignore', ignore.trimEnd() + '\n' + additions.join('\n') + '\n');
writeChanged('media-records.js', 'const recordings = ' + JSON.stringify(records, null, 2) + ';\n');
console.log('Verified %d public videos; copied %d.', publicFiles.length, plan.length);
