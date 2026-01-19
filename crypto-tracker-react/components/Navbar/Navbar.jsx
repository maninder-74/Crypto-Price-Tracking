import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import "./Navbar.css";
export default function Navbar() {
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
               <select>
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
