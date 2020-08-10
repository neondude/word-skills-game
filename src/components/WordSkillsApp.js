import React from 'react'
import Header from '../components/Header'
import MainGame from '../components/MainGame'
import ResultPage from '../components/ResultPage'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const WordSkillsApp = () => {

  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" component={MainGame} exact={true} />
      {/* <Route path="/game" component={WordSkillsApp} /> */}
      <Route path="/result" component={ResultPage} />
    </Switch>
  </BrowserRouter>
    </>
  )
}

export { WordSkillsApp as default }