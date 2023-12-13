'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '../../hooks/useAuth';
import { fetchGenres } from '../../actions/spotifyAPI';
import GenreCard from '../../components/GenreCard';
import * as styles from './page.module.css';
 
const Genres = () => {
  const token = useAuth();
  const router = useRouter();

  const [genres, setGenres] = useState([]);

  // Fetch top artists
  useEffect(() => {
    if (token) {
      fetchGenres({ token: token }).then((data) => {
        setGenres(data);
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

  const GenreCards = genres.map((genres, index) => {
    return (
      <GenreCard genres={genres} index={index} />
    );
  });

  if (token && !genres) {
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
          <span className="text-green-500">Your favorite Genres</span>.
        </h1>
        <p className="text-xl text-center text-gray-500">
          Based on what you listen to the most.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center">
        {GenreCards}
      </ul>
    </main>
  );
}

export default Genres;