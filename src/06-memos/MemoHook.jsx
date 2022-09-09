import { useMemo, useState } from 'react'
import {useCounter} from '../hooks'

const heavyStuff = (interationNumber = 100) => {
    for( let i = 0 ; i < interationNumber; i++) {
        console.log("Rendr!!")
    }

    return ` ${interationNumber} realizadas`
}

export const MemoHook = () => {

    const { counter, increment} = useCounter()

    const [show, setShow] = useState(true)

    const mmemorizedValue= useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1> Counter:  <small> { counter }</small>  </h1>
        <hr/>

        <h4> { mmemorizedValue}</h4>

        <button className="btn btn-primary" onClick={() => increment()}>
            +1
        </button>
        <button className='btn btn-outline-primary' onClick={() => setShow(!show)}>
            show/hide {JSON.stringify(show)}
        </button>
    </>
    )
}
