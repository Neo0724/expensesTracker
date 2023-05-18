import React from 'react'
import HistoryList from './HistoryList'

export default function History({ history, handleDelete }) {
  return (
    <div className="history">
        <h3>History</h3>
        <div className="horizontalLine"></div>
        {history.length === 0? <div className="empty">None</div> : null}
        <div className="historyListLargeContainer">
          {history.map((history) => {
              return <HistoryList history = {history} handleDelete = {handleDelete}/>
          })}
        </div>
    </div>
  )
}
