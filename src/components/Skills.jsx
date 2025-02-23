
// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import "./Skills.css"; // Custom futuristic styles

// function Skills() {
//   const skills = [
//     { name: <i class="fa-brands fa-react" id="ic"></i>, level: 90, color: "white" }, // Neon Cyan
//     { name: <i class="fa-brands fa-js"id="ic"></i>, level: 85, color: "white" }, // Bright Yellow
//     { name: <i class="fa-brands fa-html5"id="ic"> / <i class="fa-brands fa-css3-alt"></i></i>, level: 95, color: "white" }, // Neon Pink
//     { name: <i class="fa-brands fa-node"id="ic"></i>, level: 80, color: "white" }, // Green
//     { name: <i>Ex - <i class="fa-brands fa-node-js"id="ic"></i></i>, level: 75, color: "white" }, // Purple
//     { name: <i class="fa-brands fa-bootstrap"id="ic"></i>, level: 85, color: "white" }, // Orange
//     { name: <i class="fa-brands fa-square-js"id="ic"></i>, level: 85, color: "white" }, 
//     { name: <i class="fa-brands fa-github"id="ic"></i>, level: 85, color: "white" }, 
//     { name: <i class="fa-solid fa-robot"id="ic"></i>, level: 85, color: "white" }, 
//     { name: <i class="fa-solid fa-database"id="ic"></i>, level: 85, color: "white" }, 
//     { name: <i class="fa-solid fa-server"id="ic"></i>, level: 85, color: "white" }, 

//   ];

//   return (
//     <section id="skills" className="skills-section" style={{left:"4rem",width:"70rem",top:"2rem"}}>
//       <div className="container">
//         <h2 className="section-title"id="sect"style={{color:"white"}}>Tech Stack</h2>
//         <hr />
//         <div className="skills-grid" >
//           {skills.map((skill, index) => (
//             <div key={index} className="skill-item">
//               <div className="glow-wrap">
//                 <CircularProgressbar
//                   value={skill.level}
//                   text={`${skill.level}%`}
//                   styles={buildStyles({
//                     textColor: "#fff",
//                     pathColor: skill.color,
//                     trailColor: "rgba(255, 255, 255, 0.1)",
//                     textSize: "18px",
//                     strokeLinecap: "round",
//                   })}
//                 />
//               </div>
//               <p className="skill-name">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
import React from 'react';
import './Skills.css';

const CircularProgress = ({ value, color = 'white' }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className="progress-container">
      <svg className="progress-svg" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          transform="rotate(-90 50 50)"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: 'stroke-dashoffset 0.5s ease-in-out'
          }}
        />
        <text
          x="50"
          y="50"
          fill="#fff"
          fontSize="18"
          fontFamily="Arial"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${value}%`}
        </text>
      </svg>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: <i className="fa-brands fa-react" id="ic"></i>, level: 90, color: "white" },
    { name: <i className="fa-brands fa-js" id="ic"></i>, level: 85, color: "white" },
    { name: <i className="fa-brands fa-html5" id="ic"> / <i className="fa-brands fa-css3-alt"></i></i>, level: 95, color: "white" },
    { name: <i className="fa-brands fa-node" id="ic"></i>, level: 80, color: "white" },
    { name: <i>Ex - <i className="fa-brands fa-node-js" id="ic"></i></i>, level: 75, color: "white" },
    { name: <i className="fa-brands fa-bootstrap" id="ic"></i>, level: 85, color: "white" },
    { name: <i className="fa-brands fa-square-js" id="ic"></i>, level: 85, color: "white" },
    { name: <i className="fa-brands fa-github" id="ic"></i>, level: 85, color: "white" },
    { name: <i className="fa-solid fa-robot" id="ic"></i>, level: 85, color: "white" },
    { name: <i className="fa-solid fa-database" id="ic"></i>, level: 85, color: "white" },
    { name: <i className="fa-solid fa-server" id="ic"></i>, level: 85, color: "white" }
  ];

  return (
    <section id="skills" className="skills-section" style={{left: "4rem", width: "70rem", top: "2rem"}}>
      <div className="container">
        <h2 className="section-title" id="sect" style={{color: "white"}}>Tech Stack</h2>
        <hr />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="glow-wrap">
                <CircularProgress value={skill.level} color={skill.color} />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;