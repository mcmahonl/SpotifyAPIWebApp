import React from 'react';
import Image from 'next/image'


import * as styles from "./ProfileCard.module.css";

const ProfileCard = ({info}) => {
    const { display_name, external_urls, followers, href, id, images, type } = info;
    return (
        
        <div>
          <h2>{display_name}</h2>
          <p>ID: {id}</p>
          <p>Type: {type}</p>
          <p>Followers: {followers.total}</p>
          <p>Spotify URL: <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">Open Spotify</a></p>
          <p>Profile URL: <a href={href} target="_blank" rel="noopener noreferrer">Open Profile</a></p>
          
          {/* Display user images if available */}
          {images.length > 0 && (
            <div>
              <p>Images:</p>
              {images.map((image, index) => (
                <img key={index} src={image.url} alt={`User ${index + 1}`} />
              ))}
            </div>
          )}
        </div>
        
      );
    };

export default ProfileCard;