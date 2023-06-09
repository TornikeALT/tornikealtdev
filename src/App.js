import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
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
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
