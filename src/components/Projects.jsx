import React from "react";
import { useState } from "react";
import "../styles/Projects.css";
import logohtml from "../assets/html5.svg";
import logocss from "../assets/css.svg";
import logoreact from "../assets/react.svg";
import logopython from "../assets/python.svg";

const projects = {
  html: {
    name: "HTML5",
    image: logohtml,
    description: "Rediseño de pagina de municipio de arbieto.",
    link: "https://eddyntr.github.io/Pagina-municipio/index.html",
  },
  javascript: {
    name: "Python",
    image: logopython,
    description: "Estrunctura de base de datos para gestion de cine-teatro.",
    link: "https://github.com/adrixVic/Dessingg_teatro",
  },
  react: {
    name: "React",
    image: logoreact,
    description:
      "Interfaces modernas y dinámicas con componentes reutilizables.",
    link: "https://github.com/DavidMIta/My_portfolio",
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
            <button
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }
              }}
              disabled={!project.link}
              className="project-link"
            >
              link proyecto
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
