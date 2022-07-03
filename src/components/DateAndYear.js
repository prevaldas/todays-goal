import React from 'react';

function DateAndYear() {
  const current = new Date();
  var options = { month: 'long' };

  const date = `${current.getDate()} ${new Intl.DateTimeFormat(
    'en-GB',
    options
  ).format(current)} ${current.getFullYear()}`;

  return (
    <div className="date">
      <h1>{date}</h1>
    </div>
  );
}

export default DateAndYear;
