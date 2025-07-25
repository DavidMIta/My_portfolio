import { useState } from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import SkillsList from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <SkillsList />
      <Footer />
    </>
  );
}

export default App;
