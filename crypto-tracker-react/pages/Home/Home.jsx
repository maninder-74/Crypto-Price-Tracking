import React from 'react'
import './Home.css'
export default function Home() {
  return (
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
  )
}
