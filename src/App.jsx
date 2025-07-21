import { useState } from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
    </>
  );
}

export default App;
