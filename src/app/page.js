import Image from "next/image";
import Nav from "./components/Nav"
import HomeBody from "./components/HomeBody";

export default function Home() {
  return (
    <main className="grid justify-items-center py-28 w-full">
      <div className="mb-2 shadow">
        <Nav />
        <HomeBody />

      </div>

    </main>
  );
}

