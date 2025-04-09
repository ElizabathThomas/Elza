import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Api = () => {
    var[user,setUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then((response) => {
            console.log(response)
            setUser(response.data)
         }
    )

  return (
    <div>
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><b>Name</b></TableCell>
                    <TableCell><b>Username</b></TableCell>
                    <TableCell><b>City</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {user.map((val) => {
                    return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                    )
                })}
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
        </Table>
       </TableContainer>
    </div>
  )
}

export default Api
