import React from 'react';

import * as styles from "./GenreCard.module.css";

const GenreCard = ({ genres, index }) => {
  const genre = genres.map((genre, index) => {
    if (index < 3) {
      return (
        <p key={index} className={styles.genreText}>{genre}</p>
      );
    }
  });

  return (
    <li key={index} className={styles.cardWrapper}>
      <a href={google.com} target="_blank" rel="noopener noreferrer">
          {genre}
      </a>
    </li>
  );
};

export default GenreCard;