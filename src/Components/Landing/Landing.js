import React from "react";
import stockMarketImage from "../../images/stockMarketImage.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="header">
      <h1>Pocket Stocks</h1>
      <h2 className="quick-slogan">
        Stock predictions in the palm of your hand
      </h2>
      <div className="container">
        <img src={stockMarketImage} alt="Bear versus Bull in stock market" />
        <img src={stockMarketImage} alt="Bear versus Bull in stock market" />
        <img src={stockMarketImage} alt="Bear versus Bull in stock market" />
        <img src={stockMarketImage} alt="Bear versus Bull in stock market" />
      </div>
      <div className="slogan">
        <p>
          Everyone wants to say "I told you so". Say it with your stock market
          predictions!
        </p>
      </div>
      <div className="instruction">
        <p>
          To use this app, simply navigate to the 'Holdings' page, enter the
          required information:
        </p>
      </div>
      <ul>
        <li>Ticker Symbol</li>
        <li>Purchase Price</li>
        <li>Recommendation Status</li>
        <li>Your Post!</li>
      </ul>

      <p>
        Your post will be added to our database where other users can read your
        post along with all others.
      </p>
    </div>
  );
};

export default Landing;
