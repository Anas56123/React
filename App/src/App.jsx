//imports
import { useState } from 'react';
import './App.css';
//var

//exports
export default function App() {
    const [step, addStep] = useState(1);
    const [date, addDate] = useState(new Date());
    let count = 0
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