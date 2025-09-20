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

    let [number, setNumber] = useState();
    return(
        <button>Click Me</button>
    );
}

export default MyComponent