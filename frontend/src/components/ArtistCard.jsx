import React from 'react';
import Image from 'next/image'

import * as styles from "./ArtistCard.module.css";

const ArtistCard = ({ artist, index }) => {
  const genres = artist.genres.map((genre, index) => {
    if (index < 3) {
      return (
        <p key={index} className={styles.genreText}>{genre}</p>
      );
    }
  });

  return (
    <li key={index} className={styles.cardWrapper}>
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        <div className={styles.image}>
          <Image src={artist.images[0].url} objectFit="cover" layout="fill" alt={artist.name} />
        </div>
        <p className={styles.nameText}>{artist.name}</p>
        <div className={styles.genresWrapper}>
          {genres}
        </div>
      </a>
    </li>
  );
};

export default ArtistCard;