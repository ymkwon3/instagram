import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

// elements
import { Flex, Text, Textarea } from "../../elements";

// components
import Card from "../Card";

// styles
import "./ChatRoom.css";

// react-icons
import { BsEmojiHeartEyes } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
// 라면
function Chat({ socket, username, room, setMessageList, messageList, follow }) {
  const [currentMessage, setCurrentMessage] = React.useState("");
  
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
      // 내가보낸 메시지를 상대방 화면에 띄운다.
      setMessageList((list) => [...list, data]); // 여기서 list는 현재까지 받은 메세지 리스트를 의미
    });
  }, [socket]);

  return (
    <>
      {/*Header */}
      <Flex borderBottom="1px solid #dbdbdb">
        <Flex height="59px" zIndex="2" padding="0 20px">
          <Flex jc="space-between" margin="0 0 0 20px">
            <Card userId={follow} size={24} topFontSize="16px" />
            <RiErrorWarningLine size={28} style={{margin: "8px" }} />
          </Flex>
        </Flex>
      </Flex>
      {/* 채팅창 */}
      <Flex height="100%" ai="flex-start" fd="column">
        <Flex
          height="100%"
          fd="column"
          overflow="hidden"
        >
          {/* 실제 대화가 이루어 지는 곳 */}

          {/* 대화창 */}
          <Flex height="100%">
            <Flex
              padding="20px 20px 0"
              height="100%"
            >
              {/* <ChattingPart> */}
              <div className="chat-window">
                <div className="chat-body">
                  <ScrollToBottom className="message-container">
                    {messageList.map((messageContent, idx) => {
                      return (
                        <div
                          key={idx}
                          className="message"
                          id={
                            username === messageContent.author ? "other" : "you"
                          }
                        >
                          <div>
                            <div className="message-content">
                              <p>{messageContent.message}</p>
                            </div>
                            {/* <div className="message-meta">
                              <p id="time">{messageContent.time}</p>
                              <p id="author">{messageContent.author}</p>
                            </div> */}
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
                    placeholder="메시지 입력...."
                    lineHeight="16px"
                    maxLength=""
                    height="18px!important"
                    _value={currentMessage}
                    _onChange={setCurrentMessage}
                    _onKeyDown={(event) => {
                      event.key === "Enter" && sendMessage();
                    }}
                  ></Textarea>
                  {currentMessage.length >= 1 ? (
                    <>
                      <Flex jc="" width="auto" margin="13px 0px">
                        <Text
                          color="rgba(0,149,246,1)"
                          width="50px"
                          textAlign="start"
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

export default Chat;
