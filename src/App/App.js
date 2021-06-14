import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import StocksPosts from "../Components/StocksPosts/StocksPosts";
import CreatePost from "../Components/CreatePost/CreatePost";
import Nav from "../Components/Nav/Nav";
import StockDetail from "../Components/StockDetail/StockDetail";
import "./App.css";

const App = () => {
  let [ticker] = React.useState("");

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/StocksPosts"
          render={() => {
            return <StocksPosts />;
          }}
        />
        <Route
          exact
          path="/CreatePost"
          render={() => {
            return <CreatePost />;
          }}
        />
        <Route
          exact
          path="/stocks/:id"
          render={() => {
            return <StockDetail ticker={ticker} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
