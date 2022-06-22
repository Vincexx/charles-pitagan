import "./App.css";
import Content from "./components/Content";
import Showcase from "./components/Showcase";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <>
      <div class="h-screen md:flex">
        {loading ? (
          <div className="w-full h-full bg-bg flex justify-center items-center">
            <HashLoader color={"#62F7D6"} loading={loading} size={75} />
          </div>
        ) : (
          <>
            <Showcase />
            <Content />
          </>
        )}
      </div>
    </>
  );
}

export default App;
