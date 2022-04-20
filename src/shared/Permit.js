import React from "react";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { getToken } from "./localStorage";

const Permit = props => {
  const { children } = props;
  const isLogin = useSelector(state => state.user.is_login);

  React.useEffect(() => {
    if (getToken() && isLogin){
      history.replace("/main");
    }
  }, [isLogin])

  if (getToken() && isLogin) {
    return <>{children}</>;
  }
  return <></>;
};

export default Permit;
