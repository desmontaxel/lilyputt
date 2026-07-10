# Lilyputt🌸

Lilyputt adalah sebuah halaman web interaktif (Single-Page Application) bergaya estetika romantis (Romantic Aesthetic). Web ini dilengkapi dengan efek 3D paralaks, animasi elemen berjatuhan (hujan teks dan foto), serta pemutar musik latar bawaan. Sangat cocok digunakan untuk mengabadikan memori, membuat kejutan romantis, atau sebagai portofolio kreatif.

## ✨ Fitur Utama

- **Layar Pemuatan Interaktif (Loading Screen):** Animasi pembuka dengan ikon detak jantung.
- **Efek 3D Parallax:** Latar belakang dan objek akan bergerak merespons pergerakan kursor (di Desktop) atau usapan jari (di Mobile).
- **Animasi Hujan (Falling Elements):** Teks kata-kata romantis dan foto kenangan yang berjatuhan terus-menerus.
- **Warna Dinamis (Dynamic Color Glow):** Aksen warna neon (bayangan, teks, tombol) yang berubah perlahan setiap 3 detik.
- **Pemutar Musik Latar Tersembunyi:** Tombol floating untuk mengatur musik (Play, Pause, Mute, Loop, Volume) dengan dukungan Autoplay (melewati intro ke detik 5).
- **100% Responsif (Mobile-Friendly):** Tampilan otomatis menyesuaikan ukuran HP.
- **Scroll Terkunci (No Scroll):** Pengalaman layaknya *native app* tanpa gangguan efek *bounce* atau *pull-to-refresh* saat digeser.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun murni tanpa framework agar ringan dan mudah dimodifikasi:
- **HTML5:** Struktur dasar halaman (`index.html`).
- **CSS3:** Animasi keyframes, filter, media queries untuk responsivitas, dan perspektif 3D (`style.css`).
- **Vanilla JavaScript:** Logika interaksi, manipulasi DOM, generasi elemen acak, dan kontrol HTML Audio API (`script.js`).

## 🚀 Cara Menjalankan (Penggunaan Dasar)

Tidak perlu *server* khusus, Anda bisa langsung membukanya di browser!
1. Buka folder proyek ini.
2. Klik ganda file `index.html` (atau drag-and-drop ke Google Chrome / Edge / Safari).
3. **Klik layar** pertama kali untuk mengaktifkan pemutaran musik (jika di-blokir oleh aturan Autoplay browser).

## 📸 Cara Mengganti Konten (Kustomisasi)

- **Mengganti Musik:** 
  Ganti file di dalam folder `music/` dengan lagu yang Anda inginkan (format MP3), atau ubah nama file di dalam tag `<audio>` pada file `index.html`.
- **Mengganti Foto Kenangan:** 
  Siapkan 15 foto milik Anda. Ubah namanya secara berurutan menjadi `foto1.jpg`, `foto2.jpg`, hingga `foto15.jpg`, dan letakkan di dalam folder `foto/` (buat foldernya di dalam folder proyek ini jika belum ada).
- **Mengubah Teks:** 
  Buka file `script.js` menggunakan Notepad/Code Editor, cari variabel `const MESSAGES = [...]` di bagian atas, dan ubah atau tambahkan kata-kata romantis di sana.

## 📜 Lisensi & Pembuat

Website ini dikembangkan dan disesuaikan berdasarkan referensi desain interaktif untuk keperluan estetika personal. Silakan kustomisasi dan gunakan untuk momen spesial Anda!