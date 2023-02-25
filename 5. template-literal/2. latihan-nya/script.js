//  1. HTML Fragments
// const siswa = {
//   nama: 'Rifki Firansah',
//   nis: 192010065022,
//   umur: 17,
//   email: 'rifkifiransah@gmail.com'
// };
// const el = `<div class="siswa">
//   <h1>Nama: ${siswa.nama}</h1>
//   <span class="nis">NIS: ${siswa.nis}</span>
// </div>`;


//  2. Looping
const siswa1 = [
  {
    nama: 'Rifki Firansah',
    email: 'rifkifiransah@gmail.com'
  },
  {
    nama: 'Idam',
    email: 'idam@gmail.com'
  },
  {
    nama: 'Iqbal',
    email: 'iqbal@gmail.com'
  }
];
const ssw = `<div class="siswa">
  ${siswa1.map(s => `<ul>
    <li>${s.nama}</li>
    <li>${s.email}</li>
  </ul>`).join('')}
</div>`;


//  3. conditionals
//   Ternary
const lagu = {
  judul: 'Diam Tanpa Kata',
  penyanyi: "D'Masiv",
  feat: 'Rayi Bae'
}

const tmpil = `<div class="lagu">
    <h2>Judul Lagu: ${lagu.judul}</h2>
    <h2>Penyanyi: ${lagu.penyanyi} ${(lagu.feat) ? `(feat ${lagu.feat})` : ''} </h2>
</div>`;



//  4. nested
//   HTML fragments Bersarang
const siswa = {
  nama: 'Rifki Firansah',
  Kelas: 'XII RPL 1',
  mapel: [
    'Pemrograman Web & Perangkat Bergerak',
    'Pemrograman Berorientasi Object',
    'Pemodelan Perangkat Lunak',
    'Basis Data'
  ]
}

function tampilMapel(mapel) {
  return `
  <ol>
    ${mapel.map(m => `<li>${m}</li>`).join('')}
  </ol>
  `;
}
const el = `<div class="siswa">
  <h1>${siswa.nama}</h1>
  <h3>Kelas : ${siswa.Kelas}<h3>
  <ol>
    ${siswa.mapel.map(m => `<li>${m}</li>`).join('')}
  </ol>
  </div > `;
// ${tampilMapel(siswa.mapel)}


document.body.innerHTML = el;