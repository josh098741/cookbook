/*
    useEffect()  => React Hook that tells react DO SOME CODE WHEN (pick one)
    This component re-renders 
    This component mounts
    This state of a value

    => useEffect(function, [dependencies])

    1. useEffect (() => {}) //Runs after every re render
    2. useEffect (() => {}, []) // Runs only on mount 
    3. useEffect (() => {}, [value]) // Runs on mount + when value changes

    //USES
    #1 Event listeners
    #2 DOM manipulation
    #3 Subscrption (real-time updates)
    #4 Fetching Data from and API
    #5 Clean up when a component unmounts
*/

import React,{useState, useEffect} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
        return () => {
            //Some Clean up code
        }
    }, [count,color])

    function addCount(){
        setCount(count => count + 1);
    }

    function subtractCount(){
        setCount(count => count - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent