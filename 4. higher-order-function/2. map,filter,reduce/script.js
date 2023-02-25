// Higher order Function
// Filter, Map, Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Coba Pake for dulu
// const newAngka = [];
// for (let i = 1; i <= angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);


// Menggunakan Filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// Menggunakan Map
// const angkaBaru = angka.map(a => a * 2);
// console.log(angkaBaru);

// Menggunakan Reduce
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const angkaBaru = angka.reduce((accumulator, currantValue) => accumulator + currantValue, 0);
// console.log(angkaBaru);




// Menggunakan Method Chaining
const angkaBaru = angka.filter(a => a > 2) // 3,4,8,9,9
  .map(a => a * 2) // 6,8,16,18,18
  .reduce((acc, cur) => acc + cur, 0); // 66
console.log(angkaBaru);