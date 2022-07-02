import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/map";
import {Spinner} from "react-bootstrap";
import React, { useState } from "react";
import OverlayWrapper from "../components/overlay";
import { Row } from "react-bootstrap";


const Home = () => {
  console.log(process.env.MAP_API_KEY);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY! 
  });

  const [currentTree,setCurrentTree]=useState("default");

  const retrieveTree = (tree: string) => {
    console.log("currently selected " + tree);
    setCurrentTree(tree);
  };
  if (!isLoaded) return <Spinner animation="border" />;
  return (
  
  <div>
    <Row>
    <div>
    <OverlayWrapper name={currentTree} handlerf={setCurrentTree}/>
    </div>
    <div>
    <Map 
      retrieveTree={retrieveTree}
    />
    </div>
    </Row>
  </div>
  );
}
export default Home;