import Carousel from 'react-material-ui-carousel'
import React from 'react';
import img1 from "../../assets/Larios-2.jpg"
import img2 from "../../assets/Larios-21.jpg"
import img3 from "../../assets/Larios-4.jpg"

const Item = ({ item }) => (
  <div >
    <img id = "proyect-Center" className= "myImage" src = {item.imageUrl} alt={item.name}/>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
  </div>
);

export default function AboutMe(props) {

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        imageUrl: img1
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl: img2
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        imageUrl: img3
    }
]
    return (
      <>
       <div className="proyects">
        <h1 className="portfolioTitle">My Projects</h1>
       </div>
       <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </>
    )
  }