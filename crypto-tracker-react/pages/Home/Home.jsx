import Footer from "../../components/Footer/Footer";
import { React, useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../context/Context";
export default function Home() {
  const { allCoinsData, currency } = useContext(CoinContext);
  const [coinsDisplay, setcoinsDisplay] = useState([]);
  const [coin, setCoin] = useState("");

  useEffect(() => {
    setcoinsDisplay(allCoinsData);
  }, [allCoinsData]);

  const handleInput = (e) => {
    setCoin(e.target.value);
    if (e.target.value === "") {
      setcoinsDisplay(allCoinsData);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoinsData.filter((items) => {
      return items.name.toLowerCase().includes(coin.toLowerCase());
    });
    setcoinsDisplay(coins);
  };
  return (
    <>
      <div className="Home">
        <div className="hero">
          <h1 id="mainHeading">
            {" "}
            Largest <br />
            Crypto Marketplace
          </h1>
          <p id="description">
            Welcome to the world's largest cryptocurrency marketplace. Sign up
            to explore more about cryptos.
          </p>

          <form onSubmit={searchHandler}>
            <input
              onChange={handleInput}
              list="coinlist"
              type="text"
              placeholder="Search Crypto.."
              required
            />

            <datalist id="coinlist">
              {allCoinsData.map((item, index) => (
                <option key={index} value={item.name} />
              ))}
            </datalist>

            <button type="submit" id="submit-button">
              Search
            </button>
          </form>
        </div>

        <div className="crypto-table">
          <div className="table-layout">
              
            <div>
              <p>#</p>
            </div>

            <div>
              <p id="coinName">Coins</p>
            </div>

            <div>
              <p>Price</p>
            </div>

            <div>
              <p>24H Change</p>
            </div>

            <div id="hrs-change">
              <p id="market">Market Cap</p>
            </div>

          </div>
          {coinsDisplay.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>

              <div>
                <p>{item.market_cap_rank}</p>
              </div>

              <div className="coin-name">
                <img src={item.image} alt="coin image" />
                {item.name} - {item.symbol}
              </div>

              <div>
                <p>
                  {currency.symbol}&nbsp;&nbsp;
                  {item.current_price.toLocaleString()}
                </p>
              </div>

              <div>
                <p id="change24" style={{color:item.price_change_percentage_24h > 0 ? "#00d515" : "#ff4646",}}>
                  {Math.floor(item.price_change_percentage_24h * 100) / 100}
                </p>
              </div>

              <div id="hrs-change">
                <p id="market">
                  {currency.symbol}&nbsp;&nbsp;
                  {item.market_cap.toLocaleString()}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
