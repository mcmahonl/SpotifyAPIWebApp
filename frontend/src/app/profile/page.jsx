"use client"; // enable the use of react hooks by marking this as a client-side component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fetchProfile } from '../../actions/spotifyAPI';
import useAuth from '../../hooks/useAuth';
import ProfileCard from '../../components/ProfileCard';
import * as styles from './page.module.css';
 
const ProfilePage = () => {
  const token = useAuth();
  const router = useRouter();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (token) {
      fetchProfile({ token: token }).then((data) => {
        setProfile(data);
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


  if (token && !profile) {
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

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.wrapper}>
        <button className={styles.logoutButton} onClick={() => { logout(); window.location.href = "/"; }}>Logout</button>
      </div>
      <div>
      <h2>{profile?.display_name}</h2>
      <p>ID: {profile?.id}</p>
      <p>Type: {profile?.type}</p>
      <p>Followers: {profile?.followers.total}</p>
      <p>
        Spotify URL: <a href={profile?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          Open Spotify
        </a>
      </p>
      <p>
        Profile URL: <a href={profile?.href} target="_blank" rel="noopener noreferrer">Open Profile</a>
      </p>
      
        
      </div>
    </main>
  );
}

export default ProfilePage;