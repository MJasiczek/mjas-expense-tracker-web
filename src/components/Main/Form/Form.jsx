import React, {useState, useRef, useContext} from 'react'
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { trackerContext } from '../../../context/context';
import useStyles from './styles'
import {v4 as uuid} from 'uuid'
import formCSS from './Form.module.css'
import { incomeCategory , expensesCategory  } from '../../../data/data_category';
const formState = {
    type: '',
    amount:'',
    category: '',
    date:'',
    operation:''
}

export const Form = () => {
    const stylesJS = useStyles();
    const [data, setData] = useState(formState);
    
    const {addTransaction} = useContext(trackerContext);
    const transactionSend = ()=>{
      const operation = {...data, id: uuid()}
      addTransaction(operation )
      setData(formState)
      console.log(data)
    }
    
    
   
  
    return (
        <form className={formCSS.form} >
           <Grid container spacing={4} style={{padding:'1rem'}}>
      <Grid item xs={6}>
        <FormControl fullWidth required>
          <InputLabel>Type</InputLabel>
          <Select value={data.type} onChange={(e)=> setData({...data, type: e.target.value})}>
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth required>
          <InputLabel>Category</InputLabel>
          <Select value={data.category} onChange={(e)=> setData({...data, category: e.target.value})}>
          {data.type==='income' ?
            (incomeCategory.map((inCat)=>(
              <MenuItem value={inCat.type} >{inCat.type}</MenuItem>)
              )) :

              (expensesCategory.map((exCat)=>(
                <MenuItem value={exCat.type}>{exCat.type}</MenuItem>)
                )) }
            
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField required type="number" label="Amount" value={data.amount} onChange={(e)=>setData({...data, amount: e.target.value})} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField  required fullWidth type="date" style={{marginTop:'16px'}} value={data.date} onChange={(e)=>setData({...data, date: e.target.value})} />
      </Grid>
      <Button className={stylesJS.button} variant="outlined" fullWidth onClick={transactionSend}>Create Operation</Button>
    </Grid>
          
        </form>
    )
}
/*<Grid container spacing={4} style={{padding:'1rem'}}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={data.type} onChange={(e)=> setData({...data, type: e.target.value})}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={data.category} onChange={(e)=> setData({...data, category: e.target.value})}>
          <MenuItem value="Income">Income</MenuItem>
            
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" value={data.amount} onChange={(e)=>setData({...data, amount: e.target.value})} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth type="date" style={{marginTop:'16px'}} value={data.date} onChange={(e)=>setData({...data, date: e.target.value})} />
      </Grid>
      <Button className={stylesJS.button} variant="outlined" fullWidth >Create Operation</Button>
    </Grid>*/