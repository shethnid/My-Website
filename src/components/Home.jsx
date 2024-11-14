import React from 'react';
import '../css/home.css';
import image from '../assets/me.jpg';
import githubIcon from '../assets/GithubIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
//import DownloadResume from '../assets/downloadresume.png';//
//import resume from '../assets/NidhiSheth-Resume.pdf';//
export const Home = () => {
  return (
    
        <div id="home" className="home-container">
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <div  className="home-content">

            <div className="home-image">
              <img src={image} alt="Nidhi Sheth" />
            </div>
      
            <div className="home-description">
              <h1>Hi, I'm Nidhi Sheth, A senior at Kean University Union,NJ</h1>
              <div className="home-icons">
                <a href="https://github.com/shethnid" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/nidhi-sheth-3b454a210/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="GitHub" className="social-icon" />
                </a>
                
              </div>

             

            </div>
          </div>
        </div>
      );
};