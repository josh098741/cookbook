import React, {useState} from 'react'

function MyComponent(){
    const [count, setCount] = useState(0);

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset(){
        setCount(0)
    }

    function increment(){

        /*
            Takes the pending state to calculate the next state
            React puts your updater function in a queue (waiting in line)
            During the nnext Render, it will call them in the same order
        */

        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponent