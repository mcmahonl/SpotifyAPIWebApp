import React from 'react';
import Image from 'next/image'

import * as styles from "./PlaylistCard.module.css";

const PlaylistCard = ({ playlist, index }) => {
    return (
      <li key={index} className={styles.cardWrapper}>
        <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <p className={styles.nameText}>{playlist.name}</p>
          <p className={styles.tracksText}>Total Tracks: {playlist.tracks.total}</p>
        </a>
      </li>
    );
  };
  
  export default PlaylistCard;