import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/UI/Button/DEMO/Demo';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  const togglePHandler = useCallback(() => {
    if (allowToggle) {
      setShowP(pervShowP => !pervShowP)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP}></DemoOutput>
      <Button onClick={togglePHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Toggle Allow</Button>
    </div>
  );
}

export default App;
