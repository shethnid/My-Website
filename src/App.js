import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
