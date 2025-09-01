import React from 'react';
import { useNavigate } from "react-router-dom";
import FailedStamp from '../assets/FAILEDStamp.png';
import css from '../App.css';

function FailGame() {
    const navigate = useNavigate();
  return (
    <div className="gameFailed">
      <img src={FailedStamp} alt="Failed" className="stampImage" />
      <button className="stampButton" onClick={() => navigate("../challenges")}>
        Return
      </button>
    </div>
  );
}

export default FailGame;
