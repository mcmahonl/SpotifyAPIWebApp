"use client"; // enable the use of react hooks by marking this as a client-side component

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as styles from './page.module.css';
 
const ProfilePage = () => {
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.logoutButton} onClick={() => {logout(); window.location.href = "/";}}>Logout</button>
    </div>
  );
}

export default ProfilePage;