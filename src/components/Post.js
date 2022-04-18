import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components
import Card from "../components/Card";

// react-icons
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { RiBookmarkLine } from "react-icons/ri";
import { BsEmojiWink } from "react-icons/bs";

const Post = props => {
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
    <>
      <Flex
        fd="column"
        jc="stretch"
        border="1px solid #dbdbdb"
        borderRadius="3px"
        bg="#fff"
        margin="0px 0px 24px 0px"
      >
        {/* 게시글 head 부분 */}
        <Flex jc="space-between" borderBottom="">
          <Flex padding="14px 16px">
            <Card />
          </Flex>
          <Button bg="transparent" margin="0px 12px 0px 0px">
            <BsThreeDots size="20" color="#262626" />
          </Button>
        </Flex>

        {/* 게시글 body 부분 */}

          <Image shape="rectangle" src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/278070637_1173735450111264_6880398074226860271_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=kOfWh5OYa1EAX_jXs71&_nc_ht=scontent-atl3-1.cdninstagram.com&oh=00_AT-53J2hLOxyOjdOTfvuaEuNirOdcU4p_Xxv91nj7QNl-A&oe=6260AB31"/>

        {/* 게시글 bottom 부분 */}
        <Flex>
          {/* 첫번째 줄 */}
          <Flex ai="center" jc="space-between" padding="16px 16px">
            <Flex jc="start" gap="16px">
              <AiOutlineHeart className="iconHoverEvent" color="#000" size="26" />
              <HiOutlineChat className="iconHoverEvent" color="#000" size="26" />
              <BiShareAlt className="iconHoverEvent" color="#000" size="26" />
            </Flex>
            <RiBookmarkLine className="iconHoverEvent" color="#000" size="26" />
          </Flex>
        </Flex>

        <Flex jc="flex-start" padding="3px 18px">
          <Text fontSize="10px">17시간 전</Text>
        </Flex>
        {/* 세번째 줄 :댓글 입력 창 */}

        <Flex
          jc=""
          margin="17px 0px 0px 0px"
          padding="6px 16px"
          borderTop="1px solid #857d7d24"
        >
          <Button margin="8px 16px 8px 0px" bg="transparent">
            <BsEmojiWink style={{ fontSize: "24px", color: "black" }} />
          </Button>
          <PostTextarea
            placeholder="댓글 달기..."
            rows={1}
            ref={commentRef}
            onInput={autoGrow}
          ></PostTextarea>
          <Button width="50px" bg="transparent">
            <Text color="#0095f6">게시</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

Post.defaultProps = {};

const UserNameGoToMyPage = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const UsernameSpan = styled.span`
  font-weight: 600;
  color: black;
  margin: 0px 10px 0px 0px;
  font-size: 14px;
`;

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
export default Post;
