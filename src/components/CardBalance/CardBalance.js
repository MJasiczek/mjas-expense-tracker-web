import React, {useContext, useState, useEffect} from 'react'
import cardBalanceCSS from './CardBalance.module.css'
import {Doughnut} from 'react-chartjs-2'
import { trackerContext } from '../../context/context'
import { incomeCategory, expensesCategory, resetCategories } from '../../data/data_category'
import { CodeSharp } from '@material-ui/icons'
export const CardBalance = () => {

    const {transactionsList, addTransaction} = useContext(trackerContext);
    const [type, setType] = useState('income');
    const [income, setIncome] = useState()
    const [expenses, setExpenses] = useState()
    const [type2, setType2] = useState('expense')
    const [dataForChart, setDataForChart1] = useState({})
    const [dataForChart2, setDataForChart2] = useState({})
    const [accBalance, setAccBalance] = useState()
    
   
    useEffect(()=>{
        resetCategories();
        //income
        const currentCategoriesIncome = transactionsList.filter((transac)=>transac.type ==type);
        const categoriesIncome = incomeCategory;
        console.log(categoriesIncome)
        currentCategoriesIncome.forEach((element)=>{
            const categoryIncome = categoriesIncome.find((e)=>e.type===element.category);
            if(categoryIncome){
                categoryIncome.amount += Number(element.amount);
            }
        })
        const showIncomeCategoriesWithRemoveEmpty = categoriesIncome.filter((e)=>e.amount>0);
        setDataForChart1( {
            datasets:[{
            data: showIncomeCategoriesWithRemoveEmpty.map((e)=>e.amount),
            backgroundColor:showIncomeCategoriesWithRemoveEmpty.map((e)=>e.color),
            }],
            labels: showIncomeCategoriesWithRemoveEmpty.map((e)=>e.type), 
            
        }
        
        )
        setIncome( categoriesIncome.reduce((acc, currVal)=> acc+=currVal.amount, 0))

        //expenses
        const currentCategoriesExpenses= transactionsList.filter((transac)=>transac.type ==type2);
        const categoriesExpenses = expensesCategory;
        currentCategoriesExpenses.forEach((element)=>{
            const categoryExpenses = categoriesExpenses.find((e)=>e.type === element.category);
            if(categoryExpenses){
                categoryExpenses.amount += Number(element.amount);
            }
        })
        const showExpensesCategoriesWithRemoveEmpty = categoriesExpenses.filter((e)=>e.amount>0);
        setDataForChart2( {
            datasets:[{
            data: showExpensesCategoriesWithRemoveEmpty .map((e)=>e.amount),
            backgroundColor:showExpensesCategoriesWithRemoveEmpty .map((e)=>e.color),
            }],
            labels: showExpensesCategoriesWithRemoveEmpty .map((e)=>e.type), 
            
        }
        
        )
        setExpenses( categoriesExpenses.reduce((acc, currVal)=> acc+=currVal.amount, 0))
     
    }, [transactionsList])

    return (
        <div className={cardBalanceCSS.card_balance}>
            <section className={cardBalanceCSS.income}>
                <h2 className={cardBalanceCSS.header}>Income</h2>
                <div className={cardBalanceCSS.income_content}>
                <h4>{income}</h4>
                     {<Doughnut data={dataForChart}/>}
                </div>
            </section>
            <section className={cardBalanceCSS.expense}>
            <h2 className={cardBalanceCSS.header}>Expenses</h2>
                <div className={cardBalanceCSS.expense_content}>
                    <h4>{expenses}</h4>
                    {<Doughnut data={dataForChart2}/>}
                </div>
            </section>
        </div>
    )
}
