import {React,createContext, useState,useEffect} from 'react'


export const CoinContext = createContext();

function CoinContextProvider(props) { 
const [allCoinsData,setCoinData] = useState([]);
// console.log(allCoinsData);
const fetchAllCoins = async() =>{
const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-wnRaK6w78YDVMqTx1yrhTeeM'}};

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
  .then(res => res.json())
  .then(res => setCoinData(res))
  .catch(err => console.error(err));
}
useEffect(()=>{
    fetchAllCoins();  
},[])
const ContextValue = {
    allCoinsData
}  
    return(
        <CoinContext.Provider value={ContextValue}>
             {props.children}
         </CoinContext.Provider>
  )
}
export default CoinContextProvider;