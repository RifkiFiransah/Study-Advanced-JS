// Prototype
// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Siswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Hallo ${this.nama}, Selamat Makan`;
// }

// Siswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Hallo ${this.nama}, Selamat Bermain`;
// }

// Siswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Hallo ${this.nama}, Selamat Tidur`;
// }

// let firansah = new Siswa('Rifki Firansah', 20);
// let iqbal = new Siswa('Iqbal Saputra', 25);



// Prototype Versi Class
class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, Selamat Makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, Selamat Main`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Hallo ${this.nama}, Selamat Tidur`;
  }
}

let firansah = new Siswa('Rifki Firansah', 20);