const movies = [
    {"Title":"Batman: Endgame","Year":"2019","Rated":"N/A","Released":"25 Apr 2019","Runtime":"181 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"Anthony Russo, Joe Russo","Writer":"Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)","Actors":"Brie Larson, Robert Downey Jr., Karen Gillan, Tessa Thompson","Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4154796","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Marvel Studios","Website":"https://movies.disney.com/avengers-endgame","Response":"True"},
    {"Title":"Avengers: Infinity War","Year":"2018","Rated":"PG-13","Released":"27 Apr 2018","Runtime":"149 min","Genre":"Action, Adventure, Sci-Fi","Director":"Anthony Russo, Joe Russo","Writer":"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)","Actors":"Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans","Plot":"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"8.5","imdbVotes":"612,147","imdbID":"tt4154756","Type":"movie","DVD":"14 Aug 2018","BoxOffice":"$664,987,816","Production":"Walt Disney Pictures","Website":"http://marvel.com/movies/movie/223/avengers_infinity_war","Response":"True"},
    {"Title":"Captain Marvel","Year":"2019","Rated":"PG-13","Released":"08 Mar 2019","Runtime":"123 min","Genre":"Action, Adventure, Sci-Fi","Director":"Anna Boden, Ryan Fleck","Writer":"Anna Boden (screenplay by), Ryan Fleck (screenplay by), Geneva Robertson-Dworet (screenplay by), Nicole Perlman (story by), Meg LeFauve (story by), Anna Boden (story by), Ryan Fleck (story by), Geneva Robertson-Dworet (story by)","Actors":"Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law","Plot":"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.","Language":"English","Country":"USA, Australia","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"7.2","imdbVotes":"212,478","imdbID":"tt4154664","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Marvel Studios","Website":"https://movies.disney.com/captain-marvel","Response":"True"},
    {"Title":"Ant-Man and the Wasp","Year":"2018","Rated":"PG-13","Released":"06 Jul 2018","Runtime":"118 min","Genre":"Action, Adventure, Comedy, Sci-Fi","Director":"Peyton Reed","Writer":"Chris McKenna, Erik Sommers, Paul Rudd, Andrew Barrer, Gabriel Ferrari, Stan Lee (based on the Marvel Comics by), Larry Lieber (based on the Marvel Comics by), Jack Kirby (based on the Marvel Comics by)","Actors":"Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins","Plot":"As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.","Language":"English, Spanish","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.1","imdbVotes":"217,591","imdbID":"tt5095030","Type":"movie","DVD":"16 Oct 2018","BoxOffice":"N/A","Production":"Walt Disney Pictures","Website":"https://marvel.com/antman","Response":"True"},
    {"Title":"Black Panther","Year":"2018","Rated":"PG-13","Released":"16 Feb 2018","Runtime":"134 min","Genre":"Action, Adventure, Sci-Fi","Director":"Ryan Coogler","Writer":"Ryan Coogler, Joe Robert Cole, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel Comics by)","Actors":"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira","Plot":"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.","Language":"English, Swahili, Nama, Xhosa, Korean","Country":"USA","Awards":"14 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"88/100"}],"Metascore":"88","imdbRating":"7.3","imdbVotes":"486,841","imdbID":"tt1825683","Type":"movie","DVD":"15 May 2018","BoxOffice":"$501,105,037","Production":"Marvel Studios","Website":"https://www.marvel.com/movies/black-panther","Response":"True"},
    {"Title":"Thor: Ragnarok","Year":"2017","Rated":"PG-13","Released":"03 Nov 2017","Runtime":"130 min","Genre":"Action, Adventure, Comedy, Fantasy, Sci-Fi","Director":"Taika Waititi","Writer":"Eric Pearson, Craig Kyle, Christopher L. Yost, Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)","Actors":"Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba","Plot":"Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.","Language":"English","Country":"USA","Awards":"5 wins & 30 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.9","imdbVotes":"451,774","imdbID":"tt3501632","Type":"movie","DVD":"06 Mar 2018","BoxOffice":"$314,971,245","Production":"Walt Disney Pictures","Website":"http://movies.disney.com/thor-ragnarok","Response":"True"}
  ];

  //Acá voy agarrando todas las cosas

  const buscador = document.getElementById("placeholder");
  const titulo = document.querySelector("#detalles .title");
  const rated = document.querySelector("#detalles .tags #rated");
  const year = document.querySelector("#detalles .tags #year");
  const genre = document.querySelector("#detalles .tags #genre")
  const plot = document.querySelector("#detalles .plot");
  const written = document.querySelector("#detalles .written-by span");
  const directed = document.querySelector("#detalles .directed-by span");
  const starring = document.querySelector("#detalles .starring span");


  // Esto me sirve para conocer el código de la tecla
//   buscador.addEventListener('keypress', function (event)    {
//       console.log(event.keyCode)
//     })

    // Si presiona enter me traigo el valor que ingresó
  buscador.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
    const elegida = buscador.value;
    // Recorro los títulos a ver si alguno contiene la elegida 
for (let i=0; i<movies.length; i++) {
    if (movies[i].Title.includes(elegida)) {
    // Y si alguna contiene me traigo los datos 
        console.log("Match");
        titulo.innerHTML = movies[i].Title;
        rated.innerHTML = movies[i].Rated;
        year.innerHTML = movies[i].Year;
        genre.innerHTML = movies[i].Genre; 
        plot.innerHTML = movies[i].Plot;
        written.innerHTML = movies[i].Writer;
        directed.innerHTML = movies[i].Director
        starring.innerHTML = movies[i].Actors
    }
}
}
})

