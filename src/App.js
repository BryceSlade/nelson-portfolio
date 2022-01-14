import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import './app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;