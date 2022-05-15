import React, {useContext} from 'react'
import listCSS from './List.module.css'
import useStyles from './style';
import { Transaction } from '../../Transaction/Transaction';
import { trackerContext } from '../../../context/context';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';
export const List = () => {
    const {transactionsList} = useContext(trackerContext)
  
    
    return (
        <div className={listCSS.container}>
        <ul className={listCSS.list}>
        {transactionsList.map((transaction)=>(
          
           <Transaction key={transaction.id} id={transaction.id} category={transaction.category} amount={transaction.amount} type={transaction.type} date={transaction.date} operation={transaction.operation}/>
        ))}
    </ul>
    </div>
    )
}

 {/* <div className={listCSS.list}>
            {transactions.map((transaction)=>(
              
                    <Transaction key={transaction.id} category={transaction.category} amount={transaction.amount} type={transaction.type} date={transaction.date}/>
         
            ))}
        </div> */} 
         {/* <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>*/}