import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './LeftSideMenu.css'

import iconExtrato from '../../assets/icon-area-extrato.svg'
import iconTransferencias from '../../assets/icon-area-transferencias.svg'
import iconPagamentos from '../../assets/icon-area-pagamentos.svg'
import iconBoletos from '../../assets/icon-area-boletos.svg'
import iconCartoes from '../../assets/icon-area-cartoes.svg'
import iconIndisponivel from '../../assets/icon-area-indisponivel.svg'
import { from } from 'rxjs'


export default function LeftSideMenu({teste}) {  
  const [ opened, setOpened ] = useState(false)

  return (
    <div className="leftSideMenu" onMouseOver={() => teste(true)} onMouseLeave={() => teste(false)}>      
      <ul className="menuItens">
        <Link to='/accountStatement'>
          <li>
            <span>extrato</span>
            <img src={iconExtrato} alt="icon extrato"/>
          </li>
        </Link>
        <Link to='/deposit'>
          <li>
            <span>depósitar</span>
            <img src={iconPagamentos} alt="icon pagamentos"/>
          </li>
        </Link>
        <Link to='/buy'>
          <li>
            <span>comprar</span>
            <img src={iconBoletos} alt="icon boletos"/>
          </li>
        </Link>
        <Link to='/transfer'>
          <li>
            <span>transferir</span>
            <img src={iconTransferencias} alt="icon transferencia"/>
          </li>
        </Link>
        <Link to='/sell'>
          <li>
            <span>vender</span>
            <img src={iconCartoes} alt="icon cartoes"/>
          </li>   
        </Link>
      </ul>
    </div>
  )
}