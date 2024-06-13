import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
