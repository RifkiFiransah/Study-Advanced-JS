// Callback
// Synchronous

// function hallo(nama) {
//   alert(`Hallo ${nama}`)
// }
// function tampilPesan(callback) {
//   const nama = prompt('Masukkan Nama Anda: ');
//   callback(nama);
// }
// tampilPesan(hallo);Rifki
// tampilPesan(nama => alert(`Hai ${nama}`));

// const siswa = [
//   {
//     "nama": "Rifki Firansah",
//     "nis": "192010065022",
//     "email": "rifkifiransah@gmail.com",
//     "jurusan": "Rekayasa Perangkat Lunak",
//     "idGuruWali": 1
//   },
//   {
//     "nama": "Isropil Idam",
//     "nis": "192010065016",
//     "email": "idam@gmail.com",
//     "jurusan": "Rekayasa Perangkat Lunak",
//     "idGuruWali": 2
//   },
//   {
//     "nama": "Iqbal Saputra",
//     "nis": "192010065020",
//     "email": "iqbal@gmail.com",
//     "jurusan": "Rekayasa Perangkat Lunak",
//     "idGuruWali": 2
//   }
// ];
// console.log('Mulai');
// siswa.forEach(s => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date;
//   }
//   console.log(s.nama)
// });
// console.log('Selesai');


// Asynchronous Callback
// function getDataSiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.responseText);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   }
//   xhr.open('get', url);
//   xhr.send();
// }
// console.log('Mulai');
// getDataSiswa('data/siswa.json', result => {
//   // console.log(JSON.parse(result));
//   const ssw = JSON.parse(result);
//   ssw.forEach(s => {
//     console.log(s.nama);
//   });
// }, e => {
// console.log(e.responseText);
// });
// console.log('Selesai');


// Versi JQuery
console.log('Mulai');
$.ajax({
  url: 'data/siswa.json',
  success: ssw => {
    ssw.forEach(s => {
      console.log(s.nama)
    });
  },
  error: err => {
    console.log(err.responseText);
  }
});
console.log('Selesai');