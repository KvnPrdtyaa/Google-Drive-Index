let len = window.drive_names.length;
let html = "";
html = `<div class="card">
<div id="list" class="list-group list-group-flush">`
for (var i = 0; i < len; i++) {
html += `<a href="/`+i+`:/" style="color: ${UI.folder_text_color};" class="list-group-item list-group-item-action d-flex justify-content-start align-items-center gap-2">
<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" style="width: 1.3em;">
	<path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"></path>
	<path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"></path>
	<path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"></path>
	<path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"></path>
	<path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"></path>
	<path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"></path></svg></span>`+window.drive_names[i]+`</a>`;
}
html += `</div><div class="card-footer text-muted d-flex align-items-center gap-2"><span class="badge text-bg-dark">${len} drives</span></div></div>`;
$('#list').html(html);
