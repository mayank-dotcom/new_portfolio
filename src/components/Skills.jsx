

// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// function Skills() {
//   const skills = [
//     { name: "React", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "HTML/CSS", level: 95 },
//     { name: "Node.js", level: 80 },
//     { name: "Three.js", level: 75 },
//     { name: "Bootstrap", level: 85 },
//   ];

//   return (
//     <section id="skills" className="skills-section">
//       <div className="container">
//         <h2 className="section-title text-center">Technical Skills</h2>
//         <div className="row justify-content-center">
//           {skills.map((skill, index) => (
//             <div key={index} className="col-md-4 col-sm-6 text-center mb-4">
//               <div className="skill-circle">
//                 <CircularProgressbar
//                   value={skill.level}
//                   text={`${skill.level}%`}
//                   styles={buildStyles({
//                     textColor: "#fff",
//                     pathColor: "#4caf50",
//                     trailColor: "#ddd",
//                     textSize: "16px",
//                     strokeLinecap: "round",
//                   })}
//                 />
//               </div>
//               <p className="skill-name mt-2">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css"; // Custom futuristic styles

function Skills() {
  const skills = [
    { name: <i class="fa-brands fa-react" id="ic"></i>, level: 90, color: "white" }, // Neon Cyan
    { name: <i class="fa-brands fa-js"id="ic"></i>, level: 85, color: "white" }, // Bright Yellow
    { name: <i class="fa-brands fa-html5"id="ic"> / <i class="fa-brands fa-css3-alt"></i></i>, level: 95, color: "white" }, // Neon Pink
    { name: <i class="fa-brands fa-node"id="ic"></i>, level: 80, color: "white" }, // Green
    { name: <i>Ex - <i class="fa-brands fa-node-js"id="ic"></i></i>, level: 75, color: "white" }, // Purple
    { name: <i class="fa-brands fa-bootstrap"id="ic"></i>, level: 85, color: "white" }, // Orange
    { name: <i class="fa-brands fa-square-js"id="ic"></i>, level: 85, color: "white" }, 
    { name: <i class="fa-brands fa-github"id="ic"></i>, level: 85, color: "white" }, 
    { name: <i class="fa-solid fa-robot"id="ic"></i>, level: 85, color: "white" }, 
    { name: <i class="fa-solid fa-database"id="ic"></i>, level: 85, color: "white" }, 
    { name: <i class="fa-solid fa-server"id="ic"></i>, level: 85, color: "white" }, 

  ];

  return (
    <section id="skills" className="skills-section" style={{left:"4rem",width:"70rem",top:"2rem"}}>
      <div className="container">
        <h2 className="section-title"id="sect"style={{color:"white"}}>Tech Stack</h2>
        <hr />
        <div className="skills-grid" >
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="glow-wrap">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: skill.color,
                    trailColor: "rgba(255, 255, 255, 0.1)",
                    textSize: "18px",
                    strokeLinecap: "round",
                  })}
                />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
