import AboutComponent from "./components/About";
import Contact from "./components/Contact";
import Guidlines from "./components/Guidlines";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Rounds from "./components/Rounds";

function App() {
  return (
    <>
      <Hero />
      <AboutComponent />
      <Rounds />
      <Guidlines />
      <Contact />
      <Map />
    </>
  );
}

export default App;
