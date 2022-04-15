import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import Home from "../pages/Home"
import Main from "../pages/Main"
import {Image, Text} from "../elements"

function App() {


  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {/*header*/}
        <Image size={200} shape="circle"></Image>
        <Text>아이유 너무 이뻐요</Text>
        <Route path="/" exact component={Main}></Route>
        <Route path="/home" exact component={Home}></Route>
      </ConnectedRouter>
    </div>
  );
}

export default App;
