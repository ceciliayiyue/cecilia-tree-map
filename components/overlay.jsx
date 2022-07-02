import Image from "next/image";
import React from "react";
import { Col,Button} from "react-bootstrap";
import styled from "styled-components";

const Button1 = styled.button`
//   background-color: black;
  color: black;
  font-size: 13px;
  padding: 3px 4px;
  border-radius: 5px;
  margin: 20px 250px;
//   cursor: pointer;
`;

const Overlay = ({
    name,
    icon,
    image,
    location,
    emotionalConnection,
    handler
}) =>{

    return (
        <Col style={{
            textAlign:"center",
            height:"auto",
            width:"300px",
            padding: "10px",
            backgroundColor:"teal",
             position: "fixed",
   marginTop: "20px",
   marginLeft: "50px",
    zIndex: "5"

            }}
            onClick={()=>{
                handler("default");
            }}
            
            
            >
                {/* <Button1 
                onClick={()=>{
                    handler("default");
                }}>
                    X
                </Button1> */}

        <Image
    
            width= '200vw' 
            height='200vw'
            src={icon}
            style={{
                marginTop:"20px",
                maxWidth:"165px"
            }}
            alt="Tree drawing"
        />

<Image 
            width= '200vw' 
            height='200vw'
            src={image}
            style={{
                marginTop:"20px",
                maxWidth:"165px"
                
            }}
            alt="Tree drawing"
        />

        <div
            style={{
                marginTop:"10px",
                fontSize:"17px",
                fontWeight:"bold"
            }}
        
        >
            {name}
        </div>

        <div
            style={{
              
                width:"150",
                marginTop:"5px",
                fontSize:"14px",
                fontWeight:"bold",
                textAlign: "left",
                marginLeft:"20px"
                
            }}
        >
        Location:
     <div   
        style={{     
            fontWeight:"normal",
            marginTop:"5px",
            marginBottom:"5px",
          }}>
     {location}
     </div>
     {/* <div style={{     
            marginBottom:"5px",
          }}  >
          Emotional Connection
     </div>
     <div   
        style={{     
            fontWeight:"normal",
            marginTop:"5px",
            marginBottom:"5px",
          }}>
     {emotionalConnection}
     </div> */}
    
    </div>    
    </Col>)
}


const allTrees = {
    
    "Puerto Rico Palm":  { 
    treeName:"Palm Tree Beside the street, I thought I would meet you on the beach",
    icon:"/assets/PRpalmIcon.png",
    image:"/assets/PRpalm.jpg",
    location: "San Juan, Puerto Rico",
    emo:"xxx" }, 

    "palette":  { 
        treeName:"I bumped into a color palette",
        icon:"/assets/PaletteIcon.png",
        image:"/assets/Palette.jpg",
        location: "Storm King Art Center, New Windsor, New York",
        emo:"xxx" }, 
    
    "fall":  { 
        treeName:"fall",
        icon:"/assets/stormkingIcon.png",
        image:"/assets/stormking.jpg",
        location: "Storm King Art Center",
        emo:"xxx" }, 
    
    "guanajuato":  { 
        treeName:"well trimmed",
        icon:"/assets/guanajuatoIcon.png",
        image:"/assets/guanajuato.jpg",
        location: "Jardín de la Unión, Guanajuato City, Mexico",
        emo:"xxx" }, 
    "SH":  { 
        treeName:"tangled, geometry",
        icon:"/assets/SHIcon.png",
        image:"/assets/SH.jpg",
        location: "French Concession, Shanghai",
        emo:"xxx" }, 

    "teotihuacan":  { 
        treeName:"a cactus next to the sun of the pyramid",
        icon:"/assets/teotihuacanIcon.png",
        image:"/assets/teotihuacan.jpg",
        location: "Jardín botánico Pirámides de Teotihuacán, Teotihuacán, Mexico",
        emo:"xxx" }, 
     
     "prospect":  { 
        treeName:"looking up, thought this was a black and white photography",
        icon:"/assets/prospectIcon.png",
        image:"/assets/prospect.jpg",
        location: "Brooklyn Prospect Park, New York City",
        emo:"xxx" }, 

    "florence":  { 
        treeName:"I used to see them every day on campus, still I stopped by their beauties every day",
        icon:"/assets/FlorenceIcon.png",
        image:"/assets/Florence.jpg",
        location: "Villa La Pietra, Florence",
        emo:"xxx" }, 

    "rockfeller":  { 
        treeName:"Christmas in the city",
        icon:"/assets/rockfellerIcon.png",
        image:"/assets/rockfeller.jpg",
        location: "Rockefeller Center,New York City",
        emo:"xxx" }, 
        // "keyTree(same as keyTree in otther file)":  { 
        //     treeName:"",
        //     icon:"/assets/PRpalmIcon.png",
        //     image:"/assets/PRpalm.jpg",
        //     location: "Puerto Rico",
        //     emo:"xxx" }, 
        


    }



const OverlayWrapper = ({
    name,
    handlerf
}) => {
    if (name == "default") {
        return (<></>)}
    else return  (<Overlay 
        name={allTrees[name].treeName}
        icon={allTrees[name].icon}
        image={allTrees[name].image}
        location={allTrees[name].location}
        emotionalConnection={allTrees[name].emo} 
        handler = {handlerf}
        
        />);    
    ;
}
export default OverlayWrapper;