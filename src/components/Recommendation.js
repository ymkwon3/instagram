import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Text } from "../elements";
import Card from "./Card";

const Recommendation = props => {
  return (
    <>
      <Flex
        position="sticky"
        maxWidth="295px"
        top="110px"
        fd="column"
        jc="center"
        className="hide"
      >
        <Flex>
          <Card userId="ymkwon3" name="아이유" size={56}></Card>
          <Button bg="transparent" color="#0095f6" fontSize="12px" width="50px">
            전환
          </Button>
        </Flex>

        <Flex fd="column">
          <Flex jc="space-between" margin="20px 0 10px">
            <Text fontWeight="600">회원님을 위한 추천</Text>
            <Button
              fontWeight="600"
              bg="transparent"
              color="#000"
              fontSize="12px"
            >
              모두 보기
            </Button>
          </Flex>

          {/*recommend list*/}
          <Flex fd="column">
            <Flex padding="8px 0 8px 8px">
              <Card src="https://file.mk.co.kr/meet/neds/2019/12/image_readtop_2019_1014566_15754438774001397.jpg" userId="luv_iu" name="아이유좋아"></Card>
              <Button
                bg="transparent"
                color="#0095f6"
                fontSize="12px"
                width="60px"
              >
                팔로우
              </Button>
            </Flex>
            <Flex padding="8px 0 8px 8px">
              <Card src="https://cdnweb01.wikitree.co.kr/webdata/editor/202009/16/img_20200916152758_395c9c8b.webp" userId="luv" name="아이유미쳐"></Card>
              <Button
                bg="transparent"
                color="#0095f6"
                fontSize="12px"
                width="60px"
              >
                팔로우
              </Button>
            </Flex>
            <Flex padding="8px 0 8px 8px">
              <Card src='https://pbs.twimg.com/profile_images/1239444035632132096/UBE7q0xQ_400x400.jpg' userId="hello_hi" name="아이유사랑해"></Card>
              <Button
                bg="transparent"
                color="#0095f6"
                fontSize="12px"
                width="60px"
              >
                팔로우
              </Button>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </>
  );
};

Recommendation.defaultProps = {};

export default Recommendation;
