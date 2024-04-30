'use client';
import { useState, useEffect } from 'react';

const userID = "144234873031229440";

const Discord = () => {
  const [discordUser, setDiscordUser] = useState(null);

  useEffect(() => {
    const fetchDiscordStatus = () => {
      fetch(`https://api.lanyard.rest/v1/users/${userID}`)
        .then(response => response.json())
        .then(data => {
          setDiscordUser(data.data.discord_status);
        });
    };

    fetchDiscordStatus();
    const intervalId = setInterval(fetchDiscordStatus, 5000); // Fetch data every 5 seconds

    // Clean up function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
     <img src="https://cdn.discordapp.com/avatars/144234873031229440/6ee3fb58d93653edc1d91bf97022ca08.png?size=4096" className=" rounded-full size-24 z-1" alt="image" />
                <div className="absolute bottom-1 right-1 w-7 h-7 bg-yellow-600 rounded-full border-black border-4  z-2">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></div>
                    <p>
                    {discordUser ? `User status: ${discordUser}` : 'Loading...'}

                    </p>
                </div>
                    </div>
  );
};

export default Discord;