import React from "react";
import { useState } from "react";
import "../styles/Presentation.css";
import photo from "../assets/fotopers.jpg";

const Presentation = () => {
  return (
    <div className="presentation">
      <p>
        Hola, soy David, estudiante de segundo año de la carrera de Sistemas
        Informáticos. Me apasiona la tecnología, el desarrollo de software.
        Actualmente me encuentro formándome en áreas como desarrollo web,
        aplicaciones móviles y bases de datos, con conocimientos prácticos en
        tecnologías como JavaScript, React y Python. Estoy abierto a nuevas
        oportunidades de aprendizaje, prácticas profesionales o colaboración en
        equipos de desarrollo.
      </p>
      <img src={photo} alt="" />
    </div>
  );
};
export default Presentation;
