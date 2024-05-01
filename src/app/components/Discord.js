'use client';
import { useState, useEffect } from 'react';

const userID = "144234873031229440";

const Discord = () => {
  const [discordUser, setDiscordUserStatus] = useState(null);
  const [discordusername, setDiscordusernames] = useState(null);
  const [displayName, setDisplayName] = useState(null);




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


    const getDiscordMessage = () => {
      fetch(`https://api.lanyard.rest/v1/users/${userID}`)
      .then (response => response.json())
      .then(data => {
        setDiscordusernames(data.data.discord_user.username);
      });
    };
    getDiscordMessage();


    const getDisplayName = () => {
      fetch(`https://api.lanyard.rest/v1/users/${userID}`)
      .then (response => response.json())
      .then(data => {
        setDisplayName(data.data.display_name);
      });
    };
    getDisplayName();


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
      <img src="https://cdn.discordapp.com/avatars/144234873031229440/6ee3fb58d93653edc1d91bf97022ca08.png?size=4096" className="rounded-full size-24 z-1" alt="image" />
      <div className={`absolute bottom-1 right-1 w-7 h-7 rounded-full border-black border-4 z-2 ${statusColor}`}>
        <div className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusColor}`}></div>
        <p className="w-32 ml-10 text-xs text-gray-300 first-letter">{discordusername ? `${discordusername}` : 'Loading...'}</p>
        <p className="w-32 ml-10 text-xs text-gray-300 ">{displayName ? `${displayName}` : 'Loading...'}</p>

      </div>
    </div>

  );
};

export default Discord;
