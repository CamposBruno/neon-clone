import React, { useState } from 'react';
import LeftSideMenu from '../../conponents/LeftSideMenu'
import UserDetails from '../../conponents/UserDetails'
import NeonLogo from '../../conponents/NeonLogo'
import DollarChart from '../../conponents/DollarChart'

import './Home.css';

import customerLogo from '../../assets/img/customer-logo.jpg'

export default function Home() {
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
        <div className="hello">     
          <h1>Boa Noite, Bruno</h1>
          <h2>Seu saldo é de R$ 0,00</h2>
          <DollarChart  />
        </div>     
      </div>
      
    </>
  );
}
