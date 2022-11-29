import React from 'react';
import './App.css';

function App() {

  const onClick = () => {
    console.log('works')
  }

  return (
    <div className="App"
      onClick={() => onClick()}>
      HELLOOOOOOOOOOOOOOOOOOOOOOOoo
    </div>
  );
}

export default App;
