import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import AccountStatement from './pages/AccountStatement'
import Buy from './pages/Buy'
import Deposit from './pages/Deposit'
import Sell from './pages/Sell'
import Transfer from './pages/Transfer'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accountStatement" component={AccountStatement} />
        <Route path="/buy" component={Buy} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/sell" component={Sell} />
        <Route path="/transfer" component={Transfer} />
      </Switch>
    </BrowserRouter>
  )
}