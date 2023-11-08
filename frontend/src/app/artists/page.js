'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'
import axios from 'axios'

import useAuth from '../../hooks/useAuth';
 
const Artists = () => {
  const token = useAuth();

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchTopArtists();
  }, []);

  const fetchTopArtists = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setArtists(data.artists.items);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mt-32 mb-32">
        <h1 className="text-6xl font-bold text-center mb-2">
          Explore Your <span className="text-green-500">Artists</span>.
        </h1>
        <p className="text-xl text-center text-gray-500">
          Hello world
        </p>
      </div>
    </main>
  );
}

export default Artists;
