import React from "react";
import "../styles/Skills.css";
import logohtml from "../assets/html5.svg";
import logocss from "../assets/css.svg";
import logoreact from "../assets/react.svg";
import logojavascript from "../assets/js.svg";
import logonode from "../assets/node.svg";
import logoenglish from "../assets/english.svg";
import logoitalian from "../assets/italian.svg";
import logopython from "../assets/python.svg";

const SkillsList = () => {
  const skills = [
    { name: "HTML5", image: logohtml, level: "Intermedio" },
    { name: "CSS3", image: logocss, level: "Intermedio" },
    { name: "JavaScript", image: logojavascript, level: "Intermedio" },
    { name: "React", image: logoreact, level: "Intermedio" },
    { name: "Inglés", image: logoenglish, level: "Intermedio-Avanzado" },
    { name: "Italiano", image: logoitalian, level: "Avanzado" },
    { name: "python", image: logopython, level: "Básico" },
  ];

  return (
    <div className="skills">
      <div className="skills-inline">
        {skills.map((skill, index) => (
          <div key={index} className="skill-inline">
            <img src={skill.image} alt={skill.name} />
            <div className="skill-text">
              <strong>{skill.name}</strong>
              <span>{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
