import React from "react";
import { useState } from "react";
import "../styles/Projects.css";
import logohtml from "../assets/html5.svg";
import logocss from "../assets/css.svg";
import logoreact from "../assets/react.svg";
import logojavascript from "../assets/js.svg";
import logonode from "../assets/node.svg";

const projects = {
  html: {
    name: "HTML5",
    image: logohtml,
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

const Projects = () => {
  return (
    <section className="projects">
      <h2>Proyectos y Tecnologías</h2>
      <div className="projects-container">
        {Object.entries(projects).map(([key, project]) => (
          <div className="project-card" key={key}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>link proyecto</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
