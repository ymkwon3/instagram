import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import Home from "../pages/Home"
import Main from "../pages/Main"
import {Flex} from "../elements"

function App() {


  return (
    <Flex className="App" height="100vh" fd="column" bg="#fafafa">
      <ConnectedRouter history={history}>
        {/*header*/}
        <Route path="/main" exact component={Main}></Route>
        <Route path="/" exact component={Home}></Route>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
