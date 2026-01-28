import {React,useContext, useEffect, useState }  from 'react'
import './Home.css'
import { CoinContext } from '../context/Context';

export default function Home() {
const {allCoinsData} = useContext(CoinContext);
console.log(allCoinsData)
const [coinsDisplay,setcoinsDisplay] = useState([]);
useEffect(()=>{
     setcoinsDisplay(allCoinsData);
},[allCoinsData])
//  coinsDisplay.slice(0,10).map((item,index)=>{
//   console.log(item.market_cap_rank);
// });
 
  return (
    <>
    <div className='home'>
         <div className='hero'>
           <h1 id='mainHeading'> Largest <br/>Crypto Marketplace</h1>
            <p id='description'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
            <form>
             <input type="text" placeholder='Search Crypto..'/>
             <button type="submit" id="submit-button">Search</button>  
            </form>   
         </div>
    </div>
     <div className='crypto-table'>
          <div className='table-layout'>
                  <div><p>#</p></div>
                  <div><p>Coins</p></div>
                  <div><p>Price</p></div>
                  <div><p>24H Change</p></div>
                  <div><p id="market">Market Cap</p></div>
           </div>
             {
               coinsDisplay.slice(0,10).map((item,index)=>(
                  <div className="table-layout" key={index}>
                    <div><p>{item.market_cap_rank}</p></div>
                    <div className='coin-name'><img src={item.image} alt="" />{item.name} - {item.symbol}</div>
                    <div><p>$ {item.current_price.toLocaleString()}</p></div>
                    <div><p>{Math.floor(item.price_change_percentage_24h*100)/100}</p></div>
                    <div><p id="market">$ {item.market_cap.toLocaleString()}</p></div>
                  </div>
            ))
          }
     </div>
     
  </>
  )
}
