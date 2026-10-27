# ADHY THE BONTOT | ONE-CLICK COFFEE SUPPORT ☕

Website personal landing page premium resmi milik **ADHY THE BONTOT** (`THE BONTOT RADIO`). Dirancang secara khusus untuk pemirsa TikTok, live streaming, dan komunitas Bontoters yang ingin mentraktir kopi virtual dengan alur tercepat, termudah, dan terpercaya.

---

## 🌐 Live Production URL
```text
https://support-tbr.vercel.app
```
*Website aktif secara publik, dapat diakses tanpa localhost melalui jaringan internet global di HP, tablet, maupun laptop.*

---

## 📌 Lokasi Project
```text
C:\SOFTWARE\SUPPORT BONTOT
```

Semua source code, konfigurasi, aset resmi, dan file pendukung berada di dalam direktori ini.

---

## 🚀 Fitur Utama & Keunggulan

1. **Alur One-Click Support Super Cepat**:
   - `Buka Link` ➔ `Identitas Bang Adhy` ➔ `Pilih Metode` ➔ `Scan / Salin` ➔ `Selesai`.
2. **Aset Pembayaran Resmi DANA**:
   - Menampilkan gambar QR DANA asli (`public/assets/dana-qr.jpg`) yang telah terverifikasi scannable 100%.
   - Fitur **Lightbox / Perbesar QR**: Tampilan modal resolusi penuh dengan tombol tutup dan shortcut tombol `Escape`.
   - Fitur **Salin Nomor DANA** (`089629721717`) dengan notifikasi toast otomatis dan fallback input manual.
   - Tombol **Buka Link Resmi DANA** langsung ke deep link transaksi.
3. **Transfer Bank Jago**:
   - Menampilkan nomor rekening resmi `103415027159` dengan format bersih dan mudah dibaca.
   - Tombol **Salin Nomor Rekening** sekali klik dengan toast notification.
4. **WhatsApp Direct Contact**:
   - Tombol langsung ke nomor WhatsApp resmi `+6281990918273` dengan pesan pembuka otomatis:
     `"Halo Bang Adhy, gw mau support The Bontot Radio."`
5. **Koneksi Media Sosial Resmi**:
   - TikTok: `@thebontot.radio`
   - YouTube: `@TheBontotRadio`
   - Instagram: `adhy_thebontot`
   - WhatsApp: `+6281990918273`
6. **Brand Signature & Ekosistem The Bontot**:
   - Logo The Bontot Radio
   - Logo The Bontot Community
   - Logo Bontot Studio
   - Highlight ekosistem: Warung Bontot, Bontot Cleaner, Creative AI & Sound Works.
7. **Desain Mobile-First & Futuristik**:
   - Mengusung palet Obsidian Black (`#090909`), Radio Red (`#C81018`), dan Signature Gold (`#D8B15A`).
   - Glassmorphism, ambient lighting, audio-radio pulse, dan micro-interactions halus.
   - Mendukung `prefers-reduced-motion` dan standar aksesibilitas keyboard navigation.
8. **SEO & Open Graph Lengkap**:
   - Metadata lengkap untuk preview cantik saat link dibagikan di bio TikTok, WhatsApp, Facebook, dan Twitter.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Vanilla CSS Modular (Design System modern, tanpa framework berat)
- **Icons**: Lucide Icons & Custom SVG Brand Icons
- **Verification Tool**: QR Decoder Tool (`jsqr` + `jpeg-js`)

---

## 💻 Panduan Menjalankan Project

### 1. Prasyarat
- Node.js (v18 ke atas, v24 teruji)
- npm

### 2. Masuk ke Folder Project
```powershell
cd /d "C:\SOFTWARE\SUPPORT BONTOT"
```

### 3. Install Dependensi (jika belum)
```powershell
npm install
```

### 4. Jalankan Mode Pengembangan (Dev Server)
```powershell
npm run dev
```
Buka browser pada: `http://localhost:3000/` atau `http://127.0.0.1:3000/`

### 5. Melakukan Production Build
```powershell
npm run build
```
File hasil build yang siap dipublikasikan akan dibuat di folder `dist/`.

### 6. Preview Hasil Build
```powershell
npm run preview
```

---

## 📁 Struktur Direktori

```text
C:\SOFTWARE\SUPPORT BONTOT\
├── dist/                          # Hasil production build
├── public/
│   └── assets/                    # Aset gambar resmi lokal
│       ├── dana-qr.jpg            # QR Code DANA asli
│       ├── the-bontot-radio-logo.jpg # Logo The Bontot Radio
│       ├── the-bontot-community-logo.png # Logo The Bontot Community
│       └── bontot-studio-logo.png # Logo Bontot Studio
├── scripts/
│   ├── download_assets.cjs        # Script pengunduh aset resmi
│   └── verify_qr.cjs              # Script verifikasi pembacaan QR lokal
├── src/
│   ├── components/                # Komponen modular antarmuka
│   │   ├── Navbar.tsx             # Header status radio
│   │   ├── Hero.tsx               # Hero banner & CTA traktir
│   │   ├── SupportSection.tsx     # Pembungkus metode support
│   │   ├── DanaCard.tsx           # Kartu DANA QR & copy
│   │   ├── BankCard.tsx           # Kartu Bank Jago & copy
│   │   ├── WhatsAppSection.tsx    # Jalur langsung WhatsApp
│   │   ├── SocialShortcuts.tsx    # Shortcut TikTok, YouTube, IG
│   │   ├── BrandSignature.tsx     # Ekosistem logo Bontot
│   │   ├── QrLightbox.tsx         # Modal perbesar QR interaktif
│   │   ├── Toast.tsx              # Notifikasi toast feedback
│   │   └── Footer.tsx             # Catatan kaki & disclaimer
│   ├── config/
│   │   └── brand.ts               # KONFIGURASI TERPUSAT (Nomor, Link, Teks)
│   ├── styles/
│   │   └── index.css              # Design system & responsive styles
│   ├── App.tsx                    # Komponen utama
│   └── main.tsx                   # Entry point aplikasi
├── index.html                     # HTML template + SEO/OG meta
├── package.json                   # Konfigurasi dependensi & npm scripts
├── tsconfig.json                  # Konfigurasi TypeScript
├── vite.config.ts                 # Konfigurasi Vite bundler
└── README.md                      # Dokumentasi project
```

---

## ⚙️ Panduan Kustomisasi & Konfigurasi

Semua data brand, kontak, dan nomor rekening terpusat di satu file:
**`src/config/brand.ts`**

### 1. Cara Mengubah Nomor Pembayaran
Buka file `src/config/brand.ts`, ubah nilai pada objek `officialContacts`:
```typescript
officialContacts: {
  dana: {
    number: "089629721717",
    displayNumber: "0896-2972-1717",
    ...
  },
  bank: {
    bankName: "BANK JAGO",
    accountNumber: "103415027159",
    displayAccountNumber: "1034 1502 7159"
  }
}
```

### 2. Cara Mengganti Gambar QR Code
1. Siapkan file gambar QR baru dengan format JPG atau PNG.
2. Simpan gambar ke `public/assets/dana-qr.jpg` (menimpa file lama) atau ubah path di `src/config/brand.ts`.
3. Jalankan `node scripts/verify_qr.cjs` untuk memastikan QR baru terbaca.

### 3. Cara Mengganti Logo Brand
File logo disimpan di folder `public/assets/`:
- Logo Radio: `public/assets/the-bontot-radio-logo.jpg`
- Logo Komunitas: `public/assets/the-bontot-community-logo.png`
- Logo Studio: `public/assets/bontot-studio-logo.png`

