import React from "react";

const Counter: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const [intervalId, setIntervalId] = React.useState<number | undefined>();
    const stop = () => {
        if (intervalId) {
            window.clearInterval(intervalId);
            setIntervalId(undefined);
        }
    };

    const play = () => {
        if (!intervalId) {
            const intervalId = window.setInterval(() => setCount(c => c + 1), 1000)
            setIntervalId(intervalId);
        }
    }; 

    const reset = () => setCount(0);

    return ( 
    <div>
    {count}
    <button onClick={play}>Play</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </div>
    );
    
    
};

export default Counter;