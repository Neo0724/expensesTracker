import React from 'react'

export default function Title({balance}) {
  return (
    <div>
        <h1 className="title">Expense Tracker</h1>
        <div className="balanceContainer">
            <div className="balanceName">Your Balance:</div>
            <div className="balanceNumber">$ {balance}</div>
        </div>
    </div>
  )
}
