// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=6b5c8078&s=avengers',
//   success: movies => console.log(movies),
//   error: e => console.log(e.responseText)
// });

// const xhr = new XMLHttpRequest;
// xhr.onreadystatechange(function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// });
// xhr.open('get', 'http://www.omdbapi.com/?apikey=6b5c8078&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=6b5c8078&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response))


// Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous dimasa yang akan datang
// janji(terpenuhi / ingkar)
// states(fulfiled / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch)

// contoh 1 
// let tepatiJanji = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (tepatiJanji) {
//     resolve('Janji Telah Ditepati');
//   } else {
//     reject('Ingkar Janji');
//   }
// })
// janji1
//   .then(response => console.log('OK :' + response))
//   .catch(response => console.log('NOT OK :' + response))

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Janji telah Ditepati setelah beberapa waktu')
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       reject('Janji telah di ingkari setelah beberapa waktu')
//     }, 1000);
//   }
// });
// console.log('mulai');

// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('Proses Tunggu Selesai'))
//   .then(response => console.log('OK :' + response))
//   .catch(response => console.log('NOT OK :' + response))

// console.log('selesai');


// Promise.All()
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      film: 'Dilan',
      sutradara: 'Rifki Firansah',
      actors: 'Vicky, Idam'
    }]);
  }, 2000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Cirebon',
      temperatur: 33,
      kondisi: 'Cerah Berawan'
    }]);
  }, 1000);
});
// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
  // .then(response => console.log(response));
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
