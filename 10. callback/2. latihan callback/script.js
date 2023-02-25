$('.button-search').on('click', function () {

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=6b5c8078&s=' + $('.input-keyword').val(),
    success: results => {
      const movies = results.Search;
      let cards = '';
      movies.forEach(m => {
        cards += cardMovie(m);
      });
      $('.bagian-cards').html(cards);

      // ketika tombol show details ditekan
      $('.button-detail').on('click', function () {
        $.ajax({
          url: 'http://www.omdbapi.com/?apikey=6b5c8078&i=' + $(this).data('imdbid'),
          success: m => {
            const modal = modalDetails(m);
            $('.modal-body').html(modal);
          },
          error: e => {
            console.log(e.responseText);
          }
        })

      });
    },
    error: e => {
      console.log(e.responseText);
    }
  });

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