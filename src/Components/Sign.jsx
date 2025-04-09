import { Button, TextField } from '@mui/material'
import React from 'react'

const Sign = () => {
  return (
    <div>
         <form>
            <TextField id="username" label="Username :" variant="outlined" /><br/><br/>
            <TextField id="email" label="Email :" variant="outlined"  /><br/><br/>
            <TextField id="password" label="Password :" variant="outlined"  /><br/><br/>
            <Button variant="contained">SignUp</Button>
          </form>
    </div>
    )
}

export default Sign
