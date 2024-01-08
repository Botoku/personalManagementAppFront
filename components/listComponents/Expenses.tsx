import React from 'react'
import ExpensesUploadFrom from './ExpensesUploadFrom'
import ExpensesList from './ExpensesList'

type Props = {}

const Expenses = (props: Props) => {
  return (
    <div>
        <ExpensesUploadFrom />
        <ExpensesList/>
    </div>
  )
}

export default Expenses