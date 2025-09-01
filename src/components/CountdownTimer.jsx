import React, { useState, useEffect } from 'react';
import '../App.css';
import FailGame from './FailGame';

function CountdownTimer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime((prevTime) => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearTimeout(timerId);
  }, [time]);

  
    const totalSeconds = Math.floor(time / 1000);  //milliseconds
    const minutes = Math.floor(totalSeconds / 60);  //seconds
    const seconds = totalSeconds % 60;

     const isFinished = minutes <= 0 && seconds <= 0;

  return (
    <div className="timer">
      {!isFinished ? (
        <span>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      ) : (
        <FailGame />
      )}
    </div>
  );
}

export default CountdownTimer;
