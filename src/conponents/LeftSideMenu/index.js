import React, { useState } from 'react'

import './LeftSideMenu.css'

import iconExtrato from '../../assets/icon-area-extrato.svg'
import iconTransferencias from '../../assets/icon-area-transferencias.svg'
import iconPagamentos from '../../assets/icon-area-pagamentos.svg'
import iconBoletos from '../../assets/icon-area-boletos.svg'
import iconCartoes from '../../assets/icon-area-cartoes.svg'
import iconIndisponivel from '../../assets/icon-area-indisponivel.svg'


export default function LeftSideMenu({teste}) {  
  const [ opened, setOpened ] = useState(false)

  return (
    <div className="leftSideMenu" onMouseOver={() => teste(true)} onMouseLeave={() => teste(false)}>      
      <ul className="menuItens">
        <li>
          <span>extrato</span>
          <img src={iconExtrato} alt="icon extrato"/>
        </li>
        <li>
          <span>depósitar</span>
          <img src={iconPagamentos} alt="icon pagamentos"/>
        </li>
        <li>
          <span>comprar</span>
          <img src={iconBoletos} alt="icon boletos"/>
        </li>
        <li>
          <span>transferir</span>
          <img src={iconTransferencias} alt="icon transferencia"/>
        </li>                
        <li>
          <span>vender</span>
          <img src={iconCartoes} alt="icon cartoes"/>
        </li>        
      </ul>
    </div>
  )
}