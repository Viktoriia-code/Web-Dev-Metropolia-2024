import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
  }

  function handleDecrement() {
    setCount(prevCount => prevCount - 1);
  }

  function toggleTheme() {
    if(theme==="light") {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
