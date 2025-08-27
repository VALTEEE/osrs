import React, { useState, useEffect } from 'react';
import '../App.css';

function CountdownTimer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime((prevTime) => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearTimeout(timerId);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div className="timer">{getFormattedTime(time)}</div>;
}

export default CountdownTimer;
