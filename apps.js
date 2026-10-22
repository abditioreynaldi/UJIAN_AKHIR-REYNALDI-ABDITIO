// hitungTotalBelanja
function hitungTotalBelanja(items) {
  return items.reduce((total, item) => total + (item.harga * item.jumlah), 0);
}

// formatRupiah
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// ringkasanPesanan
const ringkasanPesanan = (function() {
  let nomor = 1; // Variabel ini dijaga oleh closure
  
  // Menggunakan rest parameter (...items) untuk menangkap sisa argumen
  return function(namaPemesan, ...items) {
    const hasil = {
      pemesan: namaPemesan,
      items: items,
      totalItem: items.length,
      pesananke: nomor
    };
    nomor++; // Bertambah setiap pemanggilan
    return hasil;
  };
})();

// === Pengujian yang lain ===
console.log(hitungTotalBelanja([
  { nama: "Buku", harga: 50000, jumlah: 2 },
  { nama: "Pulpen", harga: 15000, jumlah: 3 }
])); // Output: 145000

console.log(formatRupiah(1500000)); // Output: "Rp 1.500.000"

console.log(ringkasanPesanan("Budi", "Nasi Goreng", "Es Teh"));
// Output: { pemesan: 'Budi', items: [ 'Nasi Goreng', 'Es Teh' ], totalItem: 2, pesananke: 1 }

console.log(ringkasanPesanan("Ani", "Mie Ayam"));
// Output: { pemesan: 'Ani', items: [ 'Mie Ayam' ], totalItem: 1, pesananke: 2 }
