import React from 'react';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' }
  ];

  return (
    <div className="App">
      <div className="outer-div">
        <div className="offer-text">
          <img src="money.png" className="money-icon" />
          <text style={{color: '#6d747d', fontWeight: 'bold'}} >Upto 5% Cashback</text>
          <img src="information.png" className="info-icon" />
        </div>
        <div className="divider"></div>
        <div className="price-container">
          <div className="price-text" >
            <text className="from-style" >from </text><br/>
            <text className="price-style" >€ 139</text>
          </div>
          <Select className="select-element" style={{borderRadius: '0px'}} options={options} value={'select a date'} placeholder="Select a date">
          </Select>
          <Button value="CHECK AVAILABILITY" className="button-check" size="lg" >CHECK AVAILABILITY</Button>
        </div>
        <div className="ticket-parent">
          <div className="cut-left" >
          </div>
          <div className='dotted-spaced'>.</div>
          <div className="cut-right">
          </div>
        </div>
        <div className="footer">
          <img src="logo192.png" className="icon100"/>
          <text className="footer-style" >BEST PRICE GUARANTEED</text>
        </div>
      </div>
    </div>
  );
}

export default App;
