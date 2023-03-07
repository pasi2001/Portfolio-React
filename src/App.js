import "./App.css";
import Navbar from "./navbar";
import Awards from "./pages/awards";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Awards />
      <Contact />
    </>
  );
}

export default App;
