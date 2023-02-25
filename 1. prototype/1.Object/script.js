// Cara Untuk Membuat Object Pada Java Script
// 1. Object Literal
// variabel Harus Beda & Problemnya tidak Efektif untuk Object Yang Banyak
// let siswa1 = {
//   nama: 'Rifki',
//   energi: 15,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   }
// }

// let siswa2 = {
//   nama: 'Idam',
//   energi: 20,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   }
// }



// 2. Function Declararion
// Wajib Return biar gak error
const methodSiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selamat Makan`);
  }
  ,
  main: function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, Selamat Bermain`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Hallo ${this.nama}, Selamat Tidur`);
  }
};

function Siswa(nama, energi) {
  let siswa = Object.create(methodSiswa);
  siswa.nama = nama;
  siswa.energi = energi;

  return siswa;
}

let rifki = Siswa('Rifki Firansah', 10);
let idam = Siswa('Isrofil Idam', 30);


// 3. Constructor Function
// Keyword New
// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   }
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Bermain`);
//   }
// }

// let rifki = new Siswa('Rifki Firansah', 20);
// let alif = new Siswa('Nadir Alif', 10);


// 4. Object.create