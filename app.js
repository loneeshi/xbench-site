const LEGACY_A = ['O01','O02','O03','O04','O05','K02','K05'];
const LEGACY_PLANAR = ['W01','W02','W03','W04'];
function robotLine(id) {
  if (LEGACY_A.includes(id)) return 'Robot: the scene is being moved to RB-Y1 M v1.3 (mecanum base, running clock). Recorded scripted demos used the two-wheel RB-Y1 A with a paused clock.';
  if (LEGACY_PLANAR.includes(id)) return 'Robot: the scene is being moved to RB-Y1 M v1.3 (mecanum base, running clock). Recorded scripted demos used a virtual planar base.';
  return 'Robot: RB-Y1 M v1.3, mecanum base, continuously running clock.';
}
'use strict';
const byId = id => document.getElementById(id);
const escapeText = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function demoStatus(clips, hasImages) {
  // One chip per kind of content the task has, so readers see what is inside.
  const kinds = [
    ['teleop', 'Teleop demo'],
    ['scripted', 'Scripted demo'],
    ['mechanism', 'Scene demo']
  ];
  const chips = [];
  for (const [kind, label] of kinds) {
    const matches = clips.filter(clip => clip.kind === kind);
    if (!matches.length) continue;
    const full = matches.some(clip => clip.scope === 'full');
    const qualifier = full ? '' : matches.some(clip => clip.scope === 'partial') ? 'partial' : matches.some(clip => clip.scope === 'old-design') ? 'old design' : '';
    chips.push({kind, label, qualifier});
  }
  if (hasImages) chips.push({kind: 'images', label: 'Screenshots'});
  if (!chips.length) chips.push({kind: 'pending', label: 'Nothing yet'});
  return chips;
}
function catalogueView() {
  const filters = ['scene', 'dynamic', 'efficiency'];
  function refresh() {
    const tasks = catalogue.filter(t => filters.every(key => !byId(key).value || t[key] === byId(key).value));
    byId('count').textContent = tasks.length + ' of ' + catalogue.length;
    byId('rows').innerHTML = tasks.map(t => {
      const profile = examples[t.id] ? '<a href="task.html?id='+t.id+'">Open profile</a>' : 'Pending';
      const badge = demoStatus(recordings[t.id] || [], examples[t.id]?.images.length).map(c => '<span class="demo-badge '+c.kind+'">'+c.label+(c.qualifier ? '<small>'+c.qualifier+'</small>' : '')+'</span>').join('');
      return '<tr>'+[t.id,t.title,t.scene,t.dynamic,t.efficiency].map(v=>'<td>'+escapeText(v)+'</td>').join('')+'<td><div class="profile-actions">'+badge+profile+'</div></td></tr>';
    }).join('') || '<tr><td colspan="6">No tasks match these filters.</td></tr>';
  }
  for (const key of filters) {
    for (const v of [...new Set(catalogue.map(t=>t[key]))].sort()) byId(key).add(new Option(v,v));
    byId(key).addEventListener('change', refresh);
  }
  refresh();
}
function profileView() {
  const id = new URLSearchParams(location.search).get('id');
  const task = catalogue.find(t=>t.id===id);
  const p = task && examples[id];
  if (!p) {
    byId('profile').innerHTML = '<h1>Profile pending</h1><a href="index.html#catalogue">Return to the catalogue</a>';
    return;
  }
  const e=escapeText, clips=recordings[id] || [];
  document.title=id+' · '+task.title+' · XBench';
  const gallery=p.images.map(img=>`<figure><img src="${e(img.src)}" alt="${e(id+' · '+img.view)}"><figcaption>${e(img.view)} · RB-Y1 M v1.3</figcaption></figure>`).join('');
  const video=clips.map(clip => `<figure><video controls playsinline preload="metadata" src="${e(clip.file)}"></video><figcaption>${e(clip.label)}<small>${e(clip.outcome)}</small>${clip.kind === 'mechanism' ? `<small>${e(clip.robotModel)} · ${e(clip.clock)} · ${e(clip.renderDateUTC)} UTC</small>` : ''}</figcaption></figure>`).join('');
  const media=gallery || video ? video+gallery : id==='W05' ? 'New tugger design; the earlier fixed-shelf demo no longer matches' : 'Screenshots in preparation';
  byId('profile').innerHTML=`<a class="back" href="index.html#catalogue">Task catalogue</a>
    <div class="intro"><div><p class="eyebrow">${e(id)} &nbsp; / &nbsp; ${e(task.scene)}</p><h1>${e(task.title)}</h1><p class="tags">${e(task.dynamic)} &nbsp;·&nbsp; ${e(task.efficiency)}</p></div>
    <div><h2>Instruction</h2><p class="instruction">${e(p.instruction)}</p></div></div>
    <section><h2>Environment</h2><p>${e(p.environment)}</p><p>${e(robotLine(id))}</p></section>
    <section><h2>Tests</h2><p>${e(p.success)}</p><ol class="steps">${p.steps.map(s=>`<li><strong>${s.points} points</strong><span>${s.timing?'<b class="timing">Timing milestone</b> ':''}${e(s.criterion)}</span></li>`).join('')}</ol></section>
    <section><h2>Status</h2><p>${e(p.status)}</p><p>${e(p.pending)}</p></section><section><h2>Media</h2><div class="gallery">${media}</div></section>`;
}
if (byId('profile')) profileView();
else catalogueView();
