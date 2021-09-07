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

  return (
    <div>
      <h2> This is the header </h2>
      <button onClick={handleClickHome}> Home</button>
      <button onClick={handleClickArrayGenerator}> ArrayGenerator</button>      
      <button onClick={handleClickGraph}>Graph</button>      
    </div>
  );
};

export default Header;