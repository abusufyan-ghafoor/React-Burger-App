import { useState } from 'react';
export default function Square({ newVal, onSquareClick }) {
    const [value, setValue] = useState(newVal);
    function handleClick() {
        setValue('X');
    }
    return (
        <button className="square" onClick={onSquareClick} >{value}</button>
    );
  }