import React from "react";
import CountdownTimer from "../components/CountdownTimer";

export default function Wikirace() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Wikirace</h1>
      <CountdownTimer duration={7 * 60 * 1000} />   
    </div>
  );
}
