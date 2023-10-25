"use client"; // enable the use of react hooks by marking this as a client-side component

import React, { useState, useEffect } from 'react';
// import LoginButton from './LoginButton';

import * as styles from "./page.module.css";

const AuthPage = () => {
  const CLIENT_ID = "2a96ccafedda405894e0e6b15eb1e24d"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  // useState is a react hook that allows us to maintain the state of variables in functional components
  const [token, setToken] = useState("");

  // useEffect is a hook that runs each time a component is rendered, very useful in many situations
  useEffect(() => {
    const hash = window.location.hash;
    // check if token is already in local storage
    let token = window.localStorage.getItem("token");

    // if token is not in local storage, check if it is in the url hash
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    // update the token state using setToken from useState hook
    setToken(token);
  }, []);

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