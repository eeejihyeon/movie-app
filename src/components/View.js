import PropTypes from "prop-types";
// import { useState } from "react";

function View({ coverImg, title, year, rating, runtime, genres, desc }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>Year : {year}</p>
        <p>Rating : {rating}</p>
        <p>Runtime : {runtime}</p>
        <ul>
          Genres :
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>Description : {desc}</p>
      </div>
    </div>
  );
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};
export default View;
