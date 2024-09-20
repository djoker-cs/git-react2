import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from "./components/Projects.js";
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </main>
      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
