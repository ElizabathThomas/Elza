import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sample = () => {
    var[button,setButton]=useState();
    const react =() =>{
        
        setButton("React")
    }
    
    const angular=() =>{
        
        setButton("Angular")
    }
    
    const vue=() =>{
        setButton("Vue")
    }
  return (
    <div>
      <Typography variant="h3">Welcome {button}</Typography><br/><br/>
      <Button variant="contained" onClick={react}>React</Button>&nbsp;
      <Button variant="contained" onClick={angular}>Angular</Button>&nbsp;
      <Button variant="contained" onClick={vue}>Vue</Button>&nbsp;
    </div>
  )
}

export default Sample