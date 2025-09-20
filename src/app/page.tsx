import Image from "next/image";
import SearchBar from "./(components)/SearchBar";

export default function Home() {
  return (
    <main
    className="flex flex-row justify-center h-screen items-end">
      <SearchBar/>
    </main>
  );
}
