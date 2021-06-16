import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreatePost.css";
const URL = process.env.REACT_APP_DB_URL;

const CreatePost = () => {
  const [ticker_symbol, setTickerSymbol] = useState("");
  const [investment_status, setInvestmentStatus] = useState("Select");
  const [valuation, setValuation] = useState("Select");
  const [subject_line, setSubjectLine] = useState("");
  const [post, setUserPost] = useState("");
  const [purchase_price, setPurchasePrice] = useState([0]);
  const [username, setUsername] = useState("Test Person");
  const [posted_date, setPostedDate] = useState(2020);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const url = `${URL}`;
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ticker_symbol: ticker_symbol,
            investment_status: investment_status,
            valuation: valuation,
            subject_line: subject_line,
            post: post,
            purchase_price: purchase_price,
            username: username,
            posted_date: posted_date,
          }),
        };
        await fetch(url, options)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseJson) => {
            alert("Thank you for posting!");
            history.push("/StocksPosts");
            return responseJson;
          });
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };

  return (
    <div className="postsContainer">
      <h2 className="createTitle">Create Post</h2>
      <form action="submit">
        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              className="inputTickerSymbol"
              placeholder="Ticker Symbol"
              value={ticker_symbol}
              onChange={(e) => setTickerSymbol(e.target.value)}
            />
          </div>
          <div className="form-column">
            <select
              className="investmentStatus"
              value={investment_status}
              onChange={(e) => setInvestmentStatus(e.target.value)}
            >
              <option>Select</option>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
              <option value="Hold">Hold</option>
            </select>
          </div>
          <div className="form-column">
            <select
              className="valuation"
              value={valuation}
              onChange={(e) => setValuation(e.target.value)}
            >
              <option>Select</option>
              <option value="Overvalued">Overvalued</option>
              <option value="Undervalued">Undervalued</option>
              <option value="Accurate">Accurate</option>
            </select>
          </div>
          <div className="form-column">
            <input
              type="text"
              className="subjectLine"
              placeholder="Subject Line"
              value={subject_line}
              onChange={(e) => setSubjectLine(e.target.value)}
            />
          </div>
          <div className="form-column">
            <textarea
              name="comment"
              className="userPost"
              placeholder="Enter your post here..."
              value={post}
              onChange={(e) => setUserPost(e.target.value)}
            />
          </div>
          <div className="form-column">
            <input
              type="number"
              className="inputPrice"
              placeholder="Purchase Price"
              value={purchase_price}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </div>
          <div className="form-column">
            <input
              type="text"
              className="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-column">
            <input
              type="number"
              className="postedDate"
              placeholder="Date"
              value={posted_date}
              onChange={(e) => setPostedDate(e.target.value)}
            />
          </div>
        </div>
        <div className="postButtonContainer">
          <p onClick={handleSubmit} className="postBtn">
            Post!
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
