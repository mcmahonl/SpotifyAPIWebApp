"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

/* link is needed to get a list of 10 top artists */
const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?limit=10&offset=0";

const TopArtists = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    /* axios used to fetch data from spotify */
    const topArtists = () => {
        axios
            .get(ARTISTS_ENDPOINT, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <button onClick={topArtists}>Get Top Artists</button>
            {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        </>
    );
};

export default TopArtists;