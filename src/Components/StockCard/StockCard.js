import React from "react";
import { Link } from "react-router-dom";
import "./StockCard.css";

const StockCard = (props) => {
  if (props.invest === "Sell") {
    return (
      <Link className="selectedStock" to={`/stocks/${props.ticker}`}>
        <div className="card-container">
          <div className="upper-card">
            <h2 className="card-ticker">{props.ticker}</h2>
            <div className="card-icon">
              <i className="gg-arrow-bottom-right"></i>
            </div>
          </div>
          <div className="status">
            <h2>{props.invest}</h2>
            <h2>{props.valuation}</h2>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link className="selectedStock" to={`/stocks/${props.ticker}`}>
        <div className="card-container">
          <div className="upper-card">
            <h2 className="card-ticker">{props.ticker}</h2>
            <div className="card-icon">
              <i className="gg-arrow-top-right"></i>
            </div>
          </div>
          <div className="status">
            <h2>{props.invest}</h2>
            <h2>{props.valuation}</h2>
          </div>
        </div>
      </Link>
    );
  }
};

export default StockCard;
