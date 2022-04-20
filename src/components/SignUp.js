import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Image, Text, Flex, Button, InputLogin } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { postAPI } from "../shared/api";

const SignUp = (props) => {
  const {goLoginPage} = props;
  const dispatch = useDispatch();

  const idRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const pwdRef = React.useRef(null);
  const pwdCheckRef = React.useRef(null);
  const [btnState, setBtnState] = React.useState(false);

  const isBtn = () => {
    if (
      idRef.current.value &&
      nameRef.current.value &&
      pwdRef.current.value &&
      pwdCheckRef.current.value.length > 5
    ) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  };

  const clickSignUp = () => {
    console.log("회원가입 요청해야함무라비");
    let userId = idRef.current.value;
    let userName = nameRef.current.value;
    let password = pwdRef.current.value;
    let passwordCheck = pwdCheckRef.current.value;

    
    if (password !== passwordCheck) {
      window.alert("비밀번호가 다릅니다.");
      return;
    }
    let data = { userId, userName, password, passwordCheck };
    dispatch(userActions.singupDB(data));
    goLoginPage();
  };

  const handleIdCheck = () => {
    // 아이디 중복 확인시, 틀린 값이거나, 중복된 값이면 403에러 그런데 res는 undefined로 옴
    let userId = idRef.current.value;
    if(!userId.length){
      return;
    } 
    if(userId.length < 4) {
      alert("아이디는 4자리 이상입니다.");
      return;
    }
    postAPI('/api/idCheck', {userId}).then(res => {
      if(res) {
        alert("사용 가능한 아이디입니다.");
      }else {
        alert("사용 불가능한 아이디입니다.");
      }
    })
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

      <Text
        textAlign="center"
        fontSize="17px"
        fontWeight="600"
        margin="0 40px 10px"
      >
        친구들의 사진과 동영상을 보려면 가입하세요.
      </Text>

      <Button height="32px" width="270px" margin="10px 0">
        <Flex gap="8px">
          <AiFillFacebook color="#fff" size={21} />
          <Text fontSize="14px" fontWeight="600" color="#fff">
            Facebook으로 로그인
          </Text>
        </Flex>
      </Button>

      <Flex margin="10px 0 18px">
        <Flex bg="#dbdbdb" width="103px" height="1px"></Flex>
        <Text fontWeight="600" color="#8e8e8e" fontSize="13px" margin="0 18px">
          또는
        </Text>
        <Flex bg="#dbdbdb" width="103px" height="1px"></Flex>
      </Flex>

      <InputLogin
        margin="0 0 8px"
        fontWeight="200"
        label="아이디"
        ref={idRef}
        _onChange={isBtn}
        _onBlur={handleIdCheck}
      ></InputLogin>
      <InputLogin
        margin="0 0 8px"
        fontWeight="200"
        label="사용자 이름"
        ref={nameRef}
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
      <InputLogin
        margin="0 0 8px"
        fontWeight="200"
        type="password"
        label="비밀번호확인"
        ref={pwdCheckRef}
        _onChange={isBtn}
      ></InputLogin>
      <Button
        margin="6px 0 8px"
        width="270px"
        height="30px"
        _disabled={btnState ? false : true}
        _onClick={clickSignUp}
      >
        가입
      </Button>
    </>
  );
};

export default SignUp;
