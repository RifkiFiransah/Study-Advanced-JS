// Ambil Semua Elemen Video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

  // Ambil durasi masing" Video
  .map(item => item.dataset.duration)

  // Ubah durasi video menjadi float, ubah menit menjadi detik
  .map(waktu => {
    // 10:30 -> [10,30] split
    const parts = waktu.split(':').map(part => Math.floor(part));
    return (parts[0] * 60) + parts[1];
  })

  // Jumlahkan semua detik
  .reduce((total, durasi) => total + durasi);

// Ubah Formatnya jadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = Math.floor(jsLanjutan - menit * 60);

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlah = document.querySelector('.jumlah-video');
pJumlah.textContent = `${jmlVideo} Video.`;


console.log(detik);