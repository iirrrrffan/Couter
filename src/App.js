import React from 'react';
import './App.css';
import Body from './component/Body';
import Count from './Count';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Count />
    </div>
  );
}

export default App;
