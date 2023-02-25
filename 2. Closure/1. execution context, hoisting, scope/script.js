//  2.1 Execution Context, Hoisting, Scope
// console.log(nama);
// var nama = 'rifki';

// creation phase pada global context
// nama var = undefined
// nama dunction = fn()
// Hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = 'rifki';
// var umur = 17;

// function sayHello() {
//   return `Hallo, nama saya ${this.nama}, umur saya ${this.umur} tahun`;
// }

// function memebuat local execution context
// Yang didalam terdapat creation dan execution phase
// window
// arguments hoisting


// var nama = 'rifkifiransah';
var username = '@rifkifiransah';
function cetakUrl() {
  console.log(arguments);
  var instagran = 'http://instagram.com/';
  return instagran + username;
}

console.log(cetakUrl('@ekaramdani', '@ega'));


// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }
//     c();
//   }
//   b();
// }
// a();



function satu() {
  var nama = 'Rifki';
  console.log(nama);
}

function dua(nama) {
  console.log(nama);
}

console.log(nama);
var nama = 'eka';
satu();
dua('ega');
console.log(nama);