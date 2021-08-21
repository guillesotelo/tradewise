import React from "react";
import { Link } from "react-router-dom";
import ApexChart from './Chart1'

export default function SignalCard({signal}) {

  return (
    <div className="main-signal-container">
        <div className='graphs'>
            <ApexChart instrument={signal.instrument}/>
        </div>
        <div className='signal-data'>
            <h4>Signal type: {signal.type}</h4>
            <h4>Probability: {signal.probability}</h4>
            <h4>Name: {signal.name}</h4>
            <h4>Instrument: {signal.instrument}</h4>
            <h4>Timeframe: {signal.timeframe}</h4>
            <h4>Current Time (America/New York): {signal.tipe}</h4>
            <h4>Current price: {signal.price}</h4>
            <br/>
            <h4>Optimal maximum holding period: {signal.holding}</h4>
            <h4>Optimal Stop Loss: {signal.stoploss}</h4>
            <h4>Optimal Take Profit: {signal.takeprofit}</h4>

        </div>

        <div className='signal-btns'>
            <Link to={{ pathname: signal.pathname }} target="_blank">
                <button className='signal-btn'>Statical Odds</button>
            </Link>
            <Link to={{ pathname: signal.etoro }} target="_blank">
                <button className='signal-btn'>Trade on eToro</button>
            </Link>
        </div>
    </div>
  );
}
