import { useState } from "react";
import React from 'react';
import img1 from "../../assets/proyect 1.png"
import img2 from "../../assets/proyect2.png"
import img3 from "../../assets/proyect3.png"
import Carousel from 'react-material-ui-carousel'

export default function AboutMe(props) {

  var items = [
    {
        name: "Movie night planner",
        description: "Plan your nights in a fun way!",
        imageUrl: img1
    },
    {
        name: "Travelifico",
        description: "Traveling abroad? fancy a bite of something delicious? Travelifico is for you!",
        imageUrl: img2
    },
    {
        name: "Wheather dashboard",
        description: "Never get caught of guard by the weather again!",
        imageUrl: img3
    }
]
const [firstImgLoaded, setFirstImgLoaded] = useState(false);

    return (
      <>
       <div className="proyects">
        <h1 className="portfolioTitle">My Projects</h1>
       </div>
       <img
       src = {img1}
       alt="movi night"
       onLoad={() => setFirstImgLoaded(true)}
        style={{ display: "none" }}
        />
       {firstImgLoaded && (
       <Carousel autoPlay={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
       )}
      </>
    )
  }

  const Item = ({ item }) => (
    <div id ="proyectsConti">
      <img id ="proyect-Center"src={item.imageUrl} alt={item.name} className='myImage2' />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
    
  );