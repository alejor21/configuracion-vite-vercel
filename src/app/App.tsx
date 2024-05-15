import About from './sections/About';
import Background from './sections/Background';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import NavbarMobile from './sections/NavbarMobile';
import Projects from './sections/Projects';

function App() {
  return (
    <div className='dark:text-gray-200 dark:bg-slate-900'>
      <Header />
      <Background />
      <NavbarMobile />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
