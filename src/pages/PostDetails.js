import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text } from "../elements";

// components
import Card from "../components/Card";

// react-icons
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { HiOutlineChat } from "react-icons/hi";
import { RiBookmarkLine } from "react-icons/ri";
import moment from "moment";
import 'moment/locale/ko'


const PostDetails = props => {
  const { PostID, content, createdAt, imageUrl, likes, userId } = props;
  const commentRef = React.useRef(null);

  const autoGrow = () => {
    const padding = 4; // 패딩값
    const lineHeight = 18; // 라인높이

    if (
      commentRef.current.rows < 5 &&
      (commentRef.current.scrollHeight - padding) /
        (lineHeight * commentRef.current.rows) >
        1
    ) {
      commentRef.current.rows += 1;
    } else if (commentRef.current.value === "") {
      commentRef.current.rows = 1;
    }
  };

  return (
    <Flex className="detail">
      <Image shape="rectangle" src={imageUrl}></Image>
      <Flex
        bg="#fff"
        maxWidth="500px"
        height="100%"
        margin="0 auto"
        jc="start"
        fd="column"
      >
        {/* header */}
        <Flex height="60px" jc="space-between" borderBottom="1px solid #dbdbdb">
          <Card userId={userId} padding="14px 16px"></Card>
          <BsThreeDots
            style={{ margin: "0 16px 0 0" }}
            size="20"
            color="#262626"
          />
        </Flex>
        {/* commentlist */}
        <Flex padding="16px" fd="column" height="100%" jc="start">
          <Flex jc="space-between" height="50px">
            <Card userId={userId} content={content}></Card>
            <AiOutlineHeart className="iconHoverEvent" color="#323232" />
          </Flex>
          {/* commentlist */}
          <Flex jc="space-between" height="50px">
            <Card name="3일"></Card>
            <AiOutlineHeart className="iconHoverEvent" color="#323232" />
          </Flex>
          <Flex jc="space-between" height="50px">
            <Card></Card>
            <AiOutlineHeart className="iconHoverEvent" color="#323232" />
          </Flex>
          <Flex jc="space-between" height="50px">
            <Card></Card>
            <AiOutlineHeart className="iconHoverEvent" color="#323232" />
          </Flex>
        </Flex>
        {/* bottom */}
        <Flex>
          <Flex ai="center" jc="space-between" padding="16px 16px">
            <Flex jc="start" gap="16px">
              <AiOutlineHeart className="iconHoverEvent" color="#000" size="26"/>
              <HiOutlineChat className="iconHoverEvent" color="#000" size="26"/>
              <BiShareAlt className="iconHoverEvent" color="#000" size="26" />
            </Flex>
            <RiBookmarkLine className="iconHoverEvent" color="#000" size="26" />
          </Flex>
        </Flex>
        <Flex jc="flex-start" padding="3px 18px">
          <Text fontSize="10px">{moment(createdAt).fromNow()}</Text>
        </Flex>
        {/* 댓글 입력 창 */}

        <Flex
          jc=""
          margin="17px 0px 0px 0px"
          padding="6px 6px 6px 16px"
          borderTop="1px solid #857d7d24"
        >
          <FiSmile
            color="#000"
            size={26}
            style={{ margin: "8px 16px 8px 0px" }}
          />

          <PostTextarea
            placeholder="댓글 달기..."
            rows={1}
            ref={commentRef}
            onInput={autoGrow}
          ></PostTextarea>
          <Button width="60px" bg="transparent">
            <Text color="#0095f6">게시</Text>
          </Button>
        </Flex>
        {/* bottom */}
      </Flex>
    </Flex>
  );
};

PostDetails.defaultProps = {};

const PostTextarea = styled.textarea`
  color: #262626;
  background: 0 0;
  font-size: 14px;
  line-height: 18px;
  max-height: 80px;
  outline: 0;
  border: none;
  width: 100%;
  display: flex;
  resize: none;
  text-decoration: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default PostDetails;
