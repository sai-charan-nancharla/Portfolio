import React, { useEffect, useState } from "react";
import "./Skills.css"; // Importing the CSS for animation

import express from "../assets/express.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sql from "../assets/sql.png";
import python from "../assets/python.png";


const skills = [
  { name: "Java", image:java  },
  { name: "Python", image:python},
  { name: "SQL", image: sql},
  { name: "React", image: react},
  { name: "Node", image: node},
  { name: "ExpressJs", image: express},
  { name: "MongoDB", image: mongo },
  { name: "Redux", image: redux },
  { name: "Git&Github", image: git },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Delay before animation starts
  }, []);

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-box ${loaded ? "fall" : ""}`}
          style={{ animationDelay: `${index * 0.2}s` }} // Stagger the falling animation
        >
          <img src={skill.image} alt={`${skill.name} logo`} />
          <h3>{skill.name}</h3>
        </div> 
      ))}
    </div>
  );
};

export default Skills;
