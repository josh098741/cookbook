/*
  useContext() => React Hook that allows you  to share values
                  between multiple levels of components
                  without passing props through each level

    => Provider Component 
        1. import  {createContext} from 'react'
        2. export const MyContext = createContext();
        3. <MyContext.Provider value={value}>
                  <Child />
                  </MyContext.Provider>

    => CONSUMER COMPONENT
        1.import React, {useContext} from 'react'
          import {MyContext} from './ComponentA'
        2.const value = useContext(MyContext);
      
*/
import ComponentA from './ComponentA'

import React from 'react'

function App(){
  return(<ComponentA />)
}

export default App