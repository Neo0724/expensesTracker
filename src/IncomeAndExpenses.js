import React from 'react'

export default function IncomeAndExpenses({ incomeAndExpenses }) {
  let expenses = incomeAndExpenses.expenses.toString()
  if (expenses.length >= 2) {
    expenses = expenses.substring(1, expenses.length)
  }

  return (
    <div className="incomeAndExpenses">
        <div className="income">
            Income
            <div className="incomeNumber">$ {incomeAndExpenses.income}</div>
        </div>
        <div className="verticalBorder"></div>
        <div className="expenses">
            Expenses
            <div className="expensesNumber">$ {expenses}</div>
        </div>
    </div>
  )
}
