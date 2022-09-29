import MoviesList from "./components/MoviesList";
import "./App.css";
import {React, useState, useEffect} from 'react'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoad] = useState(false);


  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setError(null);
    setLoad(true);


    try{

    const res =  await fetch("https://swapi.dev/api/films/");

    if (!res.ok){
      throw new Error("Someone EFFED UP!!!");
    }


    const data = await res.json();

    //get movies and all their individual information and print it.
    const cleanMovies = data.results.map((mov) => {
      return{
        id: mov.episode_id,
        title: mov.title,
        openingText: mov.opening_crawl,
        releaseDate: mov.release_date,

      }
    })

    setMovies(cleanMovies);
    } catch (error){
      //error message
      setError(error.message);
    }

    setLoad(false);
  }



let content;
//check for errors
if (error){
  content = <p>{error}</p>;
}//check for loading
else if (isLoading === true) {
  content = <p>Loading....</p>;
}
else {
  content = <MoviesList movies={movies} />
}

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{ content }</section>
    </>
  );
};

export default App;
