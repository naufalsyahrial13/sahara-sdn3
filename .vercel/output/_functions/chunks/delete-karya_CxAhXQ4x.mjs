import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import crypto from "node:crypto";
//#region src/pages/api/delete-karya.js
var delete_karya_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
async function POST({ request }) {
	try {
		const { publicId, resourceType } = await request.json();
		if (!publicId) return new Response(JSON.stringify({ error: "publicId wajib diisi" }), { status: 400 });
		const cloudName = "z7nm8ynk";
		const apiKey = "644594221291412";
		const apiSecret = "A-PW8j4_og-1vUjzjxS9aG54ZDI";
		const timestamp = Math.floor(Date.now() / 1e3);
		const toSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
		const signature = crypto.createHash("sha1").update(toSign).digest("hex");
		const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType === "video" ? "video" : "image"}/destroy`;
		const body = new URLSearchParams({
			public_id: publicId,
			timestamp: String(timestamp),
			api_key: apiKey,
			signature
		});
		const json = await (await fetch(url, {
			method: "POST",
			body
		})).json();
		if (json.result !== "ok" && json.result !== "not found") return new Response(JSON.stringify({ error: json.error?.message || `Cloudinary menolak: ${json.result}` }), { status: 500 });
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), { status: 500 });
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/delete-karya@_@js
var page = () => delete_karya_exports;
//#endregion
export { page };
