'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '../../hooks/useAuth';
import { fetchTopArtists } from '../../actions/spotifyAPI';
import ArtistCard from '../../components/ArtistCard';
import * as styles from './page.module.css';
 
const Artists = () => {
  const token = useAuth();
  const router = useRouter();

  const [artists, setArtists] = useState([]);

  // Fetch top artists
  useEffect(() => {
    if (token) {
      fetchTopArtists({ token: token }).then((data) => {
        setArtists(data);
        console.log(data);
      }).catch((error) => {
        // if the token is invalid, redirect user to auth page
        if (error.status === 401) {
          // reset token
          window.localStorage.removeItem('token');
          window.location.hash = "";
          router.push('/auth');
        }
      });
    }
  }, [token]);

  const artistCards = artists.map((artist, index) => {
    return (
      <ArtistCard artist={artist} index={index} />
    );
  });

  if (token && !artists) {
    return (
      <main className={styles.wrapper}>
        <div className="flex flex-col items-center justify-center mt-32 mb-32">
          <h1 className="text-4xl font-bold text-center mb-2">
            Loading...
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      {/* Title */}
      <div className="flex flex-col items-center justify-center mt-16 mb-16">
        <h1 className="text-6xl font-bold text-center mb-2">
          <span className="text-green-500">Your favorite artists</span>.
        </h1>
        <p className="text-xl text-center text-gray-500">
          Based on who you listen to the most.
        </p>
      </div>

      {/* Artist Cards */}
      <ul className="flex flex-wrap justify-center">
        {artistCards}
      </ul>
    </main>
  );
}

export default Artists;
