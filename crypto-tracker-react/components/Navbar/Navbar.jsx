import { useContext } from "react";
import { CoinContext } from "../../pages/context/Context";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import "./Navbar.css";

export default function Navbar() {
const {setCurrency} = useContext(CoinContext);

 const currencySet = (e) =>{
       switch(e.target.value){
          case "usd":{
               setCurrency({name:"usd",symbol:"$"})
          break;
         } 
          case "eur":{
                setCurrency({name:"eur",symbol:"€"})
          break;
         }
          case "inr":{
               setCurrency({name:"inr", symbol:"₹"})
          break;
         }
         default:{
            setCurrency({name:"usd",symbol:"$"})
            break;
         }
     }
  }

  return(
    <>
       <nav>
          
          <div className="logo">
               <img src={logo} alt="logo"/>
          </div>
          
          <div className="items">
               <ul>
                   <li>Home</li>
                   <li>Features</li>
                   <li>Pricing</li>
                   <li>Blog</li>
               </ul>
          </div>

          <div className="right-items">
               <select onChange={currencySet}>
                   <option value="usd">USD</option>
                   <option value="inr">INR</option>
                   <option value="eur">EUR</option>
               </select>
               <button id="sign-up">Sign up <img src={arrow} id="arrow" alt="" /></button>
          </div>

       </nav>
    </>
  );
}
