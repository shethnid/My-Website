import React from 'react';
import '../css/projects.css';
import project1 from '../assets/NumberGuessing.jpeg';
import project2 from '../assets/RockPaperScissors.jpeg';
import project3 from '../assets/TicTacToe.jpeg';
import project4 from '../assets/MatchingPairs.jpeg';


export const Projects = () => {
    return (
        <div className="projects-container" id="projects">
          <h2>My Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <h3>TicTacToe</h3>
              <p>I created a Halloween Theme TicTacToe game.</p>
              <a href="https://obi2.kean.edu/~shethnid@kean.edu/TicTacToe.Html" alt="TicTacToe Game" >Live Demo</a>
              <img src={project3} alt="Portfolio image" className="projectimages" />

            </div>
            <div className="project-item">
              <h3>Guessing Number Game</h3>
              <p> This game you are guessing any number and it will tell you if you have guessed the number higher or lower or the exact number.</p>
              <a href="https://obi2.kean.edu/~shethnid@kean.edu/NumberGuessingGame.Html" alt="Guessing Number Game">Live Demo</a>
              <img src={project1} alt="Portfolio image" className="projectimages" />

              
            </div>
            <div className="project-item">
              <h3>Halloween Matching Pairs</h3>
              <p> For this game you are matching any matching pair of emojis with one another after its all done there is a horror picture in the background..</p>
              <a href="https://obi2.kean.edu/~shethnid@kean.edu/MatchingPairs.html" alt="Halloween Matching Pairs Game" >Live Demo </a>     
              <img src={project4} alt="Portfolio image" className="projectimages" />
            </div>

            <div className="project-item">
              <h3>RockPaperScissors</h3>
              <p> This game you are calling it either Rock, Paper, Scissors and the other player says either one of them and it displays who is the winner for the game.</p>
              <a href="https://obi2.kean.edu/~shethnid@kean.edu/Rock,Paper,Scissors.Html" alt="RockPaperScissor Game">Live Demo</a>
              <img src={project2} alt="Portfolio image" className="projectimages" /> 
              </div>

          </div>
        </div>

      );
};