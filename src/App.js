import React, { useState } from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    { name: "portfolio", description: "Portfolio of completed projects" },
    { name: "resume", description: "Most updated resume" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;