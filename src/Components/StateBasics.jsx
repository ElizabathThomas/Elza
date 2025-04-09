import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
const StateBasics = () => {
    var[name,setName]=useState("Elizabath")

    const handleinput =(e) =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    var[name1,setName1]=useState()
    const inputhandle=() =>{
       
        setName1(name)
    }
    var[counter,setCounter]=useState(0)
    const counterhandle=() =>{
        setCounter(counter+1)
    }
    const counterhandle1=() =>{
        setCounter(counter-1)
    }
  
    
  return (
    <div>
      <Typography variant="h3">Welcome {name1}</Typography>
      <br/><br/>
      <TextField variant="outlined" label="Type your name" onChange={handleinput} />&nbsp;
      <Button variant="contained" onClick={inputhandle}>Submit</Button>
      <Typography variant="h5">Counter : {counter}</Typography>
      <Button variant="contained" onClick={counterhandle}>Increment</Button>&nbsp;
      <Button variant="contained" onClick={counterhandle1}>Decrement</Button>
    </div>
  )
}

export default StateBasics
