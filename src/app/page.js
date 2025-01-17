

import Nav from "./components/Nav"
import HomeBody from "./components/HomeBody";
import Projects from "./projects/page";






export default function Home() {
  return (


    <main className="grid justify-items-center w-full text-white bg-neutral-900">
      
      <div className="mb-2 ">
        <Nav />
        <HomeBody />


      </div>
      </main>
  );
}




