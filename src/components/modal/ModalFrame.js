import React from "react";

// style
import "./modal.css";
import { MdClose } from "react-icons/md";
// elements
import { Flex, Text, Button } from "../../elements";

const ModalFrame = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props;

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
        <>
          {props.children}
        </>
      ) : null}
    </div>
  );
};

export default ModalFrame;
