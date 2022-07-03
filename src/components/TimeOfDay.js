import React from 'react';

function TimeOfDay() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;
  const customStyle = {
    color: '',
  };

  if (currentTime < 12) {
    greeting = '☕️ Good morning 🌞';
    customStyle.color = 'gold';
  } else if (currentTime < 18) {
    greeting = '🌳 Good afternoon 🦮';
    customStyle.color = 'olive';
  } else {
    greeting = '🌜 Good night 🌛';
    customStyle.color = 'indigo';
  }
  return (
    <div>
      <h1 className="greet" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}

export default TimeOfDay;
