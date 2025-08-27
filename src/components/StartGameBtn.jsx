import React from 'react';
import Css from '../App.css'

function StartGameBtn({ onClick }) {
  return (
    <button className="StartGameBtn" onClick={onClick}>
      Start Game
    </button>
  );
}

export default StartGameBtn;