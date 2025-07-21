import React from "react";
import { useState } from "react";
import "../styles/Presentation.css";
import photo from "../assets/fotopers.jpg";

const Presentation = () => {
  return (
    <div className="presentation">
      <p>
        Hola, soy David, estudiante de segundo año de la carrera de Sistemas
        Informáticos. Me apasiona la tecnología, el desarrollo de software y
        todo lo relacionado con la creación de soluciones digitales que mejoren
        la vida de las personas. Actualmente me encuentro formándome en áreas
        como desarrollo web, aplicaciones móviles y bases de datos, con
        conocimientos prácticos en tecnologías como HTML, CSS, JavaScript,
        React, Node.js y Python. Disfruto aprender de forma constante, trabajar
        en equipo y participar en proyectos donde pueda aplicar lo que estudio y
        seguir creciendo como profesional. Mi objetivo es seguir desarrollando
        mis habilidades como desarrollador junior, involucrándome en proyectos
        reales, desafiantes y con impacto positivo. Estoy abierto a nuevas
        oportunidades de aprendizaje, prácticas profesionales o colaboración en
        equipos de desarrollo.
      </p>
      <img src={photo} alt="" />
    </div>
  );
};
export default Presentation;
