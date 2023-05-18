import React from 'react'
import removeImage from './Images/remove.png'

export default function HistoryList({ history, handleDelete }) {
  let style = {border: "1px red solid"}
  history.type === "income" ? style = {border: "1px green solid"} : style =  {border: "1px red solid"}

  return (
    <div className="historyListContainer">
      <div className="historyList">
          <div className="historyName">{history.name}</div>
          <div className="historyAmount">{parseInt(history.amount)}</div>
          <div className="historyBar" style={style}></div>
      </div>
      <img src={removeImage} alt="Remove Icon" className="deleteBtn" onClick = {() => handleDelete(history.id)}/>
    </div>
  )


}
