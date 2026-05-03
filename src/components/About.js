import React from 'react'
import './About.css';

const About = () => {
  const resumelink="https://drive.google.com/file/d/1c-8hP3V3etuuganMQrdW8928_Dm-_Tcp/view?usp=drive_link";
  
  return (
    <div class="container">
      <div className="firstcont">
        <h1>About Me</h1>
        <p>Hi, I'm <strong>Sai Charan Nancharla</strong>, a passionate and aspiring software developer with a strong interest in full-stack development. Recently, I completed my studies and am now eager to apply my knowledge to real-world projects. My primary areas of expertise include front-end development using <strong>ReactJS</strong>, as well as back-end development with <strong>Node.js</strong> and <strong>MongoDB</strong>.</p>
      </div>
      {/* <div className="secondcont">
        <h2>My Skills</h2>
        <ul>
          <li><strong>Front-End:</strong> HTML, CSS, JavaScript, ReactJS</li>
          <li><strong>Back-End:</strong> Node.js, Express.js, MongoDB, MySQL</li>
          <li><strong>Other Tools:</strong> Git, GitHub, Mongoose, MySQL</li>
        </ul>
      </div> */}
      <div className="thirdcont">
        <h2>Why Choose Me?</h2>
        <ul>
          <li><strong>Curiosity and Eagerness to Learn:</strong> I enjoy exploring new tech and staying up-to-date with the latest trends.</li>
          <li><strong>Attention to Detail:</strong> I believe that the smallest details often make the biggest difference in user experience.</li>
          <li><strong>Team Lead & Player:</strong> I value collaboration and communication in a team environment, had experienced leading a team and always willing to help and learn from others.</li>
        </ul>
      </div>
      <span className="lastcont">
        <p>&gt; I am currently looking for opportunities where I can contribute to meaningful projects and grow as a developer. </p>
        <p>&gt; <a href="/contact">get in touch</a> if you'd like my profile!

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={resumelink}>
            <button>View Resume</button>
          </a>
        
        </p>
        
      </span>
    </div>
  )
}

export default About