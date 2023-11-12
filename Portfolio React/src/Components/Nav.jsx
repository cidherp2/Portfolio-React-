import Button from "@mui/material/Button";

export default function Navbar({handleChange}) {
    return (
      <>
       <a href="#home">
       <Button className="nav-button" onClick={()=> handleChange('home')}>About Me</Button>
       </a>
       <a href = "#portfolio">
        <Button className="nav-button" onClick={()=> handleChange('portfolio')} >Portfolio</Button>
        </a>
        <Button className="nav-button">Contact</Button>
     
      </>
    );
  }

//   onClick={()=> handleChange('home')}
// {handleChange, currentPage}