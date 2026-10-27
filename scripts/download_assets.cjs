const https = require("https");
const fs = require("fs");
const path = require("path");

const files = [
  { url: "https://cdn.phototourl.com/member/2026-10-27-e39e093c-c5b1-486f-8490-b8f59f8ff4f2.jpg", dest: "public/assets/dana-qr.jpg" },
  { url: "https://cdn.phototourl.com/member/2026-10-09-7c58114c-cd1c-40b7-bbc1-452abbad7a17.jpg", dest: "public/assets/the-bontot-radio-logo.jpg" },
  { url: "https://cdn.phototourl.com/member/2026-10-21-41aadd76-eab5-4a64-a9ae-096322e1a88a.png", dest: "public/assets/the-bontot-community-logo.png" },
  { url: "https://cdn.phototourl.com/member/2026-10-20-c39ce242-8279-44f9-98dc-d0ab1ea27f09.png", dest: "public/assets/bontot-studio-logo.png" }
];

function fetchWithRedirect(url, dest) {
  return new Promise((resolve, reject) => {
    function get(currentUrl, redirectCount = 0) {
      if (redirectCount > 5) return reject(new Error("Too many redirects"));
      https.get(currentUrl, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location, redirectCount + 1);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${currentUrl}`));
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            const stats = fs.statSync(dest);
            console.log(`Success: ${dest} (${stats.size} bytes)`);
            resolve();
          });
        });
        file.on("error", (err) => {
          fs.unlink(dest, () => {});
          reject(err);
        });
      }).on("error", reject);
    }
    get(url);
  });
}

async function run() {
  for (const item of files) {
    console.log(`Downloading ${item.url}...`);
    await fetchWithRedirect(item.url, item.dest);
  }
  console.log("All downloads successful!");
}

run().catch((err) => {
  console.error("Error during download:", err);
  process.exit(1);
});
