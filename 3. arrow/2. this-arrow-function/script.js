// Konsep This Pada Arrow Function

// Constructor Function
// const Siswa = function () {
//   this.nama = 'Rifki';
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`Hallo Nama Saya ${this.nama}, umur ${this.umur} tahun`);
//   }
// }

// const rifki = new Siswa();


// Arrow function
// const Siswa = function () {
//   this.nama = 'Rifki';
//   this.umur = 17;
//   this.sayHello = () => {
//     console.log(`Hallo Nama Saya ${this.nama}, umur ${this.umur} tahun`);
//   }
// }

// const rifki = new Siswa();


// Object Literal
// const ssw1 = {
//   nama: 'Firansah',
//   umur: 17,
//   sayHello: () => {
//     // console.log(`Hallo Nama Saya ${this.nama}, umur ${this.umur} tahun`);
//     console.log(this);
//   }
// }



const Siswa = function () {
  this.nama = 'Rifki';
  this.umur = 17;
  this.sayHello = function () {
    console.log(`Hallo Nama Saya ${this.nama}, umur ${this.umur} tahun`);
  }

  setInterval(() => {
    // console.log(this.umur++);
  }, 1000)

}

const rifki = new Siswa();