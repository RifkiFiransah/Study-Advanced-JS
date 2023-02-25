// Destructuring Function

// Destructuring Function (Array)
// function tambahKali(a, b) {
//   return [a + b, a * b];
// }
// console.log(tambahKali(2, 3)[1]);
// const [tambah, kali] = tambahKali(2, 3);
// console.log(kali);

// Urutan nya Harus sama seperti array nya
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi = 'Tidak ada'] = kalkulasi(5, 2);
// console.log(bagi);


// Destructuring Function (Object)
// function saya() {
//   return {
//     nama: 'Rifki Firansah',
//     umur: 17,
//     sekolah: 'SMK Negeri 4 Kuningan'
//   }
// }
// const { sekolah, nama, umur, email = 'email tidak diketahui' } = saya();
// console.log(email);


// Destructuring Function Argument
const nSaya = {
  nama: 'Rifki Firansah',
  umur: 17,
  sekolah: 'SMK Negeri 4 Kuningan',
  nilai: {
    tugas: 95,
    uh: 85,
    uts: 92,
    uas: 80
  }
}

// function sayaAdalah(saya) {
//   return `Hallo saya Adalah ${saya.nama}, umur ${saya.umur} Tahun, Dan Saya sekolah Di ${saya.sekolah}`;
// }

function sayaAdalah({ nama, umur, sekolah, nilai: { tugas, uh, uts, uas } }) {
  return `Hallo saya Adalah ${nama}, umur ${umur} Tahun, Dan Saya sekolah Di ${sekolah}, nilai tugas ${tugas}, ulangan harian ${uh}, UTS ${uts}, UAS ${uas}`;
}

console.log(sayaAdalah(nSaya));