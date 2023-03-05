/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Result from "./Result";

const Movies = () => {
  const display = "Movies";
  const API_KEY = "36aa0f5f49e955969097838d95356f6c";
  const IMAGE = "https://image.tmdb.org/t/p/w300";
  const default_img =
    "https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45";

  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState("");
  const breeds = ["a", "b"];
  const [search, searchMovies] = useState([]);

  useEffect(() => {
    if (search.length == 1 || search.length == 0) {
      requestMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function requestMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    const json = await res.json();
    setResults(json.results);
  }

  async function fetchMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    );
    const json = await res.json();
    setResults(json.results);
    console.log(search.length);
  }

  return (
    <div>
      <input
        onChange={(e) => {
          searchMovies(e.target.value);
          fetchMovies();
        }}
        placeholder="Search.."
        value={search}
        className="search"
      />

      <div className="grid-container">
        {results.map((r) => (
          <Result
            title={r.title || r.name}
            poster_path={IMAGE + r.poster_path}
            first_air_date={r.first_air_date || r.release_date}
            key={r.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
