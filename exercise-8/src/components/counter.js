import {React, useState} from 'react'
import './counter.css'



const Counter = () => {
    const [countr, setCountr] = useState(0);
    const [countrb, setCountrb] = useState(0);

    const addClicksA = () => {
        setCountr(count => count + 1);
    }

    const addClicksB = () => {
        setCountrb(count => count + 1);
    }

  return (
    <div className='count'>
        <h1>Counter App</h1>
        <div>
            <div className='child'>{countrb}</div>
            <div className='child'>{countr}</div>
        </div>
        <button onClick={addClicksA}>COUNT A</button>
         <button onClick={addClicksB}>COUNT B</button>
    </div>
  )
}

export default Counter