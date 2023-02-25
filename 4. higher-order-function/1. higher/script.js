// Higher Order Function
// function kerjakanTugas(mapel, selesai) {
//   console.log(`Mulai Mengerjakan Tugas ${mapel}`);
//   selesai();
// }

// function selesai() {
//   alert('Selesai Mengerjakan Tugas');
// }

// kerjakanTugas('Pemrograman Web & Perangkat Bergerak', selesai);



// Contoh 1
// setTimeout(() => {
//   console.log('Hello World');
// }, 1000);



// Contoh 2
// const tombol = document.querySelector('.submit');
// tombol.addEventListener('click', function () {
//   console.log('Tombol Ditekan');
// });


// contoh 3
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, Selamat ${waktu}, Semoga Hari-mu Menyenangkan`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// console.log(selamatPagi('Rifki Firansah'));



// Contoh Yang lain
// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);
// console.log(sum(range(1, 10)));


// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// repeatLog(20);

function repeatLog(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeatLog(10, console.log);
repeatLog(5, alert);