import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const incrementFather = () => {
    //     setCounter(counter+1);
    // }

    const incrementFather = useCallback(
      (value) => {
        setCounter((count) => count + value )
      },
      [],
    )
    
  return (
    <>
        <h1>useCallback hook: { counter }</h1>
        <hr/>

        <ShowIncrement  increment={incrementFather}/>
    </>
    )
}
