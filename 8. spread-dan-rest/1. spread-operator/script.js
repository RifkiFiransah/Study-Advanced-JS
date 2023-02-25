// Spread Operator
// Memecah iterables menjadi single elements
// const pkl = ['Rifki', 'Idam', 'Iqbal', 'Alif'];
// console.log(...pkl[2]);
// console.log(...pkl);

// Menggabungkan 2 Array
// const pkl = ['Rifki', 'Idam', 'Iqbal', 'Alif'];
// const guru = ['Egi', 'Esa', 'Dadang'];
// const orang = pkl.concat(guru);
// const orang = [...pkl, 'Aji', ...guru];
// console.log(orang);
// console.log(...orang);

// Mengcopy Array
// const pkl = ['Rifki', 'Idam', 'Iqbal', 'Alif'];
// const pkl1 = pkl;
// const pkl1 = [...pkl];
// pkl1[1] = 'Isrofil';
// console.log(pkl1);

// const liPkl = document.querySelectorAll('li');
// const pkl = [];
// for (let i = 0; i < liPkl.length; i++) {
//   pkl.push(liPkl[i].textContent);
// }
// const pkl = [...liPkl].map(p => p.textContent);
// console.log(pkl);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;