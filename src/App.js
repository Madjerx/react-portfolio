import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Home from "./components/home/Home"
import Experiences from "./components/experiences/Experiences";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experiences />
      </main>
    </>
  );
}

export default App;
