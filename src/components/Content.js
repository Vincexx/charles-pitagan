import Education from "./Education";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

const Content = () => {
  return (
    <div className="flex-1 flex overflow-hidden bg-bg">
      <div className="flex-1 md:overflow-y-scroll">
        <div className="container md:px-3 mx-auto">
          <div className="text-title text-sm py-4">
            <p className="h-2.5 w-12 bg-primary"></p>
            <p className="h-2 w-8 bg-title"></p>
          </div>
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
