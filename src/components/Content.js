import About from "./About";
import Education from "./Education";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = () => {
  return (
    <div className="flex-1 flex overflow-hidden bg-bg">
      <div className="flex-1 md:overflow-y-scroll">
        <div className="container max-w-2xl mx-auto">
          <About />
          <Education />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Content;
