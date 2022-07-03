import React from 'react';

function Heading() {
  function strike() {
    document.getElementById('goal').style.textDecoration = 'line-through wavy';
  }

  function unstrike() {
    document.getElementById('goal').style.textDecoration = null;
  }

  return (
    <header>
      <h1
        id="goal"
        className="goalOfTheDay"
        spellCheck="false"
        contentEditable="true"
      >
        Write your goal of the day here... ⇠
      </h1>
      <button onClick={strike}>done</button>
      <button onClick={unstrike}>undo</button>
    </header>
  );
}

export default Heading;
