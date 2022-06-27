import React, { useState } from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    { id: "0", name: "about", description: "About me page" },
    { id: "1", name: "portfolio", description: "Portfolio page" },
    { id: "2", name: "resume", description: "Resume page" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      </div>
      <div className='row'>
        <main>
          {!contactSelected ? (
            <>
              <About currentCategory={currentCategory}></About>
              <Portfolio></Portfolio>
              <Resume></Resume>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </main>
      </div>
      <div className='row'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;