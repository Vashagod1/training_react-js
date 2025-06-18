import React from 'react';
import './App.css';

function App() {
    const [count, setCount] = React.useState(() => {
        const saved = localStorage.getItem('count');
        return saved !== null ? Number(saved) : 0;
    });

    React.useEffect(() => {
        localStorage.setItem('count', count);
    }, [count])
    let counterClass = count > 0 ? 'plus' : count < 0 ? 'minus' : 'zero';


    function changeCount(amount) {
        setCount(count + amount);
        console.log(amount);
    }

    function ResetCounter() {
        setCount(0);
    }

    return (
        <div className="main">
            <h2 className="text">Счёт:</h2>
            <h3 className={`counter ${counterClass}`}>{count}</h3>
            <button onClick={() => changeCount(-5)} className="minus">-5</button>
            <button onClick={() => changeCount(-1)} className="minus">- Минус</button>
            <button onClick={() => changeCount(+1)} className="plus">Плюс +</button>
            <button onClick={() => changeCount(+5)} className="plus">+5</button>
            <br/>
            <button onClick={ResetCounter} className="reset">Сбросить число</button>
        </div>
    )
}

export default App;