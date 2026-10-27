const fs = require('fs');
const jpeg = require('jpeg-js');
const jsQR = require('jsqr');

try {
  const jpegData = fs.readFileSync('public/assets/dana-qr.jpg');
  const rawImageData = jpeg.decode(jpegData, { useTArray: true });
  const code = jsQR(rawImageData.data, rawImageData.width, rawImageData.height);

  if (code) {
    console.log('QR Decode Result: SUCCESS');
    console.log('QR Data:', code.data);
    console.log('QR Location:', JSON.stringify(code.location));
  } else {
    console.log('QR Decode Result: Could not locate QR code in image.');
  }
} catch (err) {
  console.error('QR Decode Error:', err.message);
}
