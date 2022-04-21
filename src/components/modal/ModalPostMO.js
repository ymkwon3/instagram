import React from "react"
import { Flex, Text } from "../../elements";

const ModalPostMO = (props) => {
  const {followCancel, cancel} = props;

  return (
    <Flex className="management" fd="column" borderRadius="15px">
      <Flex height="48px" borderBottom="1px solid #dbdbdb">
          <Text color="#ed4956">신고</Text>
      </Flex>
      <Flex height="48px" borderBottom="1px solid #dbdbdb" _onClick={followCancel}>
          <Text color="#ed4956">팔로우 취소</Text>
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
      <Flex height="48px" _onClick={cancel}>
          <Text color="#262626">취소</Text>
      </Flex>
    </Flex>
  )
}

export default ModalPostMO;