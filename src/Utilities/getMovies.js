const { MovieDb } = require("moviedb-promise");

function getMovies() {
  const mdb = new MovieDb("4d51e2149ffec1e3fabb84a54d724b76");
  mdb
    .discoverMovie({
      page: 1,
      include_video: false,
      include_adult: false,
      sort_by: "popularity.desc",
      language: "en-US",
    })
    .then((response) => {
      //console.log(typeof response.results);
      return response.results;
    })
    .catch((error) => {
      console.error(error);
      return Error(error);
    });
}

export default getMovies;
