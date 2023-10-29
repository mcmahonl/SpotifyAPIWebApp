"use client"; // enable the use of react hooks by marking this as a client-side component

import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

import * as styles from "./page.module.css";

const AuthPage = () => {
  const CLIENT_ID = "2a96ccafedda405894e0e6b15eb1e24d"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <div className={styles.wrapper}>
      <a 
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} 
        className={styles.authButton}
      >
        <p className={styles.authButtonText}>Login with Spotify</p>
      </a>
    </div>
  );
};

export default AuthPage;