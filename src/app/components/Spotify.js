'use client';
import { useState, useEffect } from 'react';

const userID = "144234873031229440";

const Spotify = () => {
  const [songName, setSongName] = useState("");
  const [songImage, setSongImage] = useState("");
  const [artistName, setArtistName] = useState("");

  const getCurrentlyPlayingSong = () => {
    fetch(`https://api.lanyard.rest/v1/users/${userID}`)
    .then(response => response.json())
    .then(data => {
      if (data.data.spotify) {
        setSongName(data.data.spotify.song);
        setSongImage(data.data.spotify.album_art_url);
        console.log(data.data.spotify.album_art_url);

        setArtistName(data.data.spotify.artist);
      }
      else {
        setSongName("Spotify is not currently playing");
        setSongImage("");
        setArtistName("");
    }
    });
  };
  getCurrentlyPlayingSong();
  const intervalId = setInterval(getCurrentlyPlayingSong, 5000); // Fetch data every 5 seconds










    return (
<div className = "flex items-center justify-center">
    <div className="flex w-fit items-center justify-center mt-2 p-4 bg-neutral-600 bg-opacity-25 rounded-md border-[0.1px] border-neutral-600 hover:bg-neutral-900 transition-colors duration-500">
    {songImage ? (
                <img className="size-32" src={songImage} alt="Currently playing song" />
            ) : (<div></div>)}
            <div className = "flex-col pl-5">
            <p className="text-lg  ">{songName}</p>
            <p className="text-lg ">{artistName}</p>
            </div>

    </div>
    </div>
    );
};

export default Spotify;
