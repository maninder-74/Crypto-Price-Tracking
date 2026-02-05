import {React,createContext, useState,useEffect} from 'react'


export const CoinContext = createContext();

function CoinContextProvider(props) { 
const [allCoinsData,setCoinData] = useState([]);
const [currency,setCurrency] = useState({
    name:"usd",
    symbol:"$"  
})

const fetchAllCoins = async() => {

const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-wnRaK6w78YDVMqTx1yrhTeeM'}};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
  .then(res => res.json())
  .then(res => setCoinData(res))
  .catch(err => console.error(err));
}
useEffect(()=>{
    fetchAllCoins();  
},[currency])

const ContextValue = {
    allCoinsData,currency,setCurrency
}  
    return(
        <CoinContext.Provider value={ContextValue}>
             {props.children}
         </CoinContext.Provider>
  )
}
export default CoinContextProvider;