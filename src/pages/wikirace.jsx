import React from "react";
import CountdownTimer from "../components/CountdownTimer";
import PlayerManager from "../components/PlayerCard";
import WikiRaceGame from "../components/WikiRaceGameArea";
import css from "../App.css"

export default function Wikirace() {
  return (
    <div className="gameNameDiv">
      <h1 className="gameTitle" style={{ color: "red" }}>Wiki Race</h1>
      <CountdownTimer duration={7 * 60 * 1000} />  
      <PlayerManager /> 
      <WikiRaceGame />
    </div>
  );
}

