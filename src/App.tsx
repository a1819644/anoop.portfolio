import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./pages/Header";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Header />
      <div id="introduction">
        <Introduction />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="achievements">
        <Achievements />
      </div>

      <Footer />
    </div>
  );
}

export default App;
