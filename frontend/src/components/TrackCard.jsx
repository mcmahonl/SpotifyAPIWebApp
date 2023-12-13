import React from 'react';
import Image from 'next/image'

import * as styles from "./TrackCard.module.css";

const TrackCard = ({ track, index }) => {



  return (
    <li key={index} className={styles.cardWrapper}>
      <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        {/* to display track images, make sure it uses the album image */}
      <div className={styles.image}>
          <Image src={track.album.images[0].url} objectFit="cover" layout="fill" alt={track.name} />
        </div>
        <p className={styles.nameText}>{track.name}</p>
        <p className={styles.artistName}>{track.artists[0].name}</p>
      </a>
    </li>
  );
};

export default TrackCard;