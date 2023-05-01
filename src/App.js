import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Home from "./components/home/Home";
import Experiences from "./components/experiences/Experiences";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Work />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
