import React, {useContext} from 'react'
import transactionCSS from './Transaction.module.css'
import {MoneyOff, Delete} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import { trackerContext } from '../../context/context'

export const Transaction = (props) => {
    const id = props.id;
    const type = props.type;
    const category = props.category;
    const date = props.date;
    const amount = props.amount;
    const operation = props.operation;
    const {deleteTransaction} = useContext(trackerContext);
    const deleteOperation =()=>{
        deleteTransaction(id)
    }
    return (
        <div className={transactionCSS.transaction}>
            <Avatar style={{backgroundColor: `${type=='income'? 'green' : 'red'}`}}>
                <MoneyOff />
            </Avatar>
            <div className ={transactionCSS.transaction_text} style={{color: `${type=='income'? 'green' : 'crimson'}`}}>
                <p>{category}</p>
                <p>{`$ ${amount}`}</p>
                <p>{date}</p>
            </div>
            <IconButton style={{marginRight: '15px'}} onClick={deleteOperation}>
            <Delete/>
            </IconButton>
        </div>
    )
}
