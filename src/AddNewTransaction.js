import React from 'react'

export default function AddNewTransaction({ handleTextChange, handleAmountChange, handleNewTransaction, newTransaction, id}) {
  return (
    <div className="addNewTransactionContainer">
        <span>Add New Transaction</span>
        <div className="horizontalLine"></div>
        <div className="newTransactionContainer">
            <span>Text</span>
            <input className = "newTransactionTextBox" type="text" placeholder='Enter text...' onChange = {(e) => handleTextChange(e.target.value, id)} value={newTransaction.name}></input>
            <span>Amount</span>
            <span className='small'>[+ for income, - for expenses]</span>
            <input className = "newTransactionTextBox" type="text" placeholder='Enter amount...' onChange = {(e) => handleAmountChange(e.target.value)} value={newTransaction.amount}></input>
            <button className="addButton" onClick = {handleNewTransaction}>ADD TRANSACTION</button>
        </div>
    </div>

  )
}
