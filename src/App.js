import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Intro className="offset" />
        <About className="offset" />
        <Skill className="offset" />
        <Project className="offset" />
        <Contact className="offset" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
