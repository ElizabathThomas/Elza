import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nabbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                MyApp
            </Typography>
            <Link to='/login'>
            <Button variant="contained" color="secondary">
              Login
            </Button>&nbsp;
            </Link>

            <Link to='/sign'>
            <Button variant="contained" color="secondary">
              Sign
            </Button>&nbsp;
            </Link>

            <Link to='/state'>
            <Button variant="contained" color="secondary">
              State
            </Button>&nbsp;
            </Link>

            <Link to='/sample'>
            <Button variant="contained" color="secondary">
              Sample
            </Button>
            </Link>&nbsp;
            
            <Link to='/api'>
            <Button variant="contained" color="secondary">
              Api 
            </Button>
            </Link>&nbsp;

            <Link to='/card'>
            <Button variant="contained" color="secondary">
              Card
            </Button>
            </Link>&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nabbar