Cukup ganti file-file tersebut dengan nama yang sama, atau ubah referensinya di `src/config/brand.ts`.

### 4. Cara Mengubah Link Media Sosial
Ubah array `socials` pada `src/config/brand.ts`:
```typescript
socials: [
  { name: "TikTok", handle: "@thebontot.radio", url: "https://www.tiktok.com/@thebontot.radio", icon: "tiktok" },
  { name: "YouTube", handle: "@TheBontotRadio", url: "https://www.youtube.com/@TheBontotRadio", icon: "youtube" },
  { name: "Instagram", handle: "adhy_thebontot", url: "https://www.instagram.com/adhy_thebontot/", icon: "instagram" },
  ...
]
```

---

## 🌐 Panduan Deployment Gratis & Cepat

Website ini merupakan Single Page Application (SPA) berbasis Vite yang sangat ringan dan dapat di-host secara gratis dengan performa global super cepat (CDN).

### Pilihan 1: Vercel (Sangat Direkomendasikan)
1. Install Vercel CLI: `npm i -g vercel`
2. Jalankan perintah di folder project:
   ```powershell
   vercel
   ```
3. Ikuti langkah di layar (default Vite build). URL website langsung aktif dalam hitungan detik.

### Pilihan 2: Cloudflare Pages / Netlify
1. Hubungkan repository GitHub ke Cloudflare Pages atau Netlify.
2. Pengaturan build:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Klik Deploy.

---

## 📋 Hasil Audit & Verifikasi Pengujian

| Komponen / Fitur | Status | Bukti / Catatan |
|---|:---:|---|
| **Lokasi Project** | ✅ PASS | Folder `C:\SOFTWARE\SUPPORT BONTOT` utuh, rapi, dan berdiri sendiri. |
| **Unduh Aset Resmi** | ✅ PASS | Seluruh 4 aset resmi (DANA QR, Logo Radio, Logo Komunitas, Logo Studio) tersimpan di `public/assets/`. |
| **Verifikasi QR Scanner** | ✅ PASS | Teruji dengan `scripts/verify_qr.cjs`. Payload terurai: `https://link.dana.id/minta?full_url=https://qr.dana.id/v1/281012012019061707061844`. |
| **Responsive Mobile (360-428px)** | ✅ PASS | Mobile-first CSS, thumb-friendly tap target (≥48px), tidak ada horizontal scrollbar. |
| **Hero & CTA Button** | ✅ PASS | Headline resmi "TRAKTIR KOPI BUAT BANG ADHY ☕", smooth scrolling ke section support. |
| **DANA QR Experience** | ✅ PASS | QR ditampilkan tajam tanpa distorsi, lightbox modal berfungsi dengan tombol Close & Escape. |
| **Copy to Clipboard (DANA & Bank)** | ✅ PASS | Menggunakan Clipboard API modern + fallback textarea untuk browser lama/terbatas. Toast notifikasi muncul saat berhasil. |
| **WhatsApp Direct Link** | ✅ PASS | Tautan format internasional `https://wa.me/6281990918273` dengan pesan template otomatis. |
| **Social Links** | ✅ PASS | Mengarah ke akun resmi TikTok, YouTube, IG, dan WhatsApp dengan SVG icons resmi. |
| **Production Build** | ✅ PASS | `npm run build` selesai tanpa error (Vite + TypeScript bundle siap di `dist/`). |
| **HTTP Server Response** | ✅ PASS | Server merespon dengan `HTTP 200 OK` untuk halaman HTML maupun seluruh aset gambar statis. |

---

## 🔒 Catatan Keamanan & Transparansi
- Website tidak menyimpan data perbankan maupun data pribadi pengunjung.
- Tidak meminta kredensial, PIN, OTP, atau password.
- Seluruh donasi/traktiran dilakukan mandiri oleh pengguna secara sukarela melalui aplikasi e-wallet atau mobile banking resmi pengguna.
