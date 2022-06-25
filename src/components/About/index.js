import React from 'react';
import coverImage from "../../assets/cover/fam.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me:</h1>
      <p>
        I am a SDET involved in the tech indrustry for the last 6 years. I am aspiring to transition completely
        into software development. I have a degree in Softgware Development along with a certificate in Node applications.
        Please see Resume section for more details. 
      </p>
      <p>
        In my Personal life. I enjoy gaming, sports, music, and general entertainment. I am a married
        with two children.
      </p>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
    </section>
  );
}

export default About;