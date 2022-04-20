import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

// elements
import { Button, Flex, Image, Text, Textarea } from "../../elements";

// components
import Card from "../Card";

// styles
import styled from "styled-components";
import "./ChatRoom.css";

// react-icons
import { BsEmojiHeartEyes } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
// 라면
function Chat({ socket, username, room, setMessageList, messageList }) {
  const [currentMessage, setCurrentMessage] = React.useState("");
  // const [messageList, setMessageList] = React.useState([]);

  //   const [chatInput, setChatInput] = React.useState("");
  //   const messageRef = React.useRef();
  const sendMessage = async () => {
    // 메세지가 보내질 때까지 기다린다.(정확히는 작성된 메시지가 currentMessage에 저장될 때까지 기다린다.)
    if (currentMessage !== "") {
      // 빈 메시지 보내지 않는 조건
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]); // 우리가 보낸 메시지까지 저장
      setCurrentMessage(""); // 우리가 메시지르 보낼 때마다 input을 clear 시킨다.
    }
  };

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      // 내가보낸 메시지를 상대방 화면에 띄운다.
      setMessageList((list) => [...list, data]); // 여기서 list는 현재까지 받은 메세지 리스트를 의미
    });
  }, [socket]);

  return (
    <>
      {/*Header */}
      <Flex position="absolute" borderBottom="1px solid rgba(219,219,219,1)">
        <Flex flexWrap="wrap" height="59px" zIndex="2" padding="0 20px">
          <Flex jc="space-between">
            <Card size={32} topFontSize="16px" />
            <RiErrorWarningLine style={{ fontSize: "28px", margin: "8px" }} />
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
          overflow="hidden"
        >
          {/* 실제 대화가 이루어 지는 곳 */}

          {/* 대화창 */}
          <Flex height="100%" flex="1 1 auto" minHeight="0" minWidth="0">
            <Flex
              padding="20px 20px 0"
              flex="0 1 auto"
              overflowX="hidden"
              overflow="auto"
              height="100%"
            >
              {/* <ChattingPart> */}
              <div className="chat-window">
                <div className="chat-body">
                  <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) => {
                      return (
                        <div
                          className="message"
                          id={
                            username === messageContent.author ? "you" : "other"
                          }
                        >
                          <div>
                            <div className="message-content">
                              <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                              <p id="time">{messageContent.time}</p>
                              <p id="author">{messageContent.author}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </ScrollToBottom>
                </div>
              </div>
              {/* </ChattingPart> */}
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
                    _value={currentMessage}
                    _onChange={setCurrentMessage}
                  ></Textarea>
                  {currentMessage.length >= 1 ? (
                    <>
                      <Flex jc="" width="auto" margin="13px 0px">
                        <Text
                          color="rgba(0,149,246,1)"
                          width="50px"
                          textAlign="start"
                          _onKeyPress={(event) => {
                            event.key === "Enter" && sendMessage();
                          }}
                          _onClick={() => {
                            sendMessage();
                          }}
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
                      <BsHeart style={{ fontSize: "40px", padding: "8px" }} />
                    </>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

const ChattingPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  position: relative;
`;

export default Chat;
