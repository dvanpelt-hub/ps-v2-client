import React, { useState, useEffect } from "react";
import StockCard from "../StockCard/StockCard";
import "./StocksPosts.css";

let URL = process.env.REACT_APP_DB_URL;

// NEED TO CREATE A FUNCTION TO CALLBACK TO APP.JS TO SET TICKER SYMBOL, THEN PASS DOWN AS PROPS TO OTHER COMPONENT. THIS WILL ALLOW FOR STOCK DETAILS COMPONENT TO USE TICKER_SYMBOL INFO. //

const StocksPosts = () => {
  const [stocks, setStocks] = useState(["Loading"]);
  // const [stocksCount, setStocksCount] = useState(1);
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const url = URL;
        await fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseJson) => {
            setStocks(responseJson);
          });
      } catch (error) {
        console.log("Error ", error);
      }
    };
    fetchStocks();
  }, [setStocks]);

  // Need to keep a separate count in database for stocks that gets updated each time a new post is made //

  return (
    <div>
      <div className="stocks-table">
        <h1>Stock Talk</h1>
        <div>
          {stocks.map((stock) => (
            <StockCard
              key={stock.id}
              invest={stock.investment_status}
              valuation={stock.valuation}
              ticker={stock.ticker_symbol}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StocksPosts;
