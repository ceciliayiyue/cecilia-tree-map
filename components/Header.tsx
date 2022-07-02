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
          <a className="navbar-brand" href="/">
            <h2 
                className="font-weight-bolder"
                style={{marginLeft:"10px",
              fontFamily:"Nunito"}}
                >
                    A Tree Map</h2>
          </a>
        </Nav>

        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className="ms-auto" >
             <a className="navbar-brand" href="/intro">
              <h3 style={{fontFamily:"Nunito"}}>
           Learn more about the 🌳🌲🌴 map
              </h3>
            </a>
           
          
          </Nav>
        </Navbar.Collapse>
        
        
      </Navbar>
    </div>
  );
};

export default Header;