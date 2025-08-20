import React,{useState} from 'react'
import Form from './Form.jsx'
import {v4 as uid} from 'uuid'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx'

function Expensecontainer() {
  const EXPENSE =[{
    id:uid(),
    title:"Food",
    amount:50
  },{
    id:uid(),
    title:"Transport",
    amount:20
  }]

  const [expense,setExpense] = useState(EXPENSE)
      
  function addExpense(title, amount)
      {
        setExpense([...expense,{id:uid(),title, amount}])
        console.log(expense);
      }
      function deleteExpense(id)
      {
        setExpense(expense.filter((item)=>item.id!==id))
      }
  return (
    <>
    <div className='expense-container'>
      <BalanceContainer expense ={expense}/>
      <Form addExpense={addExpense}/>
      <History expense = {expense} deleteExpense={deleteExpense}/>
    </div>
    </>
  )
}

export default Expensecontainer