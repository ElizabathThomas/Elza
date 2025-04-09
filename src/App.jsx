import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'

import Sign from './Components/Sign'
import { AppBar, Button, Card, Grid, Toolbar, Typography } from '@mui/material'
import Nabbar from './Components/Nabbar'
import { Router, Routes ,Route} from 'react-router-dom'
import StateBasics from './Components/StateBasics'
import Sample from './Components/Sample'
import Api from './Components/Api'
import Cardget from './Components/Cardget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nabbar/>
      
       <Routes>

      <Route  path="/login" element={<Login/>}/>
       <Route path="/sign" element={<Sign/>}/>
       <Route path="/State" element={<StateBasics/>}/>
        
        <Route path="/Sample" element={<Sample/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/card" element={<Cardget/>}/>
        
       </Routes>
      
    </>
  )
}

export default App






























































