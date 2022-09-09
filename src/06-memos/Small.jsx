import {memo} from 'react'
 

export const Small = memo(({value}) => {
    console.log("Render")

  return (
    <>
        <small> { value }</small>
    </>
    )
})
