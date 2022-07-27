import React, { useState, useEffect } from "react";
import "./Card.css";
import Buttom from "./Buttom.jsx";
import axios from "axios";
import breakingBadLogo from "../assets/breakingBadLogo.svg"
const Card = () => {
  const url = "https://www.breakingbadapi.com/api/characters";

  
  const [imagen, setImagen] = useState(null);
  const [name, setName] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [status, setStatus] = useState(null);
  const [numRandom, setNumRandom] = useState(null);

  function handleSetEvento() {
   
    setNumRandom(parseInt(Math.random() * 116));
  }

  useEffect(() => {
    
    axios
    .get(url)
    .then((data) => {
        setImagen(data.data[numRandom].img)
        setName(data.data[numRandom].name)
        setOccupation(data.data[numRandom].occupation[0])
        setStatus(data.data[numRandom].status)
    })
    .catch((error) => console.log(error));
  },[numRandom]);

  return (
    <>
    <div className="contenedor_logo">
    <img className="logo" src={breakingBadLogo} alt="" width={"300px"}/>
    </div>
   
    <div className="card_container">
      <div className="contenedorInfo">
      <h1>{name} </h1>
      <img  src={imagen} alt="imagen_random_breakingbad"  width={"20%"} />
      <h3>{occupation}</h3>
      <p > {status}</p>
      </div>
      
   
    <Buttom handleSetEvento={handleSetEvento} />
    </div>
    </>
    
  );
};

export default Card;
