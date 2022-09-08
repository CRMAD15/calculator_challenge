import React from 'react';
import './numbers.css'
const Numbers = () => {

    return (
        <div>
            <div className='numbers'>
                <button className='btn white'>7</button>
                <button className='btn white'>8</button>
                <button className='btn white'>9</button>
                <button className='btn blue'>DEL</button>
            </div>
            <div className='numbers'>
                <button className='btn white'>4</button>
                <button className='btn white'>5</button>
                <button className='btn white'>6</button>
                <button className='btn white'>+</button>
            </div>
            <div className='numbers'>
                <button className='btn white'>1</button>
                <button className='btn white'>2</button>
                <button className='btn white'>3</button>
                <button className='btn white'>-</button>
            </div>
            <div className='numbers'>
                <button className='btn white'>.</button>
                <button className='btn white'>0</button>
                <button className='btn white'>/</button>
                <button className='btn white'>X</button>
            </div>
            <div className='numbers'>
                <button className='btn blue width'>RESET</button>
                <button className='btn red width'>=</button>
            </div>
        </div>

    );
}

export default Numbers;
