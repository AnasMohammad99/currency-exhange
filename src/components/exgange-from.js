import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const ExgangeFrom = ({data}) => {
    function handleSubmit(event) {
        event.preventDefault()
        console.log(from, to, count);
        setResult((+count/from)*to)
      }
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);
  return (
    <form onSubmit={handleSubmit}>
    <Box style = {{
        display:'flex',
        justifyContent:'center',
        flexDirection:"column",
        backgroundColor:"white",
        alignItems:'center',
        borderRadius:'10px',
        padding:'3rem'
    }}>

        <Box>
        <InputLabel id="from-select">from</InputLabel>
        <Select
            style={{width:"20rem"}}
            labelId="from-select"
            id="from-select"
            value={from}
            label="from"
            onChange={(e)=>setFrom(e.target.value)}
            >
                {
                    Object.entries(data).map((currency)=>{
                        return(
                            <MenuItem key={currency[0]} value={currency[1]}>{currency[0]}</MenuItem>
                        )
                    })
                }
        </Select>
        </Box>
        <Box>
        <InputLabel id="to-select">to</InputLabel>
        <Select
            style={{width:"20rem"}}
            labelId="to-select"
            id="to-select"
            value={to}
            label="to"
            onChange={(e)=>setTo(e.target.value)}
            >
                {
                    Object.entries(data).map((currency)=>{
                        return(
                            <MenuItem value={currency[1]}>{currency[0]}</MenuItem>
                            )
                        })
                    }
        </Select>
        </Box>
        <Box>
        <InputLabel id="count">Value</InputLabel>
        <TextField
        style={{width:"20rem"}}
        type="number"
        id="count"
        label="count"
        variant="outlined"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
        </Box>
        <Box>
            <Button variant='contained' style={{width:"20rem", marginTop:"30px"}} type='submit'>Exhange</Button>
        </Box>
        <Box>
        <InputLabel id="output">result</InputLabel>
        <TextField
          disabled
          style={{width:"20rem"}}
          id="output"
          label="output"
          value={result}
        />
        </Box>
    </Box>
    </form>
  )
}

export default ExgangeFrom