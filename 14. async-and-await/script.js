// Async Dan Await
// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai');
//   }, 2000);
// });
// // console.log(coba);
// coba.then(coba => console.log(coba));

// Async & Await
// function cobaPromise() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('selesai');
//     }, 2000);
//   });
// }

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }
// cobaAsync();

// Async dan Await => Error Handling
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, waktu);
    } else {
      reject('kelamaan');
    }
  });
}
// const coba = cobaPromise();
// coba
//   .then(() => console.log(coba))
//   .catch(() => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
cobaAsync();