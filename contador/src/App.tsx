import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

const App: React.FC = () => {
  return (
    <div className="App">
     <Counter />
     <Counter2 />
    </div>
  );
};

export default App;
