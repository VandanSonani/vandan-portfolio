

import Nav from "./components/Nav"
import HomeBody from "./components/HomeBody";
import Projects from "./projects/page";






export default function Home() {
  return (


    <main className="grid justify-items-center w-full dark:bg-neutral-900">
      <head>
        <title>Vandan's Website
          
        </title>
        
        </head>
      <div className="mb-2 ">
        <Nav />
        <HomeBody />


      </div>
      </main>
  );
}




