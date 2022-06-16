import { useState, useEffect } from "react";
import Movie from "./Movie";
import styles from "../css/Movie.module.css";

function Content({ movieApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(movieApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.box}>
          {movies.map((movie) => (
            <Movie
              key={movie.id} // key는 React.js에서 map 안에서 component들을 render할 때 사용
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Content;
