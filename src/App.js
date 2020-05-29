import React from 'react';

// components
import Header from './components/Header/Header';
import Simulator from './components/Simulator/Simulator';

// styles import
import './scss/styles.scss';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Simulator></Simulator>
    </div>
  );
}

export default App;
