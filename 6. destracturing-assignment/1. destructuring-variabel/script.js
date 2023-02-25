// Destructuring Assignment / Variabel

// Destructuring Array
// const siswa = ['hallo', 'nama', 'saya', 'rifki firansah'];
// const [salam, satu, dua, nama] = siswa;
// console.log(nama);

// Skipping Items
// const [salam, , , nama] = siswa;
// console.log(salam);

// Swap Items / menukar isi variabel array
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return Value pada Function
// function coba() {
//   return [1, 2, 3];
// }
// const a = coba();

// const [a, b, c] = coba();
// console.log(c);

// rest parameter
// const [a, b, ...values] = [1, 2, 3, 4, 5];
// console.log(values[2]);



// Destructuring Object
// const murid = {
//   nama: 'Rifki Firansah',
//   umur: 17
// };
// const { nama, umur } = murid;
// console.log(umur);

// Assignment Tanpa Deklarasi
// ({ nama, umur } = { nama: 'Rifki Firansah', umur: 17 });
// console.log(umur);

// Assignment Ke Variable Baru
// const santri = {
//   nama: 'Gopur Amin',
//   umur: 16,
//   ponpes: 'Nurul Iman'
// };

// const { nama: n, umur: yo, ponpes: pontren } = santri;
// console.log(yo);

// Memberikan Default Value
// const santri = {
//   nama: 'Gopur Amin',
//   umur: 16,
//   ponpes: 'Nurul Iman',
//   sekolah: 'MAN 2 Kuningan'
// };

// const { nama, umur, ponpes, sekolah = 'Ciawi Gebang' } = santri;
// console.log(sekolah);

// Memberi Nilai Default + Assign Ke Variabel Baru
// const santri = {
//   nama: 'Gopur Amin',
//   umur: 16,
//   ponpes: 'Nurul Iman',
// sekolah: 'MAN 2 Kuningan'
// };

// const { nama: n = 'no Name', umur: u, ponpes: pondok, sekolah: school = 'Ciawi Gebang' } = santri;
// console.log(n);

// Rest Parameter
// ({ nama, ...nilai } = {
//   nama: 'Rifki Firansah',
//   umur: 17,
//   email: 'rifkifiransah@gmail.com',
//   kelas: 'XII RPL 1'
// });
// console.log(nilai.kelas);

// Mengambil Field pada Object, Setelah Dikirim sebagai Parameter untuk Function
const siswa = {
  nis: 192010065022,
  nama: 'Rifki Firansah',
  kelas: 'XII RPL',
  umur: 17
}
// function saya(siswa) {
//   return siswa.nis;
// }

function saya({ nis, nama }) {
  return `Halo Nama Saya ${nama}, Nis : ${nis}`;
}

console.log(saya(siswa));






