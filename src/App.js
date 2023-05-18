import React from 'react'
import { useState, useEffect } from 'react'
import Title from './Title';
import IncomeAndExpenses from './IncomeAndExpenses';
import History from './History';
import AddNewTransaction from './AddNewTransaction';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  let [balance, setBalance] = useState(50);
  let [history, setHistory] = useState(() => {
    let localHistory = localStorage.getItem("myHistory")
    if (localHistory !== null) return JSON.parse(localHistory)
    return []
  });
  let [newTransaction, setNewTransaction] = useState({name: "", amount: "", type: "", id: ""})
  let [getIncomeAndExpenses, setIncomeAndExpenses] = useState({income: "", expenses: ""})
  
  useEffect(() => {
    let newHistory = JSON.stringify(history)
    localStorage.setItem("myHistory", newHistory)
  }, [history])
  
  let handleTextChange = (text, uniqueID) => {
    setNewTransaction((prev) => {
      return({...prev, name: text, id: uniqueID})
    })
  }

  let handleAmountChange = (number) => {
    setNewTransaction((prev) => {
      let type = ""
      if (number.includes("+")) {
        type = "income"
      } else {
        type = "expenses"
      }

      return ({
        ...prev,
        amount: number,
        type: type
      })
    })
  }

  let handleNewTransaction = () => {
    if (newTransaction.name === "" || newTransaction.amount === "") {
      return
    }
    if (!Number.isInteger(parseInt(newTransaction.amount))) {
      return
    }
    if (newTransaction.amount.indexOf("+") !== 0 && newTransaction.amount.indexOf("-") !== 0) {
      return
    }

    setHistory((prev) => {
      return ([
        ...prev,
        newTransaction
      ])
    })

    setNewTransaction(() => {
      return ({name: "", amount: "", type: "", key: ""})
    })

  }

  useEffect(() => {
    let totalIncome = 0;
    for (let i = 0; i < history.length; i++) {
      if (history[i].type === "income") {
        totalIncome += parseInt(history[i].amount)
      }
    }
    let totalExpenses = 0;
    for (let i = 0; i < history.length; i++) {
      if (history[i].type === "expenses") {
        totalExpenses += parseInt(history[i].amount)
      }
    }
    setIncomeAndExpenses((prev) => {
      return({
        income: totalIncome,
        expenses: totalExpenses
      })
    })
    
  }, [history])

  useEffect(() => {
    setBalance(() => {
      return getIncomeAndExpenses.income + getIncomeAndExpenses.expenses
    })
  }, [getIncomeAndExpenses])
  
  let randomID = crypto.randomUUID()

  let handleDelete = (id) => {
    let newHistory = history.filter(item => item.id !== id)
    setHistory(() => {return newHistory})
  }

  return (
    <div className="container">
      <Title balance = {balance}/>
      <IncomeAndExpenses incomeAndExpenses = {getIncomeAndExpenses}/>
      <History history = {history} handleDelete = {handleDelete}/>
      <AddNewTransaction handleTextChange = {handleTextChange} handleAmountChange = {handleAmountChange} handleNewTransaction = {handleNewTransaction} newTransaction = {newTransaction} id = {randomID}/>
    </div>
  )
}

