import React, {useContext, useEffect} from 'react'
import { Form } from './Form/Form'
import {List} from './List/List'
import mainCSS from './Main.module.css'
import { trackerContext } from '../../context/context';

export const Main = () => {
    const {transactionList} = useContext(trackerContext);
    const {overallBalance}= useContext(trackerContext);
    //const balance = overallBalance(transactionList);
   // const {balance} = useContext(trackerContext);
   
        //const overallBalance = balance(transactionList)
        //console.log(balance)
     

    return (
        <div className={mainCSS.main}>
             <section className={mainCSS.content}>
                <h1 className={mainCSS.header}>Expense Tracker</h1>
                <div className={mainCSS.content}>
                <h2 className={mainCSS.current_balance_title}>Current Balance:</h2>
                <h3 className={mainCSS.current_balance}>${overallBalance}</h3>
                <Form />
               </div>
            </section>
            <section className={mainCSS.operations}>
           <List />
            </section>
        </div>
    )
}
