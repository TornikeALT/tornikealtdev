import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import MyContact from './components/MyContact';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="background_gradient">
          <Home />
        </section>
        <section id="about" style={{ backgroundColor: ' #fafafa' }}>
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <MyContact />
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
