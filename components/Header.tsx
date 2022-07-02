import Link from "next/link";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const style = {
  height: "65px",
  backgroundColor: "green",
};


const Header = () => {
  return (
    <div style={style}>
      <Navbar 
      collapseOnSelect expand="lg" variant="dark" sticky="top"
     
      
      >
        <Nav className="ms-auto">
          <Link href="/">
            <a className="navbar-brand">
            <h2 
                className="font-weight-bolder"
                style={{marginLeft:"10px",
              fontFamily:"Nunito"}}
                >
                    A Tree Map</h2>
            </a>
          </Link>
        </Nav>

          <Nav className="ms-auto" >
             <Link  href="/intro">
              <a className="navbar-brand"><h3 style={{fontFamily:"Nunito"}}>
           Learn more about 🌳🌲🌴 map
              </h3></a>
            </Link>
           
          
          </Nav>
        
        
      </Navbar>
    </div>
  );
};

export default Header;