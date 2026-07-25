import Compressor from 'compressorjs';

export function compressImage(file) {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.75,
      maxWidth: 1080,
      maxHeight: 1080,
      mimeType: 'image/webp',
      convertSize: 0,
      success(result) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
}