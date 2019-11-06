import React, { useState } from 'react';
import LeftSideMenu from '../../conponents/LeftSideMenu'
import UserDetails from '../../conponents/UserDetails'
import NeonLogo from '../../conponents/NeonLogo'
import DollarChart from '../../conponents/DollarChart'

import './Transfer.css';

import customerLogo from '../../assets/img/customer-logo.jpg'

export default function Transfer() {
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
          <h1>Transferir</h1>
        </div>     
      </div>
    </>
  );
}
