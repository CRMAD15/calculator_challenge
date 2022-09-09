import React from 'react';
import './numbers.css'
const Numbers = ({ result, setResult, calculate }) => {
    const handleClick = e => {

        result === 'Error' ? setResult(e.target.name) : setResult(result.concat(e.target.name.replace(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)));
    };

    const resetResult = () => {
        setResult('')
    }

    const backDelete = () => {
        result === 'Error' ? setResult('') : setResult(result.slice(0, -1))
    }
    return (
        <div>
            <div className='numbers'>
                <button name='7' className='btn white' onClick={handleClick}>7</button>
                <button name='8' className='btn white' onClick={handleClick}>8</button>
                <button name='9' className='btn white' onClick={handleClick}>9</button>
                <button className='btn blue' onClick={backDelete}>DEL</button>
            </div>
            <div className='numbers'>
                <button name='4' className='btn white' onClick={handleClick}>4</button>
                <button name='5' className='btn white' onClick={handleClick}>5</button>
                <button name='6' className='btn white' onClick={handleClick}>6</button>
                <button name='+' className='btn white' onClick={handleClick}>+</button>
            </div>
            <div className='numbers'>
                <button name='1' className='btn white' onClick={handleClick}>1</button>
                <button name='2' className='btn white' onClick={handleClick}>2</button>
                <button name='3' className='btn white' onClick={handleClick}>3</button>
                <button name='-' className='btn white' onClick={handleClick}>-</button>
            </div>
            <div className='numbers'>
                <button name='.' className='btn white' onClick={handleClick}>.</button>
                <button name='0' className='btn white' onClick={handleClick}>0</button>
                <button name='/' className='btn white' onClick={handleClick}>/</button>
                <button name='*' className='btn white' onClick={handleClick}>X</button>
            </div>
            <div className='numbers'>
                <button className='btn blue width' onClick={resetResult}>RESET</button>
                <button className='btn red width' onClick={calculate}>=</button>
            </div>
        </div>



    );
}

export default Numbers;
