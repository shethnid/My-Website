import React from 'react';
import '../css/about.css';
import hikingimage from '../assets/mehiking.JPG';

export const About = () => {
    return (
        <div className="about-container" id="about">
          <h2>About Me</h2>
          <p>
            I'm Nidhi Sheth, a senior at Kean University majoring in Information Technology and Cybersecurity.
            I'm passionate about technology, I am excited to pursue a career in IT and cybersecurity, where I can contribute to innovative solutions and make a difference.
          </p>
          <h3>Programming Skills</h3>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
          <h3 className="headerhobbies">Hobbies</h3>
          <p>My Hobbies are reading books, hiking, watching movies, traveling. </p>
          <div className="hiking-image">
          <img src={hikingimage} alt="image" className="hiking picture" />
          </div>
        </div>
      );
};