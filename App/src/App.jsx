//imports
import { useState } from 'react';
import './App.css';
//var

//exports
export default function App() {
    const [step, addStep] = useState(1);
    const [count, addCount] = useState(0);
    let date = new Date('june 21 2027')
    date.setDate(date.getDate + count)
    return(
        <>
        <div className='stepCounter'>
            <button>+</button>
            <h2>Step:{step}</h2>
            <button>-</button>
        </div>
        <div className='dateCounter'>
            <button>+</button>
            <h2>Count:{count}</h2>
            <button>-</button>
        </div>
        <h2>{String(date)}</h2>
        </>
    )
}