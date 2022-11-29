import React from 'react';
import './App.css';

function App() {

  const onClick = () => {
    console.log('PULA MEA');
  }

  return (
    <React.Fragment>
      <div className="App"
        onClick={() => onClick()}>
        HELLOOOOOOOOOOOOOOOOOOOOOOOoo
      </div>
      <div>
        qeqwewqeqwe
      </div>
      <div>
        qeqwewqeqwe
      </div>
      <div>
        qeqwewqeqwe
      </div>
      <div>
        qeqwewqeqwe
      </div>
      <div>
        qeqwewqeqwe
      </div>
    </React.Fragment>
  );
}

export default App;
