# 📝 Soal Ujian Akhir — Praktek (Projek)

> **Cakupan Materi:** Section 1 (HTML) s/d Section 4 Bab 15 (Destructuring, Spread & Rest)
> **Bobot:** 60% dari total nilai ujian akhir
> **Deadline Pengumpulan:** 22 Oktober 2026 Pukul 22:30 WIB
> **Format Pengumpulan:** Push ke repository GitHub pribadi, kirimkan link repository

---

## Deskripsi Projek: **"Sistem Manajemen Toko Online Sederhana"**

Buatlah sebuah halaman web **Toko Online Sederhana** yang terdiri dari beberapa halaman dan mengintegrasikan HTML, CSS, dan JavaScript.

---

## 📄 Halaman 1: Landing Page (`index.html`)

Buatlah halaman utama toko online dengan ketentuan berikut:

### Struktur HTML (Section 1):

- Struktur HTML5 yang valid (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Favicon dan `<title>` yang sesuai
- Meta tags untuk SEO: `<meta name="description">`, `<meta name="keywords">`, `<meta name="author">`
- Tag `<meta name="viewport">` untuk responsive
- **Header** menggunakan tag semantik `<header>` berisi:
  - Logo toko (bisa pakai icon dari [Font Awesome](https://fontawesome.com/) atau gambar)
  - Navigasi utama menggunakan `<nav>` dengan `<a>` ke halaman lain (Produk, Tentang, Kontak)
- **Bagian Hero** menggunakan `<section>`:
  - Heading `<h1>` sebagai judul utama toko
  - Paragraf deskripsi singkat menggunakan `<p>`
  - Tombol CTA (Call to Action) berupa `<a>` yang mengarah ke halaman produk
- **Bagian Produk Unggulan** menggunakan `<section>`:
  - Minimal 3 kartu produk, masing-masing mengandung:
    - Gambar produk menggunakan `<img>` dengan atribut `alt` yang deskriptif
    - Nama produk (`<h3>`)
    - Harga produk (`<p>`)
    - Badge "Best Seller" menggunakan `<span>` dan `<strong>`
- **Footer** menggunakan tag semantik `<footer>`:
  - Teks copyright
  - Link media sosial (hyperlink)

### Styling CSS (Section 2):

- Gunakan **external CSS** (file `style.css` terpisah)
- Implementasikan:
  - CSS Selector: element, class, id, dan kombinasi
  - Color scheme yang konsisten (gunakan hex, rgb, atau hsl)
  - Background: warna solid dan/atau gradasi (`linear-gradient`)
  - Box Model: atur width, height, padding, margin, border dengan benar
  - Shadow: gunakan `box-shadow` pada kartu produk
  - Typography: gunakan Google Fonts, atur `font-family`, `font-size`, `line-height`
  - **Flexbox** untuk layout navigasi dan kartu produk
  - **CSS Grid** untuk tata letak bagian produk unggulan (minimal grid 3 kolom)
  - Display & Position: gunakan `position: relative/absolute` minimal di 1 elemen (contoh: badge "Best Seller")
  - `z-index` untuk mengatur tumpukan elemen jika diperlukan
  - Overflow: `overflow: hidden` pada kartu produk agar gambar tidak keluar
  - Pseudo-classes: `:hover` pada tombol dan kartu produk, `:nth-child` pada list
  - Pseudo-elements: `::before` atau `::after` untuk dekorasi (contoh: garis bawah pada heading)
  - CSS Unit: gunakan kombinasi `px`, `rem`, `em`, `%`, dan `vw/vh`
  - **Responsive Design** dengan Media Queries (`@media`):
    - Tampilan 3 kolom di desktop (>= 1024px)
    - Tampilan 2 kolom di tablet (>= 768px)
    - Tampilan 1 kolom di mobile (< 768px)

---

## 📄 Halaman 2: Form Pendaftaran / Kontak (`kontak.html`)

Buatlah halaman form kontak/pendaftaran:

### Struktur HTML (Section 1 — Form):

- Form dengan atribut `action="#"` dan `method="POST"`
- Elemen form yang wajib ada:
  - `<input type="text">` — Nama Lengkap (wajib, `required`)
  - `<input type="email">` — Email (wajib, `required`)
  - `<input type="tel">` — Nomor Telepon
  - `<input type="password">` — Password (minimal 8 karakter, `minlength="8"`)
  - `<input type="date">` — Tanggal Lahir
  - `<input type="number">` — Kode Pos
  - `<select>` — Pilihan Kota (minimal 5 opsi)
  - `<input type="radio">` — Jenis Kelamin (Laki-laki / Perempuan)
  - `<input type="checkbox">` — Persetujuan Terms & Conditions
  - `<textarea>` — Pesan tambahan
  - `<input type="submit">` — Tombol Kirim
- Setiap input memiliki `<label>` yang sesuai (gunakan atribut `for` dan `id`)
- Gunakan `<fieldset>` dan `<legend>` untuk mengelompokkan form

### Styling CSS (Section 2):

- Form di-center secara horizontal dan vertikal menggunakan Flexbox
- Styling input dengan padding, border, border-radius
- Focus state menggunakan pseudo-class `:focus`
- Tombol submit dengan efek hover

---

## 📄 Halaman 3: Tabel Data Produk (`produk.html`)

Buatlah halaman yang menampilkan daftar produk dalam bentuk tabel:

### HTML:

- Tabel menggunakan `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- Minimal 8 baris data produk dengan kolom: No, Nama Produk, Kategori, Harga, Stok
- Gunakan ordered list (`<ol>`) atau unordered list (`<ul>`) di suatu bagian halaman

### CSS:

- Styling tabel: border-collapse, striped rows (gunakan `:nth-child(even)`), hover pada baris
- Responsive table (horizontal scroll jika layar kecil)

---

## 📄 File JavaScript: Logika Bisnis (`app.js`)

> **Catatan:** Semua output JavaScript cukup ditampilkan di **console** (`console.log`). Tidak perlu manipulasi DOM.

Buatlah file `app.js` yang mendemonstrasikan penguasaan JavaScript dari Bab 1–15:

### Soal JS-1: Variabel, Tipe Data & Operator

```
Buat variabel untuk menyimpan data toko:
- namaToko (string)
- tahunBerdiri (number)
- sedangBuka (boolean)
- alamat (null — belum ditentukan)

Tampilkan tipe data masing-masing menggunakan typeof.
Hitung umur toko (tahun sekarang - tahunBerdiri) menggunakan operator aritmatika.
Gunakan template literal untuk menampilkan:
"Toko [nama] sudah beroperasi selama [umur] tahun."
```

### Soal JS-2: Percabangan / Control Flow

```
Buat fungsi cekStatusPesanan(statusKode) yang menerima kode status (number) dan
mengembalikan deskripsi:
- 1 → "Menunggu Pembayaran"
- 2 → "Pembayaran Dikonfirmasi"
- 3 → "Sedang Dikemas"
- 4 → "Sedang Dikirim"
- 5 → "Pesanan Diterima"
- Selain itu → "Kode Status Tidak Valid"

Gunakan switch-case. Panggil fungsi dengan beberapa kode untuk menguji.
```

### Soal JS-3: Perulangan / Looping

```
a) Buat array berisi 10 harga produk (angka). Gunakan for loop untuk menghitung
   total harga seluruh produk. Tampilkan total dan rata-rata harga.

b) Gunakan while loop untuk mencari produk pertama yang harganya di atas 500000.
   Tampilkan indeks dan harganya.

c) Gunakan for...of untuk menampilkan semua harga yang di bawah 100000.
```

### Soal JS-4: Array & Array Method

```
Buat array daftarProduk berisi nama-nama produk (minimal 8 item string).

a) Tambahkan 2 produk baru di akhir array (push)
b) Tambahkan 1 produk di awal array (unshift)
c) Hapus produk terakhir (pop) dan tampilkan produk yang dihapus
d) Hapus produk pertama (shift) dan tampilkan produk yang dihapus
e) Cek apakah "Laptop" ada di dalam array (includes)
f) Cari posisi indeks "Sepatu" di array (indexOf)
g) Ambil 3 produk dari indeks ke-2 tanpa mengubah array asli (slice)
h) Sisipkan produk baru "Mouse Wireless" di posisi indeks ke-3 (splice)
i) Tampilkan jumlah total produk saat ini (.length)
```

### Soal JS-5: Function

```
a) Buat Function Declaration hitungDiskon(harga, persen) yang mengembalikan
   harga setelah diskon.

b) Buat Function Expression hitungPPN yang menerima harga dan mengembalikan
   harga + PPN 11%. Gunakan default parameter untuk tarif PPN.

c) Buat Arrow Function hitungOngkir yang menerima jarak (km) dan mengembalikan
   biaya ongkir:
   - 0-10 km  → Rp 10.000
   - 11-25 km → Rp 25.000
   - > 25 km  → Rp 50.000

d) Buat Arrow Function ringkas (tanpa kurung kurawal) kuadrat yang mengembalikan
   hasil kuadrat dari sebuah angka.

e) Gabungkan ketiga fungsi (a, b, c) untuk menghitung total belanja:
   totalBelanja = hitungPPN(hitungDiskon(harga, persen)) + hitungOngkir(jarak)
   Tampilkan hasilnya.
```

### Soal JS-6: Object & Object Method

```
Buat object produkUnggulan dengan properti:
- nama, kategori, harga, stok, rating (number)

a) Akses properti "nama" menggunakan dot notation
b) Akses properti "harga" menggunakan bracket notation dengan variabel
c) Tambahkan properti baru "diskon" (boolean)
d) Hapus properti "rating" menggunakan delete
e) Cek apakah properti "stok" ada menggunakan operator "in"
f) Iterasi seluruh properti menggunakan for...in
g) Tampilkan semua key menggunakan Object.keys()
h) Tampilkan semua value menggunakan Object.values()
i) Buat method tampilkanInfo() di dalam object yang menggunakan this untuk
   menampilkan detail produk ke console.
```

### Soal JS-7: Iterable & Non-Iterable

```
a) Buat array warna dan iterasi menggunakan for...of, tampilkan setiap warna.
b) Buat object mahasiswa dan iterasi menggunakan for...in, tampilkan setiap
   key dan value.
c) Iterasi string "JavaScript" karakter per karakter menggunakan for...of.
```

### Soal JS-8: String & Number Built-in Function

```
Diberikan variabel:
  const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
  const inputHarga = "250000.75";
  const kalimat = "Selamat datang di Toko Elektronik Online";

a) Bersihkan dan normalisasi email (trim + toLowerCase)
b) Cek apakah email mengandung "@gmail" (includes)
c) Cek apakah email diawali "budi" setelah dinormalisasi (startsWith)
d) Potong domain dari email (gunakan indexOf dan slice)
e) Pecah kalimat menjadi array kata-kata (split)
f) Ganti kata "Elektronik" menjadi "Digital" (replace)
g) Konversi inputHarga ke Number menggunakan parseFloat
h) Tampilkan harga dengan 2 angka desimal (toFixed)
i) Tampilkan panjang kalimat (.length)
```

### Soal JS-9: Scope, Hoisting & Closure

```
a) Demonstrasikan perbedaan Global Scope, Local Scope, dan Block Scope:
   - Buat variabel di global scope
   - Buat fungsi dengan variabel di local scope
   - Buat blok if dengan variabel let di block scope
   - Tunjukkan variabel mana yang bisa dan tidak bisa diakses dari
     masing-masing scope

b) Demonstrasikan Hoisting:
   - Panggil function declaration sebelum didefinisikan (berhasil)
   - Coba akses variabel var sebelum deklarasi (undefined)
   - Coba akses variabel let sebelum deklarasi (ReferenceError — beri
     komentar dan jelaskan kenapa error)

c) Buat Closure — fungsi buatKeranjang() yang:
   - Memiliki variabel lokal "items" (array kosong) dan "totalHarga" (0)
   - Mengembalikan object dengan method:
     - tambahItem(nama, harga): menambahkan item dan update totalHarga
     - hapusItem(nama): menghapus item berdasarkan nama
     - lihatKeranjang(): menampilkan semua item dan total harga
   - Buktikan bahwa dua instance keranjang (keranjang1, keranjang2)
     memiliki data yang independen
```

### Soal JS-10: Date Object

```
a) Buat Date object untuk waktu saat ini, tampilkan tanggal lengkap format:
   "Senin, 20 Oktober 2026"

b) Hitung berapa hari lagi menuju Tahun Baru (1 Januari tahun depan).

c) Buat fungsi formatTanggalIndonesia(date) yang menerima Date object
   dan mengembalikan format "DD/MM/YYYY" (contoh: "20/10/2026")

d) Buat Date object untuk tanggal lahirmu, hitung umurmu dalam hari.
```

### Soal JS-11: Destructuring, Spread & Rest

```
a) Object Destructuring:
   const pesanan = {
     idPesanan: "ORD-001",
     pelanggan: "Budi",
     totalHarga: 750000,
     statusBayar: true,
     alamatKirim: "Jl. Merdeka No. 10"
   };

   - Destructure untuk mengambil idPesanan, pelanggan, dan totalHarga
   - Destructure dengan rename: statusBayar menjadi sudahBayar
   - Destructure dengan default value: kurirPengiriman = "JNE"
   - Destructure langsung di parameter fungsi:
     buat fungsi cetakPesanan({ idPesanan, pelanggan })

b) Array Destructuring:
   const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];

   - Ambil elemen pertama dan kedua (longitude, latitude)
   - Lewati elemen ketiga, ambil elemen keempat (negara) menggunakan
     koma kosong
   - Tukar nilai dua variabel menggunakan array destructuring

c) Spread Operator:
   - Salin array tanpa referensi (independent copy)
   - Gabungkan 2 array produk menjadi 1 dengan elemen baru di tengah
   - Salin object dan timpa salah satu properti (contoh: update harga)
   - Gunakan spread untuk menemukan nilai max dari array angka (Math.max)

d) Rest Parameter:
   - Buat fungsi hitungRataRata(...angka) yang menerima sejumlah angka
     dan mengembalikan rata-ratanya
   - Buat fungsi buatPesanan(namaPemesan, ...daftarMenu) yang menampilkan
     nama pemesan dan seluruh menu yang dipesan beserta jumlahnya
```

---

## 📊 Kriteria Penilaian Projek

| Komponen         | Bobot    | Keterangan                                                               |
| ---------------- | -------- | ------------------------------------------------------------------------ |
| Struktur HTML    | 20%      | HTML5 valid, semantik, form lengkap, tabel, SEO meta tags                |
| Styling CSS      | 25%      | Layout (Flexbox + Grid), responsive, pseudo-classes/elements, typography |
| JavaScript Logic | 40%      | Semua soal JS-1 s/d JS-11 berjalan dengan benar di console               |
| Code Quality     | 10%      | Penamaan variabel deskriptif, komentar, indentasi rapi, DRY              |
| Git & GitHub     | 5%       | Projek di-push ke GitHub, commit message deskriptif, minimal 5 commit    |
| **Total**        | **100%** |                                                                          |

---

> **Catatan:**
>
> - Projek dikerjakan secara **individu**
> - Plagiarisme akan mengakibatkan nilai **0**
> - Pastikan semua file JavaScript dapat dijalankan tanpa error di console browser
