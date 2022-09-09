import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Numbers from './components/numbers/numbers';

function App() {
  const [result, setResult] = useState('');

  const focusPoint = useRef()
  useEffect(() => {
    focusPoint.current.focus()
  }, []);
  const calculate = () => {
    try {
      setResult(eval(result).toString())

    } catch (error) {
      setResult('Error')
    }
  }
  const handleChange = e => {
    e.preventDefault();
    setResult(e.target.value.replace(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g,))

  };


  return (
    <div className='container'>
      <header >
        <div>
          <h1>calc</h1>
        </div>
        <div>
          <form>
            <input
              className='input_text'
              placeholder='0'
              ref={focusPoint}
              value={result}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className='keyboard'>
          <Numbers
            result={result}
            setResult={setResult}
            calculate={calculate}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
