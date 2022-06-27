import React from "react";

function Resume() {
    const data = [
        'HTML', 
        'CSS', 
        'JavaScript', 
        'Node.js', 
        'React.js', 
        'Express.js', 
        'Handlebars', 
        'MVC framework', 
        'OPP', 
        'SQL', 
        'NoSQL', 
        'MongoDB', 
        'server-side development', 
        'Heroku', 
        'Github', 
        'UI/UX design', 
        'MERN', 
        'Test Driven Development'
    ]
    return (
        <div>
          <h1 id="resume">Resume:</h1>
            <div className="skillsList">
                <ul>
                    {data.map((fields, index) => {
                        return (
                            <li key={index}>{fields}</li>
                        )
                    })}
                </ul>
            </div>
            <h1><a href='https://docdro.id/1LMZlKE' target="_blank" rel="noreferrer" download>My Resume</a></h1>
        </div>
    );
}

export default Resume;