import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import AccountStatement from './pages/AccountStatement'
import Buy from './pages/Buy'
import Deposit from './pages/Deposit'
import Sell from './pages/Sell'
import Transfer from './pages/Transfer'

import customerLogo from './assets/img/customer-logo.jpg'

import UserDetails from './conponents/UserDetails'
import NeonLogo from './conponents/NeonLogo'
import LeftSideMenu from './conponents/LeftSideMenu'
import DollarChart from './conponents/DollarChart'

export default function Routes() {
  
  const [ detailsVisible, setDetailsVisible ] = useState(false)
  const [ menuVisible, setMenuVisible ] = useState(false)

  function handleDetailsVisible(event) {
    setDetailsVisible(true)   
  }

  function handleDetailsHidden () {
    setTimeout(() => {      
        setDetailsVisible(false)      
    }, 500)    
  }

  function handleVisible(x) {
    setMenuVisible(x)
  }
  return (
    <>
    <BrowserRouter>
      <LeftSideMenu teste={handleVisible} />
      <div className="home">
        <div className="logoWrapper">
          <NeonLogo visible={menuVisible} />
        </div>      
        <div className="buttonArea"  onMouseLeave={handleDetailsHidden} >
          <button onMouseOver={handleDetailsVisible}>
            <img src={customerLogo} alt=""/>
          </button>
          <UserDetails visible={detailsVisible} />
        </div>        
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accountStatement" component={AccountStatement} />
        <Route path="/buy" component={Buy} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/sell" component={Sell} />
        <Route path="/transfer" component={Transfer} />
      </Switch>
      </div>
    </BrowserRouter>
  </>
  )
}