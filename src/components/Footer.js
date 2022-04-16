import React from "react";
import { Flex, Text } from "../elements";

const Footer = props => {
  return (
    <Flex fd="column" border="1px solid flex">
      <Flex>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">Meta</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">소개</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">블로그</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">채용 정보</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">도움말</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">API</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">개인정보처리방침</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">약관</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">인기 계정</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">해시태그</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">위치</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">Instagram Lite</Text>
      </Flex>
      <Flex>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">댄스</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">식음료</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">집 및 정원</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">음악</Text>
        <Text fontSize="12px" margin="0 8px 6px 8px" color="#8e8e8e">시각 예술</Text>
      </Flex>
      <Flex margin="12px 0">
        <Text fontSize="12px" color="#8e8e8e">
          한국어 ∨&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text fontSize="12px" color="#8e8e8e">
          © 2022 Instagram Clone Coding
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
