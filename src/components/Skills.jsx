import React from "react";
import { useState } from "react";
import "../styles/Skills.css";
import logohtml from "../assets/html5.svg";
import logocss from "../assets/css.svg";
import logoreact from "../assets/react.svg";
import logojavascript from "../assets/js.svg";
import logonode from "../assets/node.svg";

const SkillsList = () => {
  const skills = {
    html: {
      name: "HTML5",
      image: logohtml, // Aquí usa la ruta real de las imágenes
      description: "Estructura semántica de páginas web usando HTML.",
    },
    css: {
      name: "CSS3",
      image: logocss,
      description: "Estilizado moderno con flexbox, grid y media queries.",
    },
    javascript: {
      name: "JavaScript",
      image: logojavascript,
      description: "Interactividad y lógica de comportamiento web.",
    },
    react: {
      name: "React",
      image: logoreact,
      description:
        "Interfaces modernas y dinámicas con componentes reutilizables.",
    },
    node: {
      name: "Node.js",
      image: logonode,
      description: "Back-end escalable con JavaScript del lado del servidor.",
    },
  };
  return (
    <section className="skills">
      <h2>Habilidades y Tecnologías</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([key, skill]) => (
          <div className="skill-card" key={key}>
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;
