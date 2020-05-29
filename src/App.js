import React from 'react';
import { Helmet } from 'react-helmet';

// components
import Header from './components/Header/Header';
import Simulator from './components/Simulator/Simulator';

// styles import
import './scss/styles.scss';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Mansa - Loan Simulator</title>
      </Helmet>
      <Header></Header>
      <Simulator></Simulator>
    </div>
  );
}

export default App;
