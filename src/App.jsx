import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Role from "./components/Role";

// Initialize the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <div className="bg-secondary-100">
      <NavBar />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="nav-change">
          <Role />
        </section>
      </main>
    </div>
  );
};

export default App;
