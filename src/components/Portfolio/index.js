import React, { useState } from 'react';

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Note Taker Express',
      link: 'https://github.com/dolomiteson/note-taker-express',
      description: 'An application using express js to manage notes through api calls'
    },
    {
      name: 'Sleepily',
      link: 'https://github.com/dolomiteson/active-slumber',
      description: 'A social media platform to keep track of sleep schedule and dreams.'
    },
    {
      name: 'Literate Fiesta',
      link: 'https://github.com/dolomiteson/literate-fiesta',
      description: 'This is an ORM based application designed to allow a user to manipulate table data using expressJs with sequalize through the Insomnia App. User is able to conduct CRUD actions on Categories, Products and Tags'
    },
    {
      name: 'Where You At',
      link: 'https://github.com/dolomiteson/no-seeql-all-api',
      description: 'This application uses MongoDB along with Mongoose to allow users to make API calls. Following the MVC framework to keep the project organized; Using CRUD actions'
    },
    {
      name: 'Weather Dashboard',
      link: 'https://github.com/dolomiteson/git-init-mod6-city-weather-app',
      description: 'An application that uses open weather API call to give the user the ability to view current and 5-day weather in city of their choosing(US ONLY)'
    },
    {
      name: 'Password Generator',
      link: 'https://github.com/dolomiteson/git-init-mod3-challenge',
      description: 'Allows user to create a unique password based on Length, Alpha, Numeric, and Special Characters.'
    },
  ]);


  return (
    <section>
      <h1 id="portfolio">Projects:</h1>
      <div>
        <div className="flex-row">
          {projects.map((project, i) => (
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/page-pics/${i}.jpg`)}
                alt={project.name}
                className="img-thumbnail mx-1"
                key={project.name}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;