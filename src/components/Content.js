import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = () => {
  return (
    <div class="flex-1 flex overflow-hidden bg-bg">
      <div class="flex-1 md:overflow-y-scroll">
        <div className="container max-w-2xl mx-auto">
          <About />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Content;
