import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import work from "./work";
function App() {
  const [showWork, setShowWork] = useState([]);
  useEffect(() => {
    setShowWork(work);
  }, []);
  return (
    <div className="box-border">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work showWork={showWork} />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
