import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Card from "../Components/Cards";
import getMovies from "../Utilities/getMovies";
const { MovieDb } = require("moviedb-promise");

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [typed, setTyped] = useState("");
  const mdb = new MovieDb("4d51e2149ffec1e3fabb84a54d724b76");

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    console.log(user);

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
        //console.log(movies);
      })
      .catch((error) => {
        console.error(error);
        return Error(error);
      });
    //setMovies(getMovies())
  }, []);

  const find = (value) => {
    value.preventDefault();
    mdb.searchMovie(typed).then((response) => {
      setSearch(response.results);
    });
  };

  return (
    <div>
      <form onSubmit={(e) => find(e)} className="d-flex">
        <input
          className="form-control me-2 ms-2 mt-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setTyped(e.target.value)}
        />
        <button className="btn btn-outline-success mt-2" type="submit">
          Search
        </button>
      </form>
      {search.length
        ? search.map((movie) => (
            <Card
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              title={movie.title}
            />
          ))
        : movies.map((movie) => (
            <Card
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              title={movie.title}
            />
          ))}
    </div>
  );
}

export default Home;
