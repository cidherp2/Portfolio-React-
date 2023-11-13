import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

export default function AboutMe(props) {
  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }} id= "icons-box">
      <div id ="iconsContainer">
      <a href="http://wa.me/+524771373134">
      <Fab color="primary" aria-label="add" variant="extended" id ="waButton" className="iconSizer">
        <WhatsAppIcon sx={{ mr: 1 }} />
        Whatsapp
      </Fab>
      </a>
      <a href="mailto:email@example.com"
              >
      <Fab color="secondary" aria-label="edit" variant="extended" className="iconSizer">
        
        <MailIcon sx={{ mr: 1 }} />
        
        Email
       
      </Fab>
      </a>
      <a href = "https://github.com/cidherp2" >
      <Fab variant="extended" id ="gitButton" className="iconSizer">
        <GitHubIcon sx={{ mr: 1 }} color="white" />
        GitHub
      </Fab>
      </a>
      </div>
    </Box>
    <div id = "connectText">
      <h1>Lets connect!</h1>
      </div>
    </>
  );
 
  }

  
  