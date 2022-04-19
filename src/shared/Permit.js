import React from "react";
import { useSelector } from "react-redux";
import { getToken } from "./localStorage";

const Permit = props => {
  const { children } = props;
  const isLogin = useSelector(state => state.user.is_login);

  if (getToken && isLogin) {
    return <>{children}</>;
  }
  return <></>;
};

export default Permit;
