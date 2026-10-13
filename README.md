# Portofolio Refi Aura Noviansyah

Portofolio pribadi satu halaman menggunakan React, Vite, dan Tailwind CSS. Tampilan responsif dengan mode gelap dan konten berbahasa Indonesia.

## Menjalankan secara lokal

Pastikan Node.js 20.19+ atau 22.12+ tersedia, lalu jalankan:

```bash
npm install
npm run dev
```

## Mengedit konten

- **Tentang, pendidikan, keahlian, proyek, pengalaman, dan kontak:** edit data dan markup di `src/App.jsx`.
- **Email kontak:** ganti `email-anda@example.com` di bagian tautan kontak dan variabel `recipient` dalam fungsi `submitContact`.
- **LinkedIn:** ganti URL placeholder `https://www.linkedin.com/in/username-anda`.
- **Foto profil:** area avatar saat ini merupakan placeholder ilustratif berinisial RA. Ganti markup `.avatar-placeholder` di `src/App.jsx` dengan foto Anda dan sesuaikan CSS bila perlu.
- **Warna dan tata letak:** ubah token CSS di awal `src/styles.css`; aturan mode gelap berada pada `:root.dark`.

Informasi yang belum diberikan sengaja ditandai sebagai placeholder. Perbarui sebelum membagikan situs secara publik.

## Build dan preview

```bash
npm run build
npm run preview
```

## Deploy gratis ke GitHub Pages

Workflow `.github/workflows/deploy.yml` membangun dan menerbitkan situs setiap ada push ke branch `main`.

1. Buka **Settings → Pages** pada repo dan pilih **GitHub Actions** sebagai build and deployment source.
2. Push perubahan ke branch `main`; workflow akan membangun situs dan menerbitkannya.
3. Situs akan tersedia di `https://refiaura.github.io/portofolio-001/` setelah workflow selesai.

Konfigurasi Vite memakai base path `/portofolio-001/` untuk URL GitHub Pages proyek.
