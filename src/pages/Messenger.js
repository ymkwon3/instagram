import React from "react";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components
import Card from "../components/Card";
import Chat from "../components/Chat/ChatRoom";

// react-icons
import { BsPencilSquare, BsChevronDown } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";

import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:3001"); // socket.io 서버 측을 클라이언트 측과 연결

const Messenger = (props) => {
  // const [username, setUsername] = React.useState("");
  // const [room, setRoom] = React.useState("");
  let username = useSelector((state) => state.user.userInfo.userId);
  let room = 1;
  const [showChat, setShowChat] = React.useState(false);

  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };

  const openChatRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
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
          {showChat ? (
            // 클릭 후
            <Chat socket={socket} username={username} room={room} />
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

export default Messenger;
