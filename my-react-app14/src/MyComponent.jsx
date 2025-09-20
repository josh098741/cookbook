/*
    useState() => Re-renders the component when the state value changes

    useRef() => "use Reference" Does not cause re-renders when its value changes
    when you want a component to remember some information but you dont want that information
    to trigger new renders.

    1. Accessing/Interacting with DOM elements
    2. Handling Focus, Animation, andd Traansactions
    3. Managing Timers and intervals
*/

import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    const ref = useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me 1</button>
            <input ref={inputRef1}/><br />

            <button onClick={handleClick}>Click Me 2</button>
            <input ref={inputRef2} /><br />

            <button onClick={handleClick}>Click Me 3</button>
            <input ref={inputRef3} />
        </div>
    );
}

export default MyComponent