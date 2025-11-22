import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
