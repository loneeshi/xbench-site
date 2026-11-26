'use strict';
const byId = id => document.getElementById(id);
const escapeText = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function catalogueView() {
  const filters = ['scene', 'dynamic', 'efficiency'];
  function refresh() {
    const tasks = catalogue.filter(t => filters.every(key => !byId(key).value || t[key] === byId(key).value));
    byId('count').textContent = tasks.length + ' of ' + catalogue.length;
    byId('rows').innerHTML = tasks.map(t => {
      const profile = examples[t.id] ? '<a href="task.html?id='+t.id+'">Open profile</a>' : t.id.startsWith('W') ? 'Visuals pending clearance · 画面待确认' : 'Pending';
      return '<tr>'+[t.id,t.title,t.scene,t.dynamic,t.efficiency].map(v=>'<td>'+escapeText(v)+'</td>').join('')+'<td>'+profile+'</td></tr>';
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
  const video=clips.map(clip => `<figure><video controls playsinline preload="metadata" src="${e(clip.file)}"></video><figcaption>${e(clip.label)}<small>${e(clip.outcome)}</small></figcaption></figure>`).join('');
  const media=id.startsWith('W') ? 'Visuals pending clearance · 画面待确认' : gallery || video ? gallery+video : 'Screenshots in preparation · 截图生成中';
  byId('profile').innerHTML=`<a class="back" href="index.html#catalogue">Task catalogue</a>
    <div class="intro"><div><p class="eyebrow">${e(id)} &nbsp; / &nbsp; ${e(task.scene)}</p><h1>${e(task.title)}</h1><p class="tags">${e(task.dynamic)} &nbsp;·&nbsp; ${e(task.efficiency)}</p></div>
    <div><h2>Instruction</h2><p class="instruction">${e(p.instruction)}</p><p lang="zh-CN">${e(p.zh)}</p></div></div>
    <section><h2>Environment</h2><p>${e(p.environment)}</p><p>Target configuration: RB-Y1 M v1.3, mecanum base, continuously running clock. The current engineering package specifies the two-wheel RB-Y1 A.</p></section>
    <section><h2>Tests</h2><p>${e(p.success)}</p><ol class="steps">${p.steps.map(s=>`<li><strong>${s.points} points</strong><span>${s.timing?'<b class="timing">Timing milestone</b> ':''}${e(s.criterion)}</span></li>`).join('')}</ol></section>
    <section><h2>Status</h2><p>${e(p.status)}</p><p>${e(p.pending)}</p></section><section><h2>Media</h2><div class="gallery">${media}</div></section>`;
}
if (byId('profile')) profileView();
else catalogueView();
