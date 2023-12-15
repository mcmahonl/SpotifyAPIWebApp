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
      
      <div class="flex items-center h-screen w-full justify-center">

      <div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/seed/picsum/200/300" alt="John Doe"></img>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{profile?.display_name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{profile?.followers.total}</p>
            </div>
            <table className="text-lg my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500">{profile?.id}</td>
                </tr>
              
            </tbody></table>

            <div className="text-center mb-3">
            <p className="text-gray-900 pb-2 mb-2">
            <a href={profile?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              Open Spotify
            </a>
      </p>
      <p className=""><button className={styles.logoutButton} onClick={() => { logout(); window.location.href = "/"; }}>Logout</button></p>
            </div>
            

        </div>
    </div>
</div>
</div>
    
     </div>
    </main>
  );
}

export default ProfilePage;