import React from 'react';
import Nav from '../components/Nav.js';

const Projects = () => {
  return (

    <main className="grid justify-items-center py-28 w-full dark:bg-neutral-900">
      <div className="mb-2 space-y-8">
        <Nav />
        <h1 className="text-4xl font-extrabold">
				Projects
        </h1>
        <div className="box-border rounded-3xl w-auto p-4 y-8 border-4 transform transition-all duration-500 hover:scale-110 hover:border-double"> 
          Ciphers: Made using C++, to help create a password system, and help encrypting messages as well as decrypting following an algorithm.
        </div>

        <div className= "y-6">

        </div>

        <div className="box-border rounded-3xl w-auto p-4 border-4 transform transition-all duration-500 hover:scale-110 hover:border-double"> 
          Great 13: Created using C++, fully functional game recreated from Cracker Barrel's peg game.
        </div>

        <div className = "y-6">
          </div>

        <div className="box-border rounded-3xl w-auto p-4 border-4 transform transition-all duration-500 hover:scale-110 hover:border-double"> 
          Digital Portfolio: Created using Javascript, tailwind css.
        </div>
      </div>

      
    </main>
  );
};

export default Projects;