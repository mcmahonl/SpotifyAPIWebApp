"use client"; // enable the use of react hooks by marking this as a client-side component
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as styles from './page.module.css';
 
const ProfilePage = () => {
  const router = useRouter();
  
  const [token, setToken] = useState("");

  // get the authentication status of the user
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    router.push("/");
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.logoutButton} onClick={logout}>Logout</button>
    </div>
  );
}

export default ProfilePage;