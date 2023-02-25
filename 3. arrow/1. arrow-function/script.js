// Function Declaration

// Function Expression
// const tampilNama = function (nama) {
//   return `Hallo ${nama}`;
// }
// console.log(tampilNama('Rifki Firansah'));


// Arrow Function
// Cara biasa
// const tampilNama = (nama) => { return `Hallo ${nama}` };
// console.log(tampilNama('Rifki'));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Firansah', 'Siang'));

// Implisit return
// const tampilNama = nama => `Hallo ${nama}`;
// console.log(tampilNama('Aulia'));


// tanpa parameter
// const tampilNama = () => `Hello Indonesia`;
// console.log(tampilNama());

// contoh 
// let santri = ['Rifki Firansah', 'Egi Balyani', 'Gopur Amin', 'Nia Merlyawati'];
// let jumlahHuruf = santri.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

let santri = ['Rifki Firansah', 'Egi Balyani', 'Gopur Amin', 'Nia Merlyawati'];
// let jumlahHuruf = santri.map(nama => nama.length);
// console.log(jumlahHuruf);

// Array Ke Object
let jumlahHuruf = santri.map(nama => ({ nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);