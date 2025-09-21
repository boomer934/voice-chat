import Chat from "./(components)/Chat";
import SearchBar from "./(components)/SearchBar";

export default function Home() {
  return (
      <main
      className="flex flex-col items-center  h-screen sm:w-[90%] sm:text-[1.2rem] md:w-[80%]">
        <div className="flex-1 w-full">
          <Chat/>
        </div>
      </main>
  );
}
