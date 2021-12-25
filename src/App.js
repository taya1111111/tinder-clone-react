import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* TinderCards */}
      <TinderCards/>
      {/* SwipeButtons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
