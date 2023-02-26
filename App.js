
import { useState } from 'react';
import './App.css';

function App() {

  const[result, SetResult] = useState("")
  const[value, SetNumber] = useState("")

  const handleclick = (e) => {
    SetResult(result.concat(e.target.name))
    
  }

  const clean = () => {
    SetResult("")
    SetNumber("")
  }

  const backspace = () => {
    SetResult(result.slice(0, -1))
  }

  const calculate = () => {
    value = SetNumber(eval(result).toString())
  }

  return (
    <div className='calculator'>
      <div className='outputs'>
        <div className='operation'>{result}</div>
        <div className='resu'>{value}</div>
      </div>
        <button class='span-two' id = "orange" onClick={clean}>CE</button>
        <button id = "orange" onClick={backspace}>C</button>
        <button name = "/" id = "orange" onClick = {handleclick}>/</button>
        <button name = "7" onClick={handleclick}>7</button>
        <button name = "8" onClick={handleclick}>8</button>
        <button name = "9" onClick={handleclick}>9</button>
        <button name = "*"  id = "orange" onClick={handleclick}>x</button>
        <button name = "4" onClick={handleclick}>4</button>
        <button name = "5" onClick={handleclick}>5</button>
        <button name = "6" onClick={handleclick}>6</button>
        <button name = "-" id = "orange" onClick={handleclick}>-</button>
        <button name = "1" onClick={handleclick}>1</button>
        <button name = "2" onClick={handleclick}>2</button>
        <button name = "3" onClick={handleclick}>3</button>
        <button name = "+" id = "orange" onClick={handleclick}>+</button>
        <button name = "0" onClick={handleclick}>0</button>
        <button name = "." onClick={handleclick}>.</button>
        <button name = "=" id = "orange" class = 'span-two' onClick={calculate}>=</button>
    </div>
  );
}

export default App;
