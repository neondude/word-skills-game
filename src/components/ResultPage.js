import React from 'react'
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom'

const ResultPage = () => {
  let history = useHistory()
  console.log(history)
  return (
    <div>
      <h1>Words not found</h1>
      <ul>
        {history.location.state.value.map((word, index)=>{
          return <li key={index}>{word}</li>
        })}

      </ul>
    </div>
  )
}

export { ResultPage as default}