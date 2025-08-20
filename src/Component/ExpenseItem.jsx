import React from 'react'

function ExpenseItem(props) {
    const {id, title, amount} = props.expense
    const type = amount > 0 ? "income" : "expense";
    function handleDelete()
    {
      props.deleteExpense(id)
    }
  return (
    <div className={`expense-item ${type}`}>
        <div className='expense-title'>{title}</div>
        <div className='expense-amount'>${amount}</div>
        <div className='delete-button-overlay'>
          <button onClick={handleDelete}>delete</button>
        </div>
    </div>
  )
}

export default ExpenseItem