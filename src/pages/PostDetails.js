import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components
import Card from "../components/Card";

// react-icons
import { BsThreeDots } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { RiBookmarkLine } from "react-icons/ri";
import { BsEmojiWink } from "react-icons/bs";

import Post from "../components/Post";

const PostDetails = (props) => {
  return (
    <>
      <Flex margin="90px auto" ai="flex-start">
        {/* 게시글 body 부분 */}
        <Flex
          minHeight="450px"
          maxHeight="859px"
          // height="859px"
          maxWidth="859px"
          // width="859px"
          aspectRatio="1 / 1"
          flexBasis="859px"
          overflow="hidden"
        >
          <Image shape="square" paddingTop="100%" />
        </Flex>
        <Flex
          fd="column"
          border="1px solid #dbdbdb"
          borderBottom="1px solid #dbdbdb"
          borderRadius="3px"
          maxWidth="500px"
          minWidth="405px"
          height="859px"
          jc="space-between"
        >
          {/* 게시글 head 부분 */}
          <Flex fd="column">
            <Flex jc="space-between" borderBottom="1px solid #dbdbdb78">
              <div style={{ padding: "14px 0px 14px 16px" }}>
                <Card name="" />
              </div>
              <Button bg="transparent" margin="0px 8px 0px 0px">
                <BsThreeDots style={{ fontSize: "20px", color: "black" }} />
              </Button>
            </Flex>

            {/* 게시글 */}
            <Flex jc="space-between" padding="3px 16px">
              <span>
                <UserNameGoToMyPage href="#">
                  <UsernameSpan>유저이름</UsernameSpan>
                </UserNameGoToMyPage>
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  갓 아이유
                </span>
              </span>
              <Button bg="transparent" width="auto">
                <IoIosHeartEmpty style={{ color: "black" }} />
              </Button>
            </Flex>
            {/* 두번째 줄 : 댓글*/}
            <Flex fd="column">
              <Flex jc="space-between" padding="3px 16px">
                <span>
                  <UserNameGoToMyPage href="#">
                    <UsernameSpan>유저이름</UsernameSpan>
                  </UserNameGoToMyPage>
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    갓 아이유
                  </span>
                </span>
                <Button bg="transparent" width="auto">
                  <IoIosHeartEmpty style={{ color: "black" }} />
                </Button>
              </Flex>
              <Flex jc="space-between" padding="3px 16px">
                <span>
                  <UserNameGoToMyPage href="#">
                    <UsernameSpan>유저이름</UsernameSpan>
                  </UserNameGoToMyPage>
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    갓 아이유
                  </span>
                </span>
                <Button bg="transparent" width="auto">
                  <IoIosHeartEmpty style={{ color: "black" }} />
                </Button>
              </Flex>

              <Flex jc="space-between" padding="3px 16px">
                <span>
                  <UserNameGoToMyPage href="#">
                    <UsernameSpan>유저이름</UsernameSpan>
                  </UserNameGoToMyPage>
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    갓 아이유
                  </span>
                </span>
                <Button bg="transparent" width="auto">
                  <IoIosHeartEmpty style={{ color: "black" }} />
                </Button>
              </Flex>
            </Flex>
          </Flex>

          {/* 게시글 bottom 부분 */}
          <Flex fd="column">
            {/* 첫번째 줄 */}
            <Flex ai="center" ac="center" jc="space-between" padding="6px 16px">
              <Flex jc="">
                <Button bg="white" padding="0px">
                  <IoIosHeartEmpty
                    style={{
                      fontSize: "26px",
                      margin: "8px 8px 8px 0px",
                      color: "black",
                    }}
                  />
                </Button>
                <Button bg="white" padding="0px">
                  <BsChat
                    style={{
                      fontSize: "24px",
                      margin: "8px",
                      color: "black",
                    }}
                  />
                </Button>
                <Button bg="white" padding="0px">
                  <BiMessageDetail
                    style={{
                      fontSize: "24px",
                      margin: "8px",
                      color: "black",
                    }}
                  />
                </Button>
              </Flex>
              <Button bg="white" padding="0px">
                <RiBookmarkLine style={{ fontSize: "24px", color: "black" }} />
              </Button>
            </Flex>

            <Flex jc="flex-start" padding="3px 18px">
              <Text fontSize="10px">17시간 전</Text>
            </Flex>

            {/* 세번째 줄 :댓글 입력 창 */}
            <Flex
              jc=""
              margin="17px 0px 0px 0px"
              padding="6px 16px"
              borderTop="1px solid #857d7d1c"
            >
              <Flex jc="" width="auto">
                <Button margin="8px 16px 8px 0px" bg="transparent">
                  <BsEmojiWink style={{ fontSize: "24px", color: "black" }} />
                </Button>
              </Flex>

              <Flex>
                <PostTextarea
                  rows="1"
                  placeholder="댓글 달기.."
                  autoComplete="off"
                  autoCorrect="off"
                ></PostTextarea>

                <Button width="45px" bg="transparent">
                  <Text color="#0095f6">게시</Text>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

PostDetails.defaultProps = {};

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
  background: 0 0;
  border: 0;
  font-size: 15px;
  max-height: 80px;
  outline: 0;
  padding: 0;
  height: auto
  resize: none;
  width: 100%;
  display: flex;
  height: auto;
`;
export default PostDetails;
