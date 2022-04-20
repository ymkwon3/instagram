import React from "react"
import { Flex, Text } from "../../elements";

const ModalPostM = (props) => {
  const {remove, edit} = props;

  return (
    <Flex className="management" fd="column" borderRadius="15px">
      <Flex height="48px" borderBottom="1px solid #dbdbdb" _onClick={remove}>
          <Text color="#ed4956">삭제</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb" _onClick={edit}>
          <Text color="#262626">수정</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#262626">좋아요 수 숨기기</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#262626">댓글 기능 해제</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#262626">게시물로 이동</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#262626">공유 대상...</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#262626">링크 복사</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#262626">퍼가기</Text>
      </Flex>
      <Flex height="48px">
          <Text color="#262626">취소</Text>
      </Flex>
    </Flex>
  )
}

export default ModalPostM;