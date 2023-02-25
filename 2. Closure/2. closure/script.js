function init() {
  // let nama = 'Rifki'; // local Variabel
  // let umur = 17;
  return function (nama) { // inner function (closure*)
    console.log(nama); // akses ke parent variable
    // console.log(umur); // akses ke parent variable
  }
  // return tampilNama;
}

// let panggilNama = init();
// panggilNama('firansah');
// panggilNama('rifki');

// Function vectory
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Hallo ${nama}, Good ${waktu}, Have a nice day`);
  }
}

let gMorning = ucapkanSalam('Morning');
let gEvening = ucapkanSalam('Evening');
let gNight = ucapkanSalam('Night');

// gMorning('Rifki');
// gNight('Firansah');

// console.dir(gNight('Firansah'));




let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();

// let a = add();
counter = 100;

console.log(add());
console.log(add());
console.log(add());