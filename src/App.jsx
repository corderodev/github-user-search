import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { User } from "./components/User";

function App() {
  const [username, setUsername] = useState("corderodev");
  const [userData, setUserData] = useState(Object);

  useEffect(() => {
    fetchUser();
  }, [username]);

  var API = `https://api.github.com/users/${username}`;

  const fetchUser = async () => {
    const response = await fetch(API);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not found") {
      setUserData(jsonData);
      console.log(jsonData);
    } else if (username !== "") {
      console.log("Username does not exist");
    } else {
      setUserData({});
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gh-black px-2 pt-10 pb-10 font-roboto overflow-hidden">
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-gh-white text-center py-10">
            Github User Search
          </h1>
          <SearchBar username={username} setUsername={setUsername} />
          <User data={userData} />
        </section>
      </main>
    </>
  );
}

export default App;
