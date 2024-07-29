'use client';
import { useState, useEffect } from 'react';

const userID = "144234873031229440";

const Discord = () => {
  const [discordUser, setDiscordUserStatus] = useState(null);
  const [discordusername, setDiscordusernames] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [status, setStatus] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [songName, setSongName] = useState("");
  const [songImage, setSongImage] = useState("");
  const [artistName, setArtistName] = useState("");



  const getStatus = () => {
    fetch(`https://api.lanyard.rest/v1/users/${userID}`)
    .then (response => response.json())
    .then(data => {
      setStatus(data.data.activities[0].state);
    });
  };
  getStatus();

  const getCurrentlyPlayingSong = () => {
    fetch(`https://api.lanyard.rest/v1/users/${userID}`)
    .then(response => response.json())
    .then(data => {
      if (data.data.spotify) {
        setSongName(data.data.spotify.song);
        setSongImage(data.data.spotify.album_art_url);
        setArtistName(data.data.spotify.artist);
      }
    });
  };
  getCurrentlyPlayingSong();

  

  // const getEmoji = () => {
  //   fetch(`https://api.lanyard.rest/v1/users/${userID}`)
  //   .then (response => response.json())
  //   .then(data => {
  //     setEmoji(data.data.activities[0].emoji.name);
  //   });
  // };
  // getEmoji();

  useEffect(() => {
    const fetchDiscordStatus = () => {
      fetch(`https://api.lanyard.rest/v1/users/${userID}`)
        .then(response => response.json())
        .then(data => {
          setDiscordUserStatus(data.data.discord_status);
        });
    };
    fetchDiscordStatus();
    const intervalId = setInterval(fetchDiscordStatus, 5000); // Fetch data every 5 seconds


  //   const getDiscordMessage = () => {
  //     fetch(`https://api.lanyard.rest/v1/users/${userID}`)
  //     .then (response => response.json())
  //     .then(data => {
  //       setDiscordusernames(data.data.discord_user.username);
  //     });
  //   };
  //   getDiscordMessage();


  //   const getDisplayName = () => {
  //     fetch(`https://api.lanyard.rest/v1/users/${userID}`)
  //     .then (response => response.json())
  //     .then(data => {
  //       setDisplayName(data.data.discord_user.display_name);
  //     });
  //   };
  //   getDisplayName();


    // Clean up function
    return () => clearInterval(intervalId);
  }, []);

  let statusColor = "bg-red-500";
  if (discordUser === 'online') {
    statusColor = 'bg-green-500';
  } else if (discordUser === 'idle') {
    statusColor = 'bg-yellow-500';
  } else if (discordUser === 'dnd') {
    statusColor = 'bg-red-500';
  } else {
    statusColor = 'bg-gray-500';
  }




    return (
    <div>
        <img src="https://cdn.discordapp.com/avatars/144234873031229440/567600ee8a93a6b45b5a51f5082d3aba.png?size=4096" className="rounded-full size-24 z-1" alt="image" />

        <div className={`absolute bottom-1 left-16 w-7 h-7 rounded-full dark:border-neutral-900 border-4 ${statusColor}`}>
            <div className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusColor}`}></div>
        </div>
        </div>

);



  
};

export default Discord;
