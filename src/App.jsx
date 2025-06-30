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
    const [history, setHistory] = React.useState([]);
    let counterClass = count > 0 ? 'plus' : count < 0 ? 'minus' : 'zero';



    function changeCount(amount) {
        setCount(count + amount);
    }

    function ResetCounter() {
        setCount(0);
    }

    React.useEffect(() => {
        setHistory(prev => [...prev, count]);
    }, [count]);

    React.useEffect(() => {
        if (history.length > 10) {
            setHistory(history.slice(1));
        }
    }, [history]);

    React.useEffect(() => {
        console.log('Текущий счёт:', count);
    }, [count]);

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
            <div className="counter-history">
                <h2 className="text">История изменений счётчика:</h2>
                <ul className="history">
                    {history.map((item, index) => (
                        <li key={index} className={item > 0 ? 'plus' : item < 0 ? 'minus' : 'zero'}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;