import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { n as $$Layout, r as renderScript, t as $$Navbar } from "./Navbar_Ci-3TofG.mjs";
//#region src/pages/tentang.astro
var tentang_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tentang,
	file: () => $$file,
	url: () => $$url
});
var $$Tentang = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tentang - SAHARA SDN 3 Tirtomoyo" }, { "default": async ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "current": "tentang" })}${maybeRenderHead($$result)}<header class="relative max-w-3xl mx-auto px-4 pt-10 pb-6 text-center overflow-hidden"><h1 class="relative text-3xl font-extrabold text-ink">Tentang SAHARA</h1><p class="relative mt-2 text-ink-soft max-w-lg mx-auto">Satu Hari, Satu Karya — museum digital karya siswa SDN 3 Tirtomoyo, dikembangkan oleh Tim KKN Universitas Diponegoro Desa Banyakprodo 2026.</p></header><main class="max-w-3xl mx-auto px-4 pb-16 space-y-6"><section class="reveal shown bg-surface border-2 border-line rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5"><img src="/logo-sekolah.jpg" alt="Logo SDN 3 Tirtomoyo" class="w-28 h-28 rounded-2xl object-cover shrink-0"><div><h2 class="font-bold text-lg text-ink mb-1">Profil Sekolah</h2><p class="text-sm text-ink-soft">SD Negeri 3 Tirtomoyo adalah sekolah dasar di Desa Banyakprodo, Kecamatan Tirtomoyo, Kabupaten Wonogiri, Jawa Tengah.</p></div></section><section class="reveal shown bg-brand-50 border-2 border-brand-100 rounded-2xl p-6 text-center"><p class="text-xs font-bold text-brand-600 uppercase tracking-wide mb-2">Visi</p><p class="text-ink font-display font-semibold text-lg italic">"Terwujudnya insan pembelajar sepanjang hayat yang berkarakter, berintegritas, inovatif, unggul dalam mutu, dan berkecakapan global."</p></section><section class="grid grid-cols-2 sm:grid-cols-3 gap-3"><div class="reveal shown bg-gambar-50 rounded-2xl p-4 text-center"><p class="text-2xl font-extrabold text-gambar-600" id="stat-gambar">-</p><p class="text-xs font-bold text-ink-soft mt-1">Gambar</p></div><div class="reveal shown bg-cerita-50 rounded-2xl p-4 text-center"><p class="text-2xl font-extrabold text-cerita-600" id="stat-cerita">-</p><p class="text-xs font-bold text-ink-soft mt-1">Cerita</p></div><div class="reveal shown bg-eksperimen-50 rounded-2xl p-4 text-center"><p class="text-2xl font-extrabold text-eksperimen-600" id="stat-total">-</p><p class="text-xs font-bold text-ink-soft mt-1">Total Karya</p></div></section></main>${renderScript($$result, "C:/Users/user/SAHARA-SDN3/src/pages/tentang.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "C:/Users/user/SAHARA-SDN3/src/pages/tentang.astro", void 0);
var $$file = "C:/Users/user/SAHARA-SDN3/src/pages/tentang.astro";
var $$url = "/tentang";
//#endregion
//#region \0virtual:astro:page:src/pages/tentang@_@astro
var page = () => tentang_exports;
//#endregion
export { page };
