import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Image, Text, Flex, Button, InputLogin } from "../elements";

const Login = props => {
  const idRef = React.useRef(null);
  const pwdRef = React.useRef(null);
  const [btnState, setBtnState] = React.useState(false);

  const isBtn = () => {
    if (idRef.current.value && pwdRef.current.value.length > 5) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  };

  const clickLogin = () => {
    console.log("로그인요청 해야함무라비")
    
  }

  return (
    <>
      <Image
        shape="rectangle"
        width="175px"
        height="51px"
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
        margin="26px 0 32px"
      ></Image>
      <InputLogin
        margin="0 0 8px"
        fontWeight="200"
        label="아이디"
        ref={idRef}
        _onChange={isBtn}
      ></InputLogin>
      <InputLogin
        margin="0 0 8px"
        fontWeight="200"
        type="password"
        label="비밀번호"
        ref={pwdRef}
        _onChange={isBtn}
      ></InputLogin>
      <Button
        margin="6px 0 8px"
        width="270px"
        height="30px"
        _disabled={btnState ? false : true}
        _onClick={clickLogin}
      >
        로그인
      </Button>
      <Flex margin="10px 0 18px">
        <Flex bg="#dbdbdb" width="103px" height="1px"></Flex>
        <Text fontWeight="600" color="#8e8e8e" fontSize="13px" margin="0 18px">
          또는
        </Text>
        <Flex bg="#dbdbdb" width="103px" height="1px"></Flex>
      </Flex>
      <Button margin="" bg="transparent" height="40px">
        <Flex gap="8px">
          <AiFillFacebook color="#385185" size={21} />
          <Text fontSize="14px" fontWeight="600" color="#385185">
            Facebook으로 로그인
          </Text>
        </Flex>
      </Button>
      <Button margin="12px 0 0" bg="transparent">
        <Text fontSize="12px" color="#00376b" fontWeight="400">
          비밀번호를 잊으셨나요?
        </Text>
      </Button>
    </>
  );
};

export default Login;
