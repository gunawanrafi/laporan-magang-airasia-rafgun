# AirAsia Internship Report — Website

Front-end only (no backend). Built from the Stitch design in
`../Website/stitch_airasia_internship_portfolio_hub/`, following the
`aero_professional_system/DESIGN.md` design system.

**Stack:** Vite + React + Tailwind CSS v4 + React Router (hash routing).

---

## Menjalankan

```bash
npm install     # sekali saja
npm run dev     # http://localhost:5173
npm run build   # hasil siap-upload ada di dist/
npm run preview # cek hasil build
```

---

## Mengedit isi

**Semua teks dan gambar ada di satu file: `src/data/content.js`.**
Kamu tidak perlu menyentuh file komponen sama sekali.

| Mau ubah apa                | Bagian di `content.js` |
| --------------------------- | ---------------------- |
| Nama, email, LinkedIn, logo | `site`, `owner`        |
| Menu navigasi               | `nav`                  |
| Hero, angka statistik, skill| `home`                 |
| Project + halaman detailnya | `projects`             |
| Course + dokumentasinya     | `courses`              |
| Galeri foto "Life at Red House" | `documentation`    |
| Halaman About Me            | `about`                |

Menambah project atau course = tambah satu objek ke array. Halaman
detail (`/projects/<slug>`, `/courses/<slug>`), kartu di beranda, dan
link-nya muncul otomatis.

### Gambar

Taruh file di `public/images/`, lalu panggil dengan
`asset('nama-file.jpg')` di `content.js`. Gambar bawaan dari desain
sudah diunduh ke sana, jadi situs ini tidak bergantung pada URL Google
yang bisa kedaluwarsa.

### Isi halaman course

`sections[].blocks` menerima beberapa tipe blok:

```js
{ type: 'text',    body, lead }                    // paragraf (lead = lebih besar)
{ type: 'image',   src, alt, caption }             // gambar, bisa diklik (lightbox)
{ type: 'list',    title, items: [{ term, body }] } // poin-poin penting
{ type: 'code',    title, lines: [] }              // terminal, ada tombol copy
{ type: 'gallery', items: [{ src, alt, label }] }  // grid screenshot
```

Setiap `sections[].id` harus cocok dengan salah satu `modules[].id`
supaya sidebar dan penyorotan modul ikut jalan.

---

## Warna & tipografi

Token desain ada di blok `@theme` pada `src/index.css` — ubah satu nilai
di situ dan seluruh situs ikut berubah.

---

## Deploy

`npm run build`, lalu unggah isi folder `dist/`. Karena memakai hash
routing dan `base: './'`, hasilnya jalan di GitHub Pages, Netlify,
Vercel, hosting statis biasa, bahkan dibuka langsung dari flashdisk
tanpa perlu konfigurasi rewrite apa pun.

---

## Catatan

- Tombol **Download Report / Download PDF / Download Resume** membuka
  dialog print browser (pilih "Save as PDF"). Sudah ada gaya khusus
  cetak: navbar, footer, dan tombol disembunyikan. Kalau punya PDF
  sungguhan, taruh di `public/` lalu isi `owner.resumeUrl`.
- Tombol **Contact** memakai `mailto:` — ganti `site.email` dulu, saat
  ini masih `you@example.com`.
- Seluruh teks masih konten contoh bawaan desain (intern "Alex", project
  Super App). Ganti dengan materi magangmu yang asli.
