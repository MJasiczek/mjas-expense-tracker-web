export const contextReducer =(state, action)=>{

    let transactions, list;
    switch(action.type){
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            localStorage.setItem('my_transactions', JSON.stringify(transactions))

            return transactions;
            
        case 'DELETE_TRANSACTION':
                 transactions = state.filter((transa)=> transa.id != action.payload);
                 localStorage.setItem('my_transactions', JSON.stringify(transactions))
                return transactions;
       
       /* case 'COUNT_TRANSACTIONS':
                
               const balance = state.reduce((acc,currVal)=>(currVal.type ==="income"? (acc + Number(currVal.amount)) : (acc - Number(currVal.amount))),0)
                return balance;
                console.log(list)
                */
        default:
            return state;
        }
    }

