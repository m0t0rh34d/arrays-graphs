import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  };    
  
  const handleClickArrayGenerator = () => {
    navigate("/arraygenerator");
  };

  const handleClickGraph = () => {
    navigate("/graph");
  };

  const handleClickGraph2 = () => {
    navigate("/graph2");
  };

  const handleClickGraph3 = () => {
    navigate("/graph3")
  }

  return (
    <div>
      <h2> This is the header </h2>
      <button onClick={handleClickHome}> Home</button>
      <button onClick={handleClickArrayGenerator}> ArrayGenerator</button>      
      <button onClick={handleClickGraph}>Graph</button>      
      <button onClick={handleClickGraph2}>Graph2</button>      
      <button onClick={handleClickGraph3}>Graph3</button>
    </div>
  );
};

export default Header;
