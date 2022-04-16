import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Header from "../components/Header";
import PostDetails from "../pages/PostDetails";
import { Image, Text } from "../elements";

// styles
import styled from "styled-components";

function App() {
  return (
    <Flex className="App" height="100vh" fd="column" bg="#fafafa">
      <ConnectedRouter history={history}>
        <Container>
          <Header />
          {/* <Image size={200} shape="circle"></Image>
        <Text>아이유 너무 이뻐요</Text>z */}
          <Route path="/" exact component={Main}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/detail" exact component={PostDetails}></Route>
        </Container>
      </ConnectedRouter>
    </Flex>
  );
}

const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export default App;
