import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Header from "../components/Header";
import PostDetails from "../pages/PostDetails";
import Messenger from "../pages/Messenger";
import ModalFrame from "../components/modal/ModalFrame";
import { Image, Text, Flex } from "../elements";

// styles
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Permit from "./Permit";

function App() {
  // 로그인 항시 체크
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);
  
  return (
    <Flex className="App" height="100vh" fd="column" jc="start" bg="#fafafa">
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home}></Route>

        <Permit>
          <Header />
          <Route path="/main" exact component={Main}></Route>
          <Route path="/messenger" exact component={Messenger}></Route>
        </Permit>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
