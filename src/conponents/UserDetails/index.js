import React from 'react'

import customerLogo from '../../assets/img/customer-logo.jpg'
import './UserDetails.css'

export default function UserDetails({visible}) {
  const classList =  `userDetails ${visible ? 'show': '' }` 
  
  function handleLogout () {
    if(window.confirm('Deseja realmente sair?')) return true
  }

  return (
    <div id="teste" className={classList}>
      <header>
        <img src={customerLogo} alt=""/>
        <h3>Bruno Henrique Nunes de Campos</h3>
        <span>Bruno Henrique Nunes de Campos</span>
        <hr/>
        <div className="accountInfo">
          <span>Banco Nº 655</span> <br />
          <span>Agência 0655 &nbsp;&nbsp;&nbsp;&nbsp; Conta 2956378-0</span>
        </div>        
      </header>
      <ul>
        <li><a href="/company">Empresa</a></li>
        <li><a href="/security">Login e Segurança</a></li>
        <li><a href="/users">Usuários</a></li>
        <li><a href="/dailyLimits">Limite Diários</a></li>
        <li><a className="logout" onClick={handleLogout}>Sair</a></li>
      </ul>
    </div>
  )
}