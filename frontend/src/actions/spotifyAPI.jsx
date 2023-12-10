import axios from "axios";

const fetchTopArtists = async ({ token }) => {
  /* The user must be added to the spotify developer dashboard in order to use this API endpoint 
  because the project is limited to development mode on the spotify developer dashboard */
  const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists?limit=10&offset=0", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return data.items;
}

export { fetchTopArtists };

const fetchTopTracks = async ({ token }) => {
  const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks?limit=10&offset=0", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return data.items;
}

export { fetchTopTracks };

const fetchPlaylists = async ({ token }) => {
  const { data } = await axios.get("https://api.spotify.com/v1/me/playlists?limit=10&offset=0", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return data.items;
}

export { fetchPlaylists };

const fetchGenres = async ({ token }) => {
  /* The user must be added to the spotify developer dashboard in order to use this API endpoint 
  because the project is limited to development mode on the spotify developer dashboard */
  const { data } = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return data.genres;
}

export { fetchGenres };