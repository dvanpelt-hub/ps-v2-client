import React from "react";
import { useParams } from "react-router-dom";

const StockDetail = () => {
  let { ticker_symbol } = useParams();
  return (
    <>
      <h2>{ticker_symbol}</h2>
    </>
  );
};

export default StockDetail;
