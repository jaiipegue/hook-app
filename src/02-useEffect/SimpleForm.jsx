import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "strider",
        email: "jaiipegue12@gmail.com"
    })

    const { username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value } = target
        setFormState({
            ...formState,
            [name]: value 
        });
    }

 
  return (
    <>
        <h1>Simple Form</h1>
        <hr/>

        <input 
            type="text" 
            className='form-control' 
            placeholder='username'
            name='username'
            value={username}
            onChange = {onInputChange}
        />
        <input 
            type="email" 
            className='form-control'
            placeholder='email' 
            name='email'
            value= {email}
            onChange = {onInputChange}
        />
        
        {
         (username === "strider" ) &&  <Message/>

        }
    </> 
)
}
