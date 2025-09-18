import Counter from "./Counter"

function App() {
    return(
      <>
          <Counter />
      </>
    );
}

export default App
// React hook =>  Special function that allows functional components to use react features without writting class components
//                (useState, useEffect, useContext, useReducer, useCallback, and more)

//useState() => A react hook that allows the creation of a stateful variable AND a setter Function to update its value in the virtual DOM
//              [name, setName]