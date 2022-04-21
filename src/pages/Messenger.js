import React from "react";

// elements
import { Button, Flex, Text } from "../elements";

// components
import Card from "../components/Card";
import ChatRoom from "../components/Chat/ChatRoom";
import ModalFrame from "../components/modal/ModalFrame";
import ModalAddChat from "../components/modal/ModalAddChat";

// react-icons
import { BsPencilSquare, BsChevronDown } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";

import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io.connect("http://3.34.132.47:80"); // socket.io 서버 측을 클라이언트 측과 연결
const Messenger = props => {
  // 모달창
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [messageList, setMessageList] = React.useState([]);
  const user_rooms = useSelector(state => state.user.userInfo.follow);

  let userId = useSelector(state => state.user.userInfo.userId);
  let [room, setRoom] = React.useState("");
  let [follow, setFollow] = React.useState("");
  const [showChat, setShowChat] = React.useState(false);

  const openChatRoom = follow => {
    setFollow(follow);
    setMessageList([]);
    const roomNum = userId > follow ? userId + follow : follow + userId;
    setRoom(roomNum);
    if (userId !== "" && roomNum !== "") {
      socket.emit("join_room", roomNum);
      setShowChat(true);
    }
  };

  return (
    <>
      <Flex
        margin="60px 0px 0px 0px"
        maxWidth="935px"
        height="100%"
        width="100%"
        padding="20px"
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
          bg="#fff"
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
                          <Text
                            fontSize="16px"
                            fontWeight="600"
                            color="#262626"
                          >
                            {userId}
                          </Text>
                          <Text margin="8px">
                            <BsChevronDown
                              color="#000"
                              size="20"
                              style={{ marginTop: "5px" }}
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
          <Flex height="100%" overflow="auto" margin="8px 0px 0px 0px">
            <Flex
              height="100%"
              fd="column"
              jc="flex-start"
              overscrollBehavior="contain"
            >
              {user_rooms.map((follow, idx) => {
                return (
                  <Card
                    key={follow + idx}
                    userId={follow}
                    hoverEvent="pointer"
                    padding="8px 20px"
                    size={56}
                    topFontSize="14px"
                    topFontWeight="400"
                    className="cardHoverEvent"
                    _onClick={() => openChatRoom(follow)}
                  />
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        {/* Messenger 오른쪽  */}

        <Flex
          width="583px"
          height="100%"
          border="1px solid #dbdbdb"
          borderLeft="0px"
          fd="column"
          jc="flex-start"
          bg="#fff"
        >
          {showChat ? (
            // 클릭 후
            <ChatRoom
              socket={socket}
              userId={userId}
              room={room}
              setMessageList={setMessageList}
              messageList={messageList}
              follow={follow}
            />
          ) : (
            //클릭전
            <Flex padding="24px" height="100%" fd="column" flex="0 0 auto">
              <IoMdPaperPlane style={{ fontSize: "96px" }} />
              <Text
                margin="12px 0px 0px 0px"
                fontSize="22px"
                fontWeight="300"
                color="#262626"
              >
                내 메시지
              </Text>
              <Text margin="10px 0px 0px 0px" lineHeight="16px">
                친구나 그룹에 비공개 사진과 메시지를 보내보세요.
              </Text>
              <Button
                margin="24px 0px 0px 0px"
                padding="5px 9px"
                fontSize="14px"
                _onClick={openModal}
              >
                메시지 보내기
              </Button>
              <ModalFrame open={modalOpen} close={closeModal}>
                {/* 모달 창 main 부분 */}
                <ModalAddChat close={closeModal} />
              </ModalFrame>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

Messenger.defaultProps = {};

export default Messenger;
