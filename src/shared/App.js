import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Header from "../components/Header";
import Messenger from "../pages/Messenger";
import { Flex } from "../elements";

// styles

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Permit from "./Permit";
import { getToken } from "./localStorage";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";
const socket = socketIOClient(ENDPOINT);

function App() {
  // 로그인 항시 체크
  const dispatch = useDispatch();
  const [response, setResponse] = React.useState("");
  const ref = React.useRef("");

  const sendMessage = () => {
    console.log("Send: ", ref.current.value);
    socket.emit("chat", "아이디1", ref.current.value);
  };

  React.useEffect(() => {
    if (getToken()) {
      dispatch(userActions.loginCheckDB());
    }
    socket.on("아이디2", message => {
      console.log("수신")
      setResponse(message);
    });
    return () => socket.disconnect();
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
        <p>It's {response}</p>
        <input ref={ref}></input>
        <button onClick={sendMessage}>send</button>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
