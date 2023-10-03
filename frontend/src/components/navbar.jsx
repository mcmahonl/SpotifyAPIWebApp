import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as styles from "./navbar.module.css";

const Navbar = () => {
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
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                {/* Sign in and profile are interchangeable right now, change later */}
                <Link href="/" className={styles.link}>Sign In</Link> 
                <Link href="/" className={styles.link}>Profile</Link>
                <Link href="/" className={styles.link}>Genres</Link>
                <Link href="/" className={styles.link}>Artists</Link>
                <Link href="/" className={styles.link}>Playlists</Link>
            </div>
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