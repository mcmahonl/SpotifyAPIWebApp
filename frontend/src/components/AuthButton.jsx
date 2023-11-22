import React from 'react';

import * as styles from "./AuthButton.module.css";

const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const scopes = [
  "user-top-read",
];

const AuthButton = () => {
  if (!process.env.NEXT_PUBLIC_CLIENT_ID) {
    return (
      <div className={styles.authButton}>
        <p className={styles.authButtonText}>Loading...</p>
      </div>
    );
  }

  return (
    <a 
      href={
        `${AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=${RESPONSE_TYPE}`
      } 
      className={styles.authButton}
    >
      <p className={styles.authButtonText}>Login with Spotify</p>
    </a>
  );
};

export default AuthButton;