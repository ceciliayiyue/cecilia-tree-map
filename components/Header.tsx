import Link from "next/link";
import React from "react";
import { Navbar, Nav, Col, Button } from "react-bootstrap";

const style = {
  height: "145px",
  backgroundColor: "green",
};


const Header = () => {
  return (
    <div style={style}>
      <Navbar 
       variant="dark" sticky="top"
       collapseOnSelect expand="lg"
      
      >
        <Nav className="ml-auto">
          <Col>
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
          <Link  href="/intro">
              <Button className="navbar-brand" variant="outline-warning"><h4 style={{fontFamily:"Nunito"}}>
            Learn more about 🌳🌲🌴 map 
              </h4></Button>
            </Link>
          </Col>
         
       
         
        </Nav>

          {/* <Nav className="ms-auto" >
             <Link  href="/intro">
              <a className="navbar-brand"><h3 style={{fontFamily:"Nunito"}}>
           Learn more about 🌳🌲🌴 map
              </h3></a>
            </Link>
         
          
          </Nav> */}
        
        
      </Navbar>
    </div>
  );
};

export default Header;