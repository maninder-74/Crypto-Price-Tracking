import {React, useState,useContext, use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../context/Context';
import './Coin.css'
import Footer from '../../components/Footer/Footer'
import LineChart from '../../components/LineChart/LineChart';
export default function Coin() {
  const {coinId} = useParams();
  const {currency} = useContext(CoinContext);
  const [coinData,setcoinData] = useState();
  const [pastData,setpastData] = useState();
  console.log(coinId);
  // console.log(coinData);
//  console.log(setpastData);
const getTenDaysBackDate = new Date(Date.now() - 864000000).toLocaleDateString('en-GB').split('/').join('-');
console.log(pastData);
  const fetchData = async() => {
      
      const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-wnRaK6w78YDVMqTx1yrhTeeM'}};
      
      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res =>setcoinData(res))
      .catch(err => console.error(err));
  
}

  const fetchHistoricData = async()=>{

      const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-wnRaK6w78YDVMqTx1yrhTeeM'}};

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setpastData(res))
      .catch(err => console.error(err));
  }
 
  useEffect(()=>{
      fetchData();
      fetchHistoricData();
  },[coinId])

  if(coinData&&pastData){
 
 return (
    <div className='coin'>
       <div className='coin-name'>
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name}{`(${coinData.symbol.toUpperCase()})`}</b></p>
       </div>
       <div className="coin-chart">
         <LineChart pastData={pastData}/>
       </div>
       <div className='coin-info'>
            <ul>
              <li>Crypto Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            
            <ul> 
              <li>Current Price</li>
              <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>
            
            <ul>
              <li>Market Cap</li>
              <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>
            
            <ul>
              <li>24 Hour high</li>
              <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>
            <ul>
              <li>24 Hour low</li>
              <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
            </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
   ) 
  }
  else{
   return(
       <div className='spinner'>
           <div className='spin'></div>
       </div>
   )
  }
}
