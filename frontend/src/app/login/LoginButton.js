'use client'

import React from "react";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function LoginButton() {
    const [user, setUser ] = useState({});

    function handleCallbackResponse(response){
      console.log("Encoded JWT ID token" +  response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut(event){
      setUser({});
      document.getElementById("signInDiv").hidden = false;
    }
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "1001170561313-l67f6kpu4ur3d9lg6fv42tcq56nj9i2k.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
      
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
      )
      google.accounts.id.prompt();
    }, []);
    
    const handleLogin = () => {
        // Insert login logic here
        console.log('Login Button Clicked');
    };

    return (
        <>
        <div id="signInDiv"></div>
        { Object.keys(user).length != 0 &&
          <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
        }
        {user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
        }
   </> );
}

export default LoginButton;