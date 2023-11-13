"use client"; // enable the use of react hooks by marking this as a client-side component

import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

import * as styles from "./page.module.css";

const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const scopes = [
  "user-top-read",
];

const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <a 
        href={`${AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=${RESPONSE_TYPE}`} 
        className={styles.authButton}
      >
        <p className={styles.authButtonText}>Login with Spotify</p>
      </a>
    </div>
  );
};

export default AuthPage;