// Tagged Templates
// const nama = 'Rifki Firansah';
// const umur = 17;

// function contoh(strings, ...args) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${args[i] || ''}`
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
// }

// const gabung = contoh`Hallo, Saya ${nama}, umur ${umur} tahun`;
// console.log(gabung);


// Highlight
const nama = 'Rifki Firansah';
const umur = 17;
const nis = 192010065022;
const email = 'rifkifiransah@gmail.com';

function Highlight(strings, ...args) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
}

const gabung = Highlight`Hallo, Saya ${nama}, umur ${umur} tahun, Nis saya ${nis}, dan ini E-mail saya ${email}`;
console.log(gabung);
document.body.innerHTML = gabung;
