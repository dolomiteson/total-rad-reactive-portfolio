import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/page-pics/portfolio/nte_home.jpg';

function Portfolio(props) {
  const currentProject = {
    name: "note-taker-express",
    description: "An application using express js to manage notes through api calls"
  }

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{capitalizeFirstLetter(currentProject.description)}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Project Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}

export default Portfolio;