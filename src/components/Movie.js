import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.item}>
      <img src={coverImg} alt={title} />
      <div>
        <h2 className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{year}</p>
      </div>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      {/* <p>{summary.length >= 200 ? `${summary.slice(0, 200)}...` : summary}</p> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
