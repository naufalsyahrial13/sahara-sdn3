import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { n as $$Layout, r as renderScript, t as $$Navbar } from "./Navbar_Ci-3TofG.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Beranda - SAHARA SDN 3 Tirtomoyo" }, { "default": async ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "current": "beranda" })}${maybeRenderHead($$result)}<header class="relative max-w-5xl mx-auto px-4 pt-10 pb-6 text-center overflow-hidden"><h1 class="relative text-3xl md:text-4xl font-extrabold text-ink">Museum Digital SAHARA</h1><p class="relative mt-2 text-ink-soft">Setiap Hari Berkarya, Setiap Karya Menginspirasi</p><p id="stat-badge" class="relative inline-block mt-4 bg-white border-2 border-line rounded-full px-4 py-1.5 text-xs font-bold text-ink-soft"></p></header><div class="max-w-5xl mx-auto px-4 mb-3 flex flex-wrap gap-2 justify-center" id="filter-tabs"><button data-cat="Semua" class="filter-btn bg-ink text-white active">Semua</button><button data-cat="Gambar" class="filter-btn bg-gambar-50 text-gambar-600">Gambar</button><button data-cat="Cerita" class="filter-btn bg-cerita-50 text-cerita-600">Cerita</button><button data-cat="Puisi" class="filter-btn bg-puisi-50 text-puisi-600">Puisi</button><button data-cat="Eksperimen" class="filter-btn bg-eksperimen-50 text-eksperimen-600">Eksperimen</button><button data-cat="Video" class="filter-btn bg-video-50 text-video-600">Video</button><button data-cat="Infografis" class="filter-btn bg-infografis-50 text-infografis-600">Infografis</button></div><div class="max-w-5xl mx-auto px-4 mb-6 flex flex-wrap gap-2 justify-center" id="kelas-tabs"><button data-kelas="Semua" class="kelas-btn active">Semua Kelas</button><button data-kelas="1" class="kelas-btn">Kelas 1</button><button data-kelas="2" class="kelas-btn">Kelas 2</button><button data-kelas="3" class="kelas-btn">Kelas 3</button><button data-kelas="4" class="kelas-btn">Kelas 4</button><button data-kelas="5" class="kelas-btn">Kelas 5</button><button data-kelas="6" class="kelas-btn">Kelas 6</button></div><main class="max-w-5xl mx-auto px-4 pb-16"><div id="loading" class="text-center text-ink-faint py-10">Memuat karya...</div><div id="empty" class="hidden text-center text-ink-faint py-10">Belum ada karya di kategori ini.</div><div id="gallery-grid" class="grid grid-cols-2 md:grid-cols-3 gap-4"></div></main><div id="modal" class="hidden fixed inset-0 bg-ink/60 z-50 items-center justify-center p-4"><div id="modal-box" class="modal-box bg-surface rounded-2xl max-w-lg w-full overflow-hidden relative"><button id="modal-close" class="absolute top-2 right-2 bg-white/90 rounded-full w-8 h-8 font-bold z-10">✕</button><div id="modal-media"></div><div class="p-4"><h3 id="modal-title" class="font-bold text-lg text-ink"></h3><p id="modal-meta" class="text-sm text-ink-faint mt-1"></p></div></div></div>${renderScript($$result, "C:/Users/user/SAHARA-SDN3/src/pages/index.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "C:/Users/user/SAHARA-SDN3/src/pages/index.astro", void 0);
var $$file = "C:/Users/user/SAHARA-SDN3/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
