import React from 'react'
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom'

const ResultPage = () => {
  let history = useHistory()
  console.log(history)
  return (
    <div>
      <h1>Words not found</h1>
      {history.location.state.value}
    </div>
  )
}

export { ResultPage as default}