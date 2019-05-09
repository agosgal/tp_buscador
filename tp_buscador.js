// Agarro todas las cosas

  const buscador = document.getElementById("placeholder");
  const titulo = document.querySelector("#detalles .title");
  const rated = document.querySelector("#detalles .tags #rated");
  const year = document.querySelector("#detalles .tags #year");
  const genre = document.querySelector("#detalles .tags #genre")
  const plot = document.querySelector("#detalles .plot");
  const written = document.querySelector("#detalles .written-by span");
  const directed = document.querySelector("#detalles .directed-by span");
  const starring = document.querySelector("#detalles .starring span");
  const poster = document.querySelector("#poster img");
  const fondo = document.querySelector(".fondo img")

  //Esto me sirve para conocer el código de la tecla
  // buscador.addEventListener('keypress', function (event)    {
  //     console.log(event.keyCode)
  //   })

    // Me traigo el valor que ingresó
  buscador.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
    return cambioPeli()
    }
})

const cambioPeli = () => {
  const elegida = buscador.value;
  const prom = fetch("https://www.omdbapi.com/?apikey=2fb7569a&t=" + elegida);
    console.log(prom);
    prom.then(res => res.json())
    .then (movie => {
    console.log(movie);
    if(movie) {
      // Si existe me traigo los datos
      titulo.innerHTML = movie.Title;
      rated.innerHTML = movie.Rated;
      year.innerHTML = movie.Year;
      genre.innerHTML = movie.Genre; 
      plot.innerHTML = movie.Plot;
      written.innerHTML = movie.Writer;
      directed.innerHTML = movie.Director
      starring.innerHTML = movie.Actors;
      poster.src = movie.Poster;
      fondo.src = movie.Poster
}
})
}