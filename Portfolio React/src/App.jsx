import "./App.css"
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import alex from "./assets/Larios-2.jpg"
import Footer from "./Components/Footer";
import image2 from "./assets/linkedLogo.png"
import image3 from "./assets/githubLogo.png"

function App() {
  return (
    <>
      <div className="navbar">{Navbar()}</div>
      <div className="about-me">{AboutMe()}</div>
      <div className="main"></div>
      <div className="footer">{Footer("Alejandro Larios ©️ 2023", image2, image3)}</div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <Button className="nav-button">About Me</Button>
      <Button className="nav-button">Portfolio</Button>
      <Button className="nav-button">Contact</Button>
    </>
  );
}

function AboutMe() {
  return (
    <>
      <div className="text-about">
        <p>I'm a problem-solver who loves to think critically. I handle stress well and I enjoy meeting making new friends.</p>
        <p>
          Ever since I was a kid, I've been fascinated by new technologies, and how they shape the world we live in.
          I always try to keep up with the latest trends and innovations in web development.
        </p>
      </div>
      <img className="myImage" src={alex} alt="Mi imagen" />
    </>
  )
}

export default App