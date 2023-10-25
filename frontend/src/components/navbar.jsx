"use client"; // enable the use of react hooks by marking this as a client-side component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from "./navbar.module.css";

const Navbar = () => {
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

    return (
        <nav className={styles.wrapper}>
            <Image
                src="/icons/spotify.png"
                alt="Spotify Icon"
                width={30}
                height={30}
                className={styles.logo}
                priority
            />
            <Link href="/" className={styles.title}>SpotifyAPIWebApp</Link>
            { token ?
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/genres" className={styles.link}>Genres</Link>
                    <Link href="/artists" className={styles.link}>Artists</Link>
                    <Link href="/playlists" className={styles.link}>Playlists</Link>
                    <Link href="/profile" className={styles.link}>Profile</Link>
                </div>
                :
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/auth" className={styles.link}>Sign In</Link>
                </div>
            }
            <Link href="/" className={styles.menuButton}>
                <Image
                    src="/icons/menu.png"
                    alt="Menu Icon"
                    width={27}
                    height={27}
                    className={styles.menuIcon}
                    priority
                />
            </Link>
        </nav>
    );
};

export default Navbar;