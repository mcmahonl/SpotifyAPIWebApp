import React from 'react';
import Image from 'next/image'

import * as styles from "./TrackCard.module.css";

const TrackCard = ({ track, index }) => {



  return (
    <li key={index} className={styles.cardWrapper}>
      <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        <p className={styles.nameText}>{track.name}</p>
      </a>
    </li>
  );
};

export default TrackCard;