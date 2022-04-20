import React from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import { Image, Flex, Text, Button } from "../elements";

const Home = props => {
  const [loginPage, setLoginPage] = React.useState(true);

  const goSignUpPage = () => {
    setLoginPage(false);
  };

  const goLoginPage = () => {
    setLoginPage(true);
  };

  return (
    <>
      <Flex width="1000px" height="100%" gap="32px">
        <Image shape="rectangle" width="380px"></Image>
        <Flex fd="column" width="350px">
          <Flex
            fd="column"
            border="1px solid #dbdbdb"
            bg="#fff"
            padding="20px 0"
            borderRadius="1px"
            margin="0 0 10px"
          >
            {loginPage ? <Login></Login> : <Signup goLoginPage={goLoginPage}></Signup>}
          </Flex>
          <Flex
            border="1px solid #dbdbdb"
            height="63px"
            borderRadius="1px"
            margin="0 0 10px"
            bg="#fff"
          >
            {loginPage ? (
              <>
                <Text color="#262626">계정이 없으신가요? </Text>
                <Button
                  color="#00a2f8"
                  bg="transparent"
                  _onClick={goSignUpPage}
                >
                  가입하기
                </Button>
              </>
            ) : (
              <>
                <Text color="#262626">계정이 있으신가요? </Text>
                <Button color="#00a2f8" bg="transparent" _onClick={goLoginPage}>
                  로그인
                </Button>
              </>
            )}
          </Flex>
          <Text color="#262626" margin="10px">
            앱을 다운로드하세요.
          </Text>
          <Flex gap="8px" margin="10px 0">
            <Image
              shape="rectangle"
              width="140px"
              height="40px"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            ></Image>
            <Image
              shape="rectangle"
              width="140px"
              height="40px"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            ></Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 0 52px 0">
        <Footer></Footer>
      </Flex>
    </>
  );
};

export default Home;
