import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import Particles from "./components/Particles"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';
import { PiArticle } from "react-icons/pi";

function App() {
  return (
    <>
      <Particles />
      <Loader />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>


  )
}

export default App;