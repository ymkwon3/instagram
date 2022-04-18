import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Header from "../components/Header";
import PostDetails from "../pages/PostDetails";
import { Image, Text, Flex } from "../elements";

// styles
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  // 로그인 항시 체크
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <Flex className="App" height="100vh" fd="column" jc="start" bg="#fafafa">
      <ConnectedRouter history={history}>
        <Header />
        {/* <Image size={200} shape="circle"></Image>
        <Text>아이유 너무 이뻐요</Text>z */}

        <Route path="/" exact component={Main}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/detail" exact component={PostDetails}></Route>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
