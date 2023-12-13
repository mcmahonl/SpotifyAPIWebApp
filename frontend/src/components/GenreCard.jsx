import React from 'react';

import * as styles from "./GenreCard.module.css";

const GenreCard = ({ genres, index }) => {

    if (index < 3) {
      return (
        <p key={index} className={styles.cardWrapper}>{genres}</p>
      );
    }
  ;

  return (
    <li key={index} className={styles.cardWrapper}>
      <a href={google.com} target="_blank" rel="noopener noreferrer">
          {genres}
      </a>
    </li>
  );
};

export default GenreCard;