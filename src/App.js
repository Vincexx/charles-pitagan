import "./App.css";
import Content from "./components/Content";
import Showcase from "./components/Showcase";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence>
        <div className="h-screen md:flex">
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
      </AnimatePresence>
      <MessengerChat
        pageId="100105645559377"
        language="en_US"
        themeColor={"#3b5998"}
        bottomSpacing={20}
        loggedInGreeting="Hi, thank you for reaching out. How can I help you?"
        loggedOutGreeting="Thank you so much!"
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide");
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted");
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad");
        }}
      />
      
    </>
  );
}

export default App;
