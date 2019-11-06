import React, { useState } from 'react';
import DollarChart from '../../conponents/DollarChart'

import './Home.css';

export default function Home() {

  return (
    <>   
      <div className="home">   
        <div className="hello">     
          <h1>Boa Noite, Bruno</h1>
          <h2>Seu saldo é de R$ 0,00</h2>
          <DollarChart  />
        </div>     
      </div>
    </>
  );
}
