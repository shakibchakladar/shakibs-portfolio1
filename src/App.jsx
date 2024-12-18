import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import About from "./constants/About";
import Hero from "./constants/Hero";

const App = () => {
  return (
    <div className="relative overflow-x-hidden antialiased text-gray-300">
      <div className="fixed inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <div>
        <Navbar />
        <Hero />
        <About />
        <Tecnologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
