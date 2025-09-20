import Chat from "./(components)/Chat";
import SearchBar from "./(components)/SearchBar";

export default function Home() {
  return (
    <main
    className="flex flex-col items-center h-screen">
      <div className="flex-1 w-full">
        <Chat/>
      </div>
      <SearchBar/>
    </main>
  );
}
