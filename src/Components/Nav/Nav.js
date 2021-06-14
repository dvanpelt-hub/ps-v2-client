import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="links-container">
      <Link className="landing-link" to="/">
        Home
      </Link>
      <Link className="post-link" to="/CreatePost">
        Post
      </Link>
      <Link className="stocksPosts-link" to="/StocksPosts">
        Stocks
      </Link>
    </div>
  );
};

export default Nav;
