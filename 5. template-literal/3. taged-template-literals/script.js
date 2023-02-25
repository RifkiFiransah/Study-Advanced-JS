// Tagged Templates
const nama = 'Rifki Firansah';
const umur = 17;

function coba(strings, ...values) {
  // let result = '';
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`
  // });
  // return result;
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`);
}

const str = coba`Hallo saya adalah ${nama}, dan umur saya ${umur} tahun.`;
console.log(str);

// Highlight