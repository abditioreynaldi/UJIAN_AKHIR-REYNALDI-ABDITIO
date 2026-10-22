// JS-1: Variabel, tipe data, operator, dan template literal.
const namaToko = "Ruang Tekno";
const tahunBerdiri = 2018;
const sedangBuka = true;
const alamat = null;
const tahunSekarang = new Date().getFullYear();
const umurToko = tahunSekarang - tahunBerdiri;
console.log("JS-1 | Tipe data:", typeof namaToko, typeof tahunBerdiri, typeof sedangBuka, typeof alamat);
console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`);

// JS-2: Percabangan switch-case untuk status pesanan.
function cekStatusPesanan(statusKode) {
  switch (statusKode) {
    case 1: return "Menunggu Pembayaran";
    case 2: return "Pembayaran Dikonfirmasi";
    case 3: return "Sedang Dikemas";
    case 4: return "Sedang Dikirim";
    case 5: return "Pesanan Diterima";
    default: return "Kode Status Tidak Valid";
  }
}
console.log("JS-2 | Status:", [1, 3, 5, 9].map(cekStatusPesanan));

// JS-3: Loop for, while, dan for...of.
const hargaProduk = [75000, 125000, 450000, 620000, 89000, 1500000, 95000, 320000, 510000, 210000];
let totalHargaProduk = 0;
for (let indeks = 0; indeks < hargaProduk.length; indeks += 1) totalHargaProduk += hargaProduk[indeks];
console.log("JS-3 | Total dan rata-rata:", totalHargaProduk, totalHargaProduk / hargaProduk.length);
let indeksHargaMahal = 0;
while (indeksHargaMahal < hargaProduk.length && hargaProduk[indeksHargaMahal] <= 500000) indeksHargaMahal += 1;
if (indeksHargaMahal < hargaProduk.length) console.log("Harga pertama di atas Rp500.000:", indeksHargaMahal, hargaProduk[indeksHargaMahal]);
else console.log("Tidak ada produk di atas Rp500.000.");
for (const harga of hargaProduk) if (harga < 100000) console.log("Harga di bawah Rp100.000:", harga);

// JS-4: Operasi array daftar produk.
const daftarProduk = ["Laptop", "Sepatu", "Headphone", "Kamera", "Smartwatch", "Tablet", "Speaker", "Keyboard"];
daftarProduk.push("Mouse", "Charger");
daftarProduk.unshift("Tas Laptop");
console.log("Produk yang dihapus dari akhir:", daftarProduk.pop());
console.log("Produk yang dihapus dari awal:", daftarProduk.shift());
console.log("Apakah Laptop tersedia?", daftarProduk.includes("Laptop"));
console.log("Indeks Sepatu:", daftarProduk.indexOf("Sepatu"));
console.log("Tiga produk mulai indeks 2:", daftarProduk.slice(2, 5));
daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("Jumlah produk saat ini:", daftarProduk.length, daftarProduk);

// JS-5: Function declaration, expression, arrow function, dan default parameter.
function hitungDiskon(harga, persen) {
  return harga * (1 - persen / 100);
}
const hitungPPN = function (harga, tarif = 0.11) {
  return harga * (1 + tarif);
};
const hitungOngkir = (jarak) => {
  if (jarak <= 10) return 10000;
  if (jarak <= 25) return 25000;
  return 50000;
};
const kuadrat = angka => angka * angka;
const hargaAwal = 850000;
const persenDiskon = 10;
const jarakPengiriman = 12;
const totalBelanja = hitungPPN(hitungDiskon(hargaAwal, persenDiskon)) + hitungOngkir(jarakPengiriman);
console.log("JS-5 | Total belanja:", totalBelanja, "| Kuadrat 6:", kuadrat(6));

// JS-6: Object, akses properti, dan method.
const produkUnggulan = {
  nama: "Laptop Air 14",
  kategori: "Komputer",
  harga: 8499000,
  stok: 12,
  rating: 4.9,
  tampilkanInfo() {
    console.log(`${this.nama} (${this.kategori}) — Rp${this.harga.toLocaleString("id-ID")}, stok ${this.stok}.`);
  }
};
const kunciHarga = "harga";
console.log("JS-6 | Nama (dot):", produkUnggulan.nama, "| Harga (bracket):", produkUnggulan[kunciHarga]);
produkUnggulan.diskon = true;
delete produkUnggulan.rating;
console.log("Properti stok tersedia?", "stok" in produkUnggulan);
for (const properti in produkUnggulan) console.log(`${properti}:`, produkUnggulan[properti]);
console.log("Semua key:", Object.keys(produkUnggulan));
console.log("Semua value:", Object.values(produkUnggulan));
produkUnggulan.tampilkanInfo();

// JS-7: Iterable array dan string; object diiterasi dengan for...in.
const warna = ["Krem", "Emas", "Arang"];
for (const namaWarna of warna) console.log("Warna:", namaWarna);
const mahasiswa = { nama: "Reynaldi", jurusan: "Teknik Informatika", aktif: true };
for (const properti in mahasiswa) console.log(`Mahasiswa ${properti}:`, mahasiswa[properti]);
for (const karakter of "JavaScript") console.log("Karakter:", karakter);

// JS-8: String dan number built-in.
const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "250000.75";
const kalimat = "Selamat datang di Toko Elektronik Online";
const emailNormal = inputEmail.trim().toLowerCase();
const posisiAt = emailNormal.indexOf("@");
const hargaAngka = Number.parseFloat(inputHarga);
console.log("JS-8 | Email:", emailNormal, "| Gmail:", emailNormal.includes("@gmail"), "| Diawali budi:", emailNormal.startsWith("budi"));
console.log("Domain email:", emailNormal.slice(posisiAt + 1));
console.log("Kata-kata:", kalimat.split(" "));
console.log("Kalimat baru:", kalimat.replace("Elektronik", "Digital"));
console.log("Harga dua desimal:", hargaAngka.toFixed(2), "| Panjang kalimat:", kalimat.length);

// JS-9: Global, local, block scope, hoisting, dan closure.
const namaGlobal = "Ruang Tekno";
function demonstrasiScope() {
  const catatanLokal = "Hanya tersedia di dalam fungsi";
  console.log("Scope global dari fungsi:", namaGlobal);
  console.log("Scope lokal:", catatanLokal);
  if (true) {
    let diskonBlok = 15;
    console.log("Scope blok:", diskonBlok);
  }
  console.log("Scope blok dari luar blok:", typeof diskonBlok);
}
demonstrasiScope();
console.log("Scope global:", namaGlobal, "| nama lokal dari luar fungsi:", typeof catatanLokal);

console.log("Hoisting function declaration:", sapaSebelumDeklarasi());
function sapaSebelumDeklarasi() {
  return "Function declaration dapat dipanggil sebelum definisinya.";
}
console.log("Hoisting var sebelum deklarasi:", nilaiVar);
var nilaiVar = "Nilai sudah diinisialisasi";
try {
  console.log(nilaiLet); // let berada pada temporal dead zone sebelum deklarasi.
} catch (error) {
  if (!(error instanceof ReferenceError)) throw error;
  console.log("Hoisting let:", error.name, "— variabel belum dapat diakses sebelum deklarasi.");
}
let nilaiLet = "Sekarang sudah dapat diakses";
console.log("Nilai let setelah deklarasi:", nilaiLet);

function buatKeranjang() {
  const items = [];
  let totalHarga = 0;
  return {
    tambahItem(nama, harga) {
      items.push({ nama, harga });
      totalHarga += harga;
    },
    hapusItem(nama) {
      const indeksItem = items.findIndex(item => item.nama === nama);
      if (indeksItem === -1) {
        console.log(`Item "${nama}" tidak ditemukan.`);
        return;
      }
      totalHarga -= items[indeksItem].harga;
      items.splice(indeksItem, 1);
    },
    lihatKeranjang() {
      console.log("Isi keranjang:", items, "| Total:", totalHarga);
    }
  };
}
const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();
keranjang1.tambahItem("Laptop", 8499000);
keranjang1.tambahItem("Mouse", 349000);
keranjang1.hapusItem("Mouse");
keranjang2.tambahItem("Headphone", 1249000);
console.log("Keranjang 1:");
keranjang1.lihatKeranjang();
console.log("Keranjang 2 (independen):");
keranjang2.lihatKeranjang();

// JS-10: Date, hitung hari, format tanggal, dan contoh umur dalam hari.
const tanggalSekarang = new Date();
const formatLengkap = new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const awalHariIni = Date.UTC(tanggalSekarang.getFullYear(), tanggalSekarang.getMonth(), tanggalSekarang.getDate());
const awalTahunDepan = Date.UTC(tanggalSekarang.getFullYear() + 1, 0, 1);
const hariMenujuTahunBaru = Math.ceil((awalTahunDepan - awalHariIni) / 86400000);
function formatTanggalIndonesia(date) {
  const hari = String(date.getDate()).padStart(2, "0");
  const bulan = String(date.getMonth() + 1).padStart(2, "0");
  return `${hari}/${bulan}/${date.getFullYear()}`;
}
// Ganti tanggal contoh ini dengan tanggal lahir pribadi sebelum mengumpulkan tugas.
const tanggalLahirContoh = new Date(2000, 0, 1);
const umurDalamHari = Math.floor((awalHariIni - Date.UTC(tanggalLahirContoh.getFullYear(), tanggalLahirContoh.getMonth(), tanggalLahirContoh.getDate())) / 86400000);
console.log("JS-10 | Hari ini:", formatLengkap.format(tanggalSekarang));
console.log("Hari menuju Tahun Baru:", hariMenujuTahunBaru);
console.log("Format tanggal:", formatTanggalIndonesia(tanggalSekarang));
console.log("Umur (berdasarkan tanggal contoh 01/01/2000):", umurDalamHari, "hari");

// JS-11: Destructuring, spread, dan rest.
const pesanan = {
  idPesanan: "ORD-001",
  pelanggan: "Budi",
  totalHarga: 750000,
  statusBayar: true,
  alamatKirim: "Jl. Merdeka No. 10"
};
const { idPesanan, pelanggan, totalHarga: totalPesanan } = pesanan;
const { statusBayar: sudahBayar, kurirPengiriman = "JNE" } = pesanan;
function cetakPesanan({ idPesanan: id, pelanggan: namaPelanggan }) {
  console.log(`Pesanan ${id} milik ${namaPelanggan}.`);
}
cetakPesanan(pesanan);
console.log("Pesanan:", idPesanan, pelanggan, totalPesanan, sudahBayar, kurirPengiriman);

const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];
const [longitude, latitude] = koordinat;
const [, , , negara] = koordinat;
let nilaiA = 1;
let nilaiB = 2;
[nilaiA, nilaiB] = [nilaiB, nilaiA];
console.log("Koordinat:", longitude, latitude, negara, "| nilai bertukar:", nilaiA, nilaiB);

const produkAsli = ["Laptop", "Headphone"];
const produkSalinan = [...produkAsli];
produkSalinan.push("Kamera");
const produkGabungan = [...produkAsli, "Mouse Wireless", "Keyboard"];
const produkDiubah = { ...pesanan, totalHarga: 820000 };
const angkaUntukMax = [17, 82, 41, 9];
console.log("Salinan independen:", produkAsli, produkSalinan);
console.log("Produk gabungan:", produkGabungan);
console.log("Pesanan setelah disalin dan diperbarui:", produkDiubah);
console.log("Nilai maksimum:", Math.max(...angkaUntukMax));

function hitungRataRata(...angka) {
  if (angka.length === 0) return 0;
  return angka.reduce((jumlah, nilai) => jumlah + nilai, 0) / angka.length;
}
function buatPesanan(namaPemesan, ...daftarMenu) {
  console.log(`${namaPemesan} memesan ${daftarMenu.length} menu: ${daftarMenu.join(", ")}.`);
}
console.log("Rata-rata:", hitungRataRata(80, 90, 85));
buatPesanan("Reynaldi", "Laptop Air 14", "Mouse Wireless", "Headphone Studio");
