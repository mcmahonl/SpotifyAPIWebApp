import React from 'react';

import * as styles from "./page.module.css";

import AuthButton from '../../components/authButton';

const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <AuthButton />
    </div>
  );
};

export default AuthPage;