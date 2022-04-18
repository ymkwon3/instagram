import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components
import ModalFrame from "./modal/ModalFrame";

// pages
import PostWrite from "../pages/PostWrite";
import Messenger from "../pages/Messenger";

// react-icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import {
  RiHome4Fill,
  RiHome4Line,
  RiMessage2Fill,
  RiMessage2Line,
  RiAddBoxFill,
  RiAddBoxLine,
  RiCompass3Fill,
  RiCompass3Line,
} from "react-icons/ri";

import { history } from "../redux/configureStore";

const Header = (props) => {
  const logoClick = () => {
    history.push("/");
  };

  return (
    <Flex
      height="60px"
      position="fixed"
      top="0"
      zIndex="3"
      borderBottom="1px solid rgb(219, 219, 219)"
      bg="white"
    >
      <Flex padding="0 20px" maxWidth="975px" height="60px" zIndex="10">
        <Flex flex="1 0 127px" jc="flex-start">
          <Flex _onClick={logoClick} className="hoverEvent" width="105px">
            <Image
              shape="rectangle"
              width="103px"
              height="30px"
              margin="5px 0 0 0"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            ></Image>
          </Flex>
        </Flex>
        <SearchDiv>
          <SearchInput className="input" placeholder="검색"></SearchInput>
          <Flex className="label" width="" height="36px" bg="#efefef">
            <BiSearch className="icon" color="#8e8e8e" size="20"></BiSearch>
            <Text margin="0 0 0 10px" fontSize="16px" fontWeight="300px">
              검색
            </Text>
          </Flex>
        </SearchDiv>

        <HeadarIcons />
      </Flex>
    </Flex>
  );
};

const HeadarIcons = (props) => {
  // 모달 창
  // ===============================================================================
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //==============================================================================

  return (
    <>
      <Flex flex="1 0 127px">
        <Flex whiteSpace="nowrap" jc="flex-end" gap="22px">
          <RiHome4Line color="#000" size="26" />
          <RiMessage2Line
            className="hoverEvent"
            color="#000"
            size="26"
            onClick={() => {
              history.push("/messenger");
            }}
          />
          <RiAddBoxLine
            className="hoverEvent"
            onClick={openModal}
            color="#000"
            size="26"
          />
          <RiCompass3Line color="#000" size="26" />
          <AiOutlineHeart color="#000" size="26" />
          <Image shape="circle" size={24} />

          <ModalFrame
            open={modalOpen}
            close={closeModal}
            header="게시글 만들기"
          >
            {/* 모달 창 main 부분 */}
            <PostWrite />
          </ModalFrame>
        </Flex>
      </Flex>
    </>
  );
};

HeadarIcons.defaultProps = {};

const SearchDiv = styled.div`
  display: flex;
  width: 268px;
  height: 36px;
  min-width: 125px;
  flex: 0 1 auto;
  background-color: #efefef;
  padding: 0 16px;
  border-radius: 8px;
  position: relative;

  .label {
    position: absolute;
  }

  .input:focus + .label,
  .input:not(:placeholder-shown) + .label {
    display: none;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: #efefef;
  width: 100%;
  height: 100%;
  padding: 3px 0;
  font-size: 16px;
`;

Header.defaultProps = {};

export default Header;
