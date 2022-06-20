import "./App.css";
import Content from "./components/Content";
import Showcase from "./components/Showcase";

function App() {
  const primary_color = "text-cyan-500";
  return (
    <>
      <div class="h-screen md:flex">
        <Showcase primary_color={primary_color} />
        <Content primary_color={primary_color} />
      </div>
    </>
  );
}

export default App;
