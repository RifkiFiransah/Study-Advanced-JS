// Template Literals
// const nama = 'Rifki Firansah';
// const umur = 17;
// console.log(`Hallo Saya ${nama}, umur saya ${umur} tahun.`);


// Embeded Expression
// console.log(`${2 * 2}`);
// console.log(`${alert('Hallo!')}`);
// const angka = 15;
// console.log(`${(angka % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragments
const siswa = {
  nama: 'Rifki Firansah',
  kelas: 'XII RPL 1',
  umur: 17,
  nis: 192010056022,
  email: 'rifkifiransah@gmail.com'
};

const tampil = `<div class="siswa">
  <h1>Nama : ${siswa.nama}</h1>
  <h1>Kelas : ${siswa.kelas}</h1>
  <h1>Umur : ${siswa.umur}</h1>
  <h1>Nis : ${siswa.nis}</h1>
  <h1>Email : ${siswa.email}</h1>
</div>`;

console.log(tampil);