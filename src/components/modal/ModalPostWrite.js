import React from "react";

// style
import "./modal.css";
import styled from "styled-components";

// elements
import { Flex } from "../../elements";

const ModalPostWrtie = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <ModalBody>
            <main>{props.children} </main>
            {/* <ModalBodyRight>sdfsdfasdfasd</ModalBodyRight> */}
          </ModalBody>
        </section>
      ) : null}
    </div>
  );
};

const ModalBody = styled.div``;

const ModalBodyRight = styled.div`
  width: 345px;
`;

export default ModalPostWrtie;
