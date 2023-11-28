'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '../../hooks/useAuth';
import { fetchTopTracks } from '../../actions/spotifyAPI';
import TrackCard from '../../components/TrackCard';
import * as styles from './page.module.css';
 
const Tracks = () => {
  const token = useAuth();
  const router = useRouter();

  const [tracks, setTracks] = useState([]);

  // Fetch top tracks
  useEffect(() => {
    if (token) {
      fetchTopTracks({ token: token }).then((data) => {
        setTracks(data);
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

  const trackCards = tracks.map((track, index) => {
    return (
      <TrackCard track={track} index={index} />
    );
  });

  if (token && !tracks) {
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
          Your favorite <span className="text-green-500">tracks</span>.
        </h1>
        <p className="text-xl text-center text-gray-500">
          Based on what you listen to the most.
        </p>
      </div>

      {/* Track Cards */}
      <ul className="flex flex-wrap justify-center">
        {trackCards}
      </ul>
    </main>
  );
}

export default Tracks;
