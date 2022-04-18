import React from "react";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// styles
import styled from "styled-components";

// components
import Card from "../components/Card";

// react-icons
import {
  BsPencilSquare,
  BsChevronDown,
  BsEmojiHeartEyes,
} from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import { BsHeart } from "react-icons/bs";

const Messenger = (props) => {
  const messengerInput = React.useRef();

  const [chatInput, setChatInput] = React.useState("");

  const [doesChatRoomOpen, setDoesChatRoomOpen] = React.useState(false);

  const openChatRoom = () => {
    setDoesChatRoomOpen(true);
  };

  return (
    <>
      <Flex
        margin="80px 0px 0px 0px"
        maxWidth="935px"
        // overflow="hidden"
        height="88vh"
        borderRadius="4px"
      >
        {/* Messenger 왼쪽  */}
        <Flex
          width="350px"
          overflow="hidden"
          height="100%"
          jc="flex-start"
          fd="column"
          border="1px solid rgba(219,219,219,1)"
        >
          {/* Messenger 왼쪽 바디 Header */}
          <Flex
            flexWrap="wrap"
            width="100%"
            zIndex="2"
            padding="0 20px"
            height="60px"
            borderBottom="1px solid rgba(219,219,219,1)"
          >
            <Flex height="inherit" jc="space-between" width="100%">
              <Flex margin="0px 8px 0px 0px" flexBasis="32px"></Flex>
              <Flex
                color="rgba(38,38,38,1)"
                display="inline-block"
                flex="1"
                minWidth="0"
                overflow="hidden"
                textAlign="center"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                <Flex width="100%" flex="0 0 auto" jc="flex-start">
                  <Flex
                    display="inline-block"
                    padding="0"
                    color="rgba(0,149,246,1)"
                  >
                    <Flex width="100%" flex="0 0 auto">
                      <Flex flexShrink="10" overflow="hidden">
                        <Flex
                          display="block"
                          textOverflow="ellipsis"
                          overflow="hidden"
                          whiteSpace="nowrap"
                        >
                          <Text fontSize="16px" fontWeight="600" color="black">
                            유저닉네임
                          </Text>
                          <Text margin="8px">
                            <BsChevronDown
                              style={{
                                fontWeight: "600",
                                fontSize: "26px",
                                color: "black",
                              }}
                            />
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex jc="flex-end" margin="0px 0px 0px 8px" flexBasis="32px">
                <BsPencilSquare style={{ fontSize: "24px" }} />
              </Flex>
            </Flex>
          </Flex>

          {/*  Messenger 왼쪽 바디 친구 목록 */}
          <Flex
            height="100%"
            overflow="auto"
            flex="0 0 auto"
            margin="8px 0px 0px 0px"
          >
            <Flex
              height="100%"
              flex="1 1 auto"
              minHeight="0"
              minWidth="0"
              fd="column"
              jc="flex-start"
              overscrollBehavior="contain"
            >
              <Card
                hoverEvent="pointer"
                padding="8px 20px"
                size={56}
                name="마지막 메시지를 표시하여 주세요"
                topFontSize="18px"
                topFontWeight="400"
                bottomfontSize="18px"
                bottoTextmMargin="6px 0px 0px 0px"
                _onClick={openChatRoom}
              />
            </Flex>
          </Flex>
        </Flex>
        {/* Messenger 오른쪽  */}

        <Flex
          flex="1 1 auto"
          width="583"
          minHeight="0"
          minWidth="0"
          height="100%"
          border="1px solid rgba(219,219,219,1)"
          borderLeft="0px solid rgba(219,219,219,1)"
          position="relative"
          fd="column"
          jc="flex-start"
        >
          {doesChatRoomOpen ? (
            // 클릭 후
            <>
              {/*Header */}
              <Flex
                position="absolute"
                borderBottom="1px solid rgba(219,219,219,1)"
              >
                <Flex flexWrap="wrap" height="59px" zIndex="2" padding="0 20px">
                  <Flex jc="space-between">
                    <Card size={32} topFontSize="16px" />
                    <RiErrorWarningLine
                      style={{ fontSize: "28px", margin: "8px" }}
                    />
                  </Flex>
                </Flex>
              </Flex>
              {/* 채팅창 */}
              <Flex height="100%" ai="flex-start" fd="column">
                <Flex
                  padding="44px 0px 0px 0px"
                  height="100"
                  flex="2 1 auto"
                  fd="column"
                >
                  {/* 대화창 */}
                  <Flex
                    height="100%"
                    flex="1 1 auto"
                    minHeight="0"
                    minWidth="0"
                  >
                    <Flex
                      padding="20px 20px 0"
                      flex="0 1 auto"
                      overflowX="hidden"
                      overflow="auto"
                      height="100%"
                    >
                      {/* 실제 대화가 이루어 지는 곳 */}
                      <ChattingPart>
                        <span>닝러ㅣ나어ㅣㄹ너ㅣ아러</span>
                      </ChattingPart>
                    </Flex>
                  </Flex>

                  {/* 채팅 입력창 */}
                  <Flex flex="0 0 auto">
                    <Flex padding="20px" flex="0 0 auto">
                      <Flex
                        jc=""
                        borderRadius="22px"
                        border="1px solid rgba(219,219,219,1)"
                        minHeight="44px"
                        padding="0px 8px 0px 11px"
                      >
                        <BsEmojiHeartEyes
                          style={{ fontSize: "40px", padding: "8px" }}
                        />
                        <Flex
                          margin="0px 4px 0px 0px"
                          flex="1 1 auto"
                          minHeight="0"
                          minWidth="0"
                        >
                          <Textarea
                            padding="8px 9px"
                            overflow="auto"
                            placeholder="메시지 입력...."
                            maxLength=""
                            ref={messengerInput}
                            _onChange={setChatInput}
                          ></Textarea>
                          {chatInput.length >= 1 ? (
                            <>
                              <Flex jc="" width="auto" margin="13px 0px">
                                <Text
                                  color="rgba(0,149,246,1)"
                                  width="50px"
                                  textAlign="start"
                                >
                                  보내기
                                </Text>
                              </Flex>
                            </>
                          ) : (
                            <>
                              <MdAttachFile
                                style={{ fontSize: "45px", padding: "6px 8px" }}
                              />
                              <BsHeart
                                style={{ fontSize: "40px", padding: "8px" }}
                              />
                            </>
                          )}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </>
          ) : (
            //클릭전
            <Flex padding="24px" height="100%" fd="column" flex="0 0 auto">
              <IoMdPaperPlane style={{ fontSize: "96px" }} />
              <Text margin="16px 0px 0px 0px" fontSize="26px" color="black">
                내 메시지
              </Text>
              <Text margin="16px 0px 0px 0px" lineHeight="18px">
                친구나 그룹에 비공개 사진과 메시지를 보내보세요.
              </Text>
              <Button
                margin="16px 0px 0px 0px"
                padding="5px 9px"
                fontSize="14px"
              >
                메시지 보내기
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

Messenger.defaultProps = {};

const ChattingPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
  position: relative;
`;

export default Messenger;
