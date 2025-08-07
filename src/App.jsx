import { useState } from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import SkillsList from "./components/Skills";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <h2>Habilidades y Tecnologías</h2>
      <SkillsList />
    </>
  );
}

export default App;
