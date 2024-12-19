import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
