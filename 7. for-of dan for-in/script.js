// For Of dan For In

// 1. For of

// String
// const nama = 'Rifki Firansah';
// for (const n of nama) {
//   console.log(n);
// }

// Array
const nama = ['Muhammad', 'Rifki', 'Firansah'];
// for (let i = 0; i < nama.length; i++) {
//   console.log(nama[i]);
// }
// nama.forEach((n, i) => {
//   console.log(`${n} Adalah Siswa Ke ${i + 1}`);
// });

// FOR OF
// for (const nm of nama) {
//   console.log(nm);
// }
// for (const [i, n] of nama.entries()) {
//   console.log(`${n} Adalah Siswa ke ${i + 1}`);
// }

// Node List
// const liNama = document.querySelectorAll('.nama');
// for (const ln of liNama) {
//   console.log(ln.innerHTML);
// }
// console.log(liNama);

// Arguments Pada Function
// function cobaArguments() {
//   let jumlah = 0;
//   for (const args of arguments) {
//     jumlah += args;
//   }
//   return jumlah;
// }
// console.log(cobaArguments(1, 2, 3, 4, 5));



// For In 
// Object
const saya = {
  nama: 'Rifki Firansah',
  umur: 17,
  email: 'rifkifiransah@gmail.com'
}
// for (const sy in saya) {
//   if (Object.hasOwnProperty.call(saya, sy)) {
//     const bebas = saya[sy];
//     console.log(bebas);
//   }
// }

for (const sy in saya) {
  console.log(saya[sy]);
}