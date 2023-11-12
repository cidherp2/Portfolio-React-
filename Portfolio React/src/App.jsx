import "./App.css"
import { useState } from 'react';
import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Footer from "./Components/Footer";
import Navbar from "../src/Components/Nav";

import image2 from "./assets/linkedLogo2.png";
import image3 from "./assets/githubLogo.png";
import AboutMe from "./Components/pages/Abou-Me"
import AboutMe2 from "./Components/pages/Abou-Me2"
//import AboutMe from "./Components/pages/Abou-Me";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const renderPage = () => {
    if (currentPage === 'home'){
      return <AboutMe/>
    }
    else if (currentPage === 'portfolio'){
      return <AboutMe2/>
    }
  };

  let handleChange = (page) => setCurrentPage(page);
  console.log("holaaa" + useState)
  
  return (
    <>
    <div className="navbar"> {Navbar(handleChange={handleChange})}</div>
      {/* <Navbar handleChange = {handleChange}/> */}
      <div>{renderPage()}</div>
      {/* <div >{AboutMe()}</div> */}
      {/* <div className="navbar"> {Navbar()}</div>
      <div className="main"></div>
      <div className="about-me"> {AboutMe(alex)}</div> */}
      <div className="footer">{Footer("Alejandro Larios ©️ 2023", image2, image3)}</div>
    </>
  );
}





export default App