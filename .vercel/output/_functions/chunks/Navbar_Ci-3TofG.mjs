import { _ as createRenderInstruction, g as addAttribute, h as renderHead, m as maybeRenderHead, s as renderSlot, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "SAHARA - SDN 3 Tirtomoyo" } = Astro.props;
	return renderTemplate`<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#EF798A"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet"><title>${title}</title><link rel="apple-touch-icon" href="/icon-192.png"><meta name="apple-mobile-web-app-capable" content="yes">${renderHead($$result)}</head><body class="bg-canvas text-ink min-h-screen antialiased"><div class="page-blobs" aria-hidden="true"><div class="blob" style="width:140px;height:140px;background:#FFD166;top:4vh;left:-50px;"></div><div class="blob" style="width:90px;height:90px;background:#EF798A;top:18vh;right:5vw;"></div><div class="blob" style="width:110px;height:110px;background:#4FA8F0;top:42vh;left:3vw;"></div><div class="blob" style="width:80px;height:80px;background:#4CC985;top:62vh;right:8vw;"></div><div class="blob" style="width:130px;height:130px;background:#A672E8;top:82vh;left:6vw;"></div><div class="blob" style="width:100px;height:100px;background:#FFA83D;top:104vh;right:-30px;"></div><div class="blob" style="width:95px;height:95px;background:#37C2AC;top:128vh;left:10vw;"></div></div>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/user/SAHARA-SDN3/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const { current = "beranda" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="sticky top-0 z-50 bg-canvas/90 backdrop-blur border-b-2 border-line"><div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between"><a href="/" class="flex items-center gap-2.5"><span class="relative w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style="background:linear-gradient(135deg,#EF798A,#FFA83D)"><span class="font-display font-extrabold text-white text-xl -rotate-6">S</span><span class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cerita-500 border-2 border-canvas"></span><span class="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-eksperimen-500 border-2 border-canvas"></span></span><span class="font-display font-extrabold text-ink text-2xl tracking-tight">SAHARA</span></a><div class="flex items-center gap-2"><div class="flex gap-1">${[
		{
			href: "/",
			label: "Beranda",
			key: "beranda"
		},
		{
			href: "/tentang",
			label: "Tentang",
			key: "tentang"
		},
		{
			href: "/admin",
			label: "Guru",
			key: "admin"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-3 py-1.5 rounded-full text-sm font-bold transition ${current === link.key ? "bg-ink text-white" : "text-ink-soft hover:bg-line"}`, "class")}>${link.label}</a>`)}</div><a href="https://github.com/naufalsyahrial13" target="_blank" rel="noopener" class="w-9 h-9 rounded-full flex items-center justify-center text-ink-soft hover:bg-line hover:text-ink transition shrink-0" aria-label="Lihat kode sumber di GitHub"><svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"></path></svg></a></div></div></nav>`;
}, "C:/Users/user/SAHARA-SDN3/src/components/Navbar.astro", void 0);
//#endregion
export { $$Layout as n, renderScript as r, $$Navbar as t };
