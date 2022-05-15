

const incomeCategory = [
  { type: 'Salary', amount: 0, color:'#16784f', operation:'Income'},
  { type: 'Bussiness', amount: 0, color: '#123123',operation:'Income' },
  { type: 'Investments', amount: 0, color: '#14915f',operation:'Income' },
  { type: 'Other', amount: 0, color: '#0bc77e',operation:'Income'},
  
 
];

const expensesCategory = [
  { type: 'Bills', amount: 0, color:' #d3583a', operation:'Expense'},
  { type: 'Food', amount: 0, color: '#dc6a48', operation:'Expense'},
  { type: 'Phone', amount: 0, color: '#bf2f1f', operation:'Expense'},
  { type: 'Clothes', amount: 0, color: '#b50d12', operation:'Expense' },
  { type: 'Travel', amount: 0, color: '##f55b5f', operation:'Expense' },
  { type: 'House', amount: 0,color: '#ee8d68', operation:'Expense' },
  { type: 'Other', amount: 0, color: '#f55b5f', operation:'Expense'},
];

 const resetCategories = () => {
    incomeCategory .forEach((c) => c.amount = 0);
    expensesCategory.forEach((c) => c.amount = 0);
};

export{incomeCategory, expensesCategory, resetCategories}