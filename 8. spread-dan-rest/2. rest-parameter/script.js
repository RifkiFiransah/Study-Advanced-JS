// Rest Parameter
// function myFunc() {
// return `a = ${a} b = ${b} args = ${args}`;
// return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// Tambah
// function tambah(...angka) {
// let jumlah = 0;
// for (const a of arguments) {
//   jumlah += a;
// }
//   return angka.reduce((a, b) => a + b);
// }
// console.log(tambah(1, 2, 3, 4, 5));

// Array Destructuring
// const kelPkl = ['Rifki', 'Iqbal', 'Idam', 'Alif'];
// const [ketua, wakil, ...anggota] = kelPkl;
// console.log(anggota[1]);

// Object Destructuring
// const rpl1 = {
//   proManager: 'Rifki Firansah',
//   frontend: 'Gilang',
//   backend: 'Rian',
//   ux: 'Ibnu',
//   devops: 'Vicki'
// };

// const { proManager, ...programmerLainnya } = rpl1;
// console.log(programmerLainnya);

// Filltering
function myFill(type, ...values) {
  return values.filter(v => typeof v === type);
}

console.log(myFill('boolean', 1, 7, 'Rifki', false, 9, true, 'Firansah'));
// <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>