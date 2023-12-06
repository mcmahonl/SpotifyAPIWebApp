'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '../../hooks/useAuth';
import { fetchPlaylists } from '../../actions/spotifyAPI';
import PlaylistCard from '../../components/PlaylistCard';
import * as styles from './page.module.css';

const Playlists = () => {
    const token = useAuth();
    const router = useRouter();
  
    const [playlists, setPlaylists] = useState([]);
  
    // Fetch playlists
    useEffect(() => {
      if (token) {
        fetchPlaylists({ token: token }).then((data) => {
          setPlaylists(data);
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

    const playlistCards = playlists.map((playlist, index) => {
        return (
          <PlaylistCard playlist={playlist} index={index} />
        );
      });
    
      if (token && !playlists) {
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
          <span className="text-green-500">Your playlists</span>.
        </h1>
        <p className="text-xl text-center text-gray-500">
          Based on what you listen to the most.
        </p>
      </div>

      {/* Playlist Cards */}
      <ul className="flex flex-wrap justify-center">
        {playlistCards}
      </ul>
    </main>
  );
}

export default Playlists;