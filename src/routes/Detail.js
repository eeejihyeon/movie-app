import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>Movie Detail</h1>
          <img src={movie.medium_cover_image} />;
          <div>
            <h2>{movie.title}</h2>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
            <p>Runtime : {movie.runtime}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>Description : {movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
