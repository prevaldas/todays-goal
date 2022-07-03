import React from 'react';
import Goal from './components/Goal';
import Footer from './components/Footer';
import TimeOfDay from './components/TimeOfDay';
import DateAndYear from './components/DateAndYear';
import Time from './components/Time';

function App() {
  return (
    <div>
      <DateAndYear />
      <TimeOfDay />
      <Time />
      <Goal />
      <Footer />
    </div>
  );
}

export default App;
