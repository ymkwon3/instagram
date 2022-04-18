import React from "react";

// style
import "./modal.css";
import { MdClose } from "react-icons/md";
// elements
import { Flex, Text, Button } from "../../elements";

const ModalPostWrtie = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "modal openModal" : "modal"}>
      <MdClose
        id="closeBtn"
        className="hoverEvent"
        color="#fff"
        size={38}
        onClick={close}
      />
      {open ? (
        <section>
          <Flex height="42px" borderBottom="1px solid #dbdbdb">
            <Text fontWeight="600" fontSize="16px" color="#262626">
              {header}
            </Text>
            <Button
              color="#0095f6"
              _onClick={() => console.log("작성하기만들어야함무라비")}
            >
              공유하기
            </Button>
          </Flex>

          <Flex width="100%">{props.children}</Flex>
        </section>
      ) : null}
    </div>
  );
};

export default ModalPostWrtie;
