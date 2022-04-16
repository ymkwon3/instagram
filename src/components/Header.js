import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components

// react-icons
import { AiFillHome } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";

const Header = (props) => {
  return (
    <>
      <Flex
        height="60px"
        position="fixed"
        top="0"
        zIndex="3"
        borderBottom="1px solid rgb(219, 219, 219)"
        bg="white"
      >
        <Flex padding="0 20px" maxWidth="975px" zIndex="10">
          <Flex flex="1 0 127px" jc="flex-start">
            <ToMain href="/">
              <Text fontSize="32px">Instargram</Text>
            </ToMain>
          </Flex>
          <SearchInput />
          <HeadarIcons />
        </Flex>
      </Flex>
    </>
  );
};

Header.defaultProps = {};

const ToMain = styled.a`
  text-decoration: none;
`;
export default Header;

const SearchInput = (props) => {
  return (
    <>
      <Flex
        width="268px"
        height="36px"
        minWidth="125px"
        flex="0 1 auto"
        bg="green"
      ></Flex>
    </>
  );
};

SearchInput.defaultProps = {};

export { SearchInput };

const HeadarIcons = (props) => {
  return (
    <>
      <Flex flex="1 0 127px">
        <Flex padding="0px 0px 0px 24px" whiteSpace="nowrap" jc="flex-end">
          <a href="#">
            <AiFillHome
              style={{ fontSize: "30px", color: "black", marginLeft: "40px" }}
            />
          </a>
          <a href="#">
            <BiMessageDetail
              style={{ fontSize: "30px", color: "black", marginLeft: "40px" }}
            />
          </a>
          <a href="#">
            <IoMdAddCircleOutline
              style={{ fontSize: "30px", color: "black", margin: " 0 40px" }}
            />
          </a>
          <a href="#">
            <Image shape="circle" size={30} />
          </a>
        </Flex>
      </Flex>
    </>
  );
};

HeadarIcons.defaultProps = {};

export { HeadarIcons };
