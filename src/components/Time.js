import React, { useState } from 'react';

function Time() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  var Night = new Date().getHours();

  return (
    <div className="clock" style={{ color: Night > 17 && 'black' }}>
      <p>{time}</p>
    </div>
  );
}

export default Time;
