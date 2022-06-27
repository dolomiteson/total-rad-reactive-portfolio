import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">Lucas Zimmerman</a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li>
              <a key={category.id} className={`mx-2 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} href={'#' + category.name}
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </a>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;