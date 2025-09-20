import ComponentD from './ComponentD'
import React,{useContext} from 'react'
import {userContext} from './ComponentA'

function ComponentC(){

    const user = useContext(userContext)

    return(
        <div className="box">
            <h1>ComponentC {user}</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC