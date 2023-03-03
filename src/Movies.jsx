/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Result from "./Result";

const Movies = () => {
  const display = "Movies";
  const API_KEY = "36aa0f5f49e955969097838d95356f6c";
  const IMAGE = "https://image.tmdb.org/t/p/w300";
  const [results, setResults] = useState([]);
  const [breed, setBreed] = useState("");
  const breeds = ["a", "b"];

  useEffect(() => {
    requestMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  async function requestMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    const json = await res.json();
    setResults(json.results);
  }

  console.log(results);

  return (
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
  );
};

export default Movies;
