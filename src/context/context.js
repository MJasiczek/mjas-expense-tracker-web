import React, {createContext, useReducer} from 'react'
import {contextReducer} from './contextReducer'
const state = JSON.parse(localStorage.getItem('my_transactions')) || [];
export const trackerContext = createContext(state);

export const Provider = ({children}) =>{
    const [transactionsList, dispatch] = useReducer(contextReducer, state);
   
    //Action Creators
    const addTransaction =(transaction)=>{
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }
    const deleteTransaction =(id)=>{
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }
    const overallBalance = transactionsList.reduce((acc,currVal)=>(currVal.type ==="income"? (acc + Number(currVal.amount)) : (acc - Number(currVal.amount))),0);
    /*const balance = (transactions)=>{
        dispatch({type: 'COUNT_TRANSACTIONS', payload: transactions})
    }*/
    //console.log(transactions)
    return(
    <trackerContext.Provider value={{transactionsList,addTransaction, deleteTransaction,/* balance*/overallBalance}}>
    {children}
    </trackerContext.Provider>
    )
}