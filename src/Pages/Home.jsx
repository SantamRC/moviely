import { useEffect, useState } from "react";
import Card from "../Components/Cards";
import getMovies from "../Utilities/getMovies";
const { MovieDb } = require("moviedb-promise");

function Home() {
  const [movies, setMovies] = useState([]);
  const mdb = new MovieDb("4d51e2149ffec1e3fabb84a54d724b76");

  useEffect(() => {
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
        setMovies(response.results);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
        return Error(error);
      });
    //setMovies(getMovies())
  });

  return (
    <div>
      {movies.map((movie) => (
        <Card
          image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          title={movie.title}
        />
      ))}
    </div>
  );
}

export default Home;
