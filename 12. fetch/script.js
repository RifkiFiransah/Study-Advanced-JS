// Fetch
const buttonSearch = document.querySelector('.button-search');
buttonSearch.addEventListener('click', function () {

  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=6b5c8078&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
      const movies = response.Search;
      let cards = '';
      movies.forEach(movie => {
        cards += cardMovie(movie);
      });
      const bagianCards = document.querySelector('.bagian-cards');
      bagianCards.innerHTML = cards;

      // Ketika tombol showdetails di-klik
      const buttonDetail = document.querySelectorAll('.button-detail');
      buttonDetail.forEach(btn => {
        btn.addEventListener('click', function () {
          const imdbid = this.dataset.imdbid;
          fetch('http://www.omdbapi.com/?apikey=6b5c8078&i=' + imdbid)
            .then(response => response.json())
            .then(m => {
              const modal = modalDetails(m);
              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = modal;
              // $('.modal-body').html(modal);
            })
        })
      });
    })

});




// Function nya
function cardMovie(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary button-detail" data-bs-toggle="modal" data-bs-target="#modalDetails" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function modalDetails(m) {
  return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item">
                  <h4>${m.Title} ${m.Year}</h4>
                </li>
                <li class="list-group-item"><strong>Director</strong> : ${m.Director}</li>
                <li class="list-group-item"><strong>Actors</strong> : ${m.Actors}</li>
                <li class="list-group-item"><strong>Writter</strong> : ${m.Writer}</li>
                <li class="list-group-item"><strong>Plot</strong> : <br> ${m.Plot}</li>
              </ul>
            </div>
          </div>
          </div>`;
}