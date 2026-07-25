import crypto from 'node:crypto';

export async function POST({ request }) {
  try {
    const { publicId, resourceType } = await request.json();
    if (!publicId) {
      return new Response(JSON.stringify({ error: 'publicId wajib diisi' }), { status: 400 });
    }

    const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = import.meta.env.CLOUDINARY_API_KEY;
    const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;

    if (!apiKey || !apiSecret) {
      return new Response(JSON.stringify({ error: 'CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET belum ada di .env, atau server belum di-restart setelah ditambahkan.' }), { status: 500 });
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const toSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash('sha1').update(toSign).digest('hex');

    const type = resourceType === 'video' ? 'video' : 'image';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/${type}/destroy`;

    const body = new URLSearchParams({
      public_id: publicId,
      timestamp: String(timestamp),
      api_key: apiKey,
      signature,
    });

    const res = await fetch(url, { method: 'POST', body });
    const json = await res.json();

    if (json.result !== 'ok' && json.result !== 'not found') {
      return new Response(JSON.stringify({ error: json.error?.message || `Cloudinary menolak: ${json.result}` }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}