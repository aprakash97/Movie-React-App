/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Result from "./Result";

const Movies = () => {
  const display = "Movies";
  const API_KEY = "36aa0f5f49e955969097838d95356f6c";
  const [results, setResults] = useState();
  const [breed, setBreed] = useState("");
  const breeds = ["a", "b"];

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.results); // `results` from the tmdb docs
    // console.log(data);
    console.log(recipes);
  };

  return (
    <div>
      {recipes.map((rec) => (
        <Result
          title={rec.title}
          //animal={pet.animal}
          //breed={pet.breed}
          key={rec.id}
        />
      ))}
    </div>
  );
};

export default Movies;
