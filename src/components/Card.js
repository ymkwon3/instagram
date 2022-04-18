import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

const Card = (props) => {
  const {
    name,
    size,
    userId,
    src,
    margin,
    padding,
    topFontSize,
    topFontWeight,
    bottomFontSize,
    bottoTextmMargin,
  } = props;
  const styles = {
    size,
    src,
    margin,
    padding,
    topFontSize,
    topFontWeight,
    bottomFontSize,
    bottoTextmMargin,
  };
  return (
    <>
      <Flex margin={margin} padding={padding}>
        <Flex width={size}>
          <Image shape="circle" {...styles} />
        </Flex>

        <Flex fd="column" ai="flex-start" gap="3px" margin="0 0 0 14px">
          <Text
            fontSize={topFontSize ? topFontSize : "14px"}
            color="#262626"
            fontWeight={topFontWeight ? topFontWeight : "600"}
          >
            {userId}
          </Text>
          <Flex jc="" margin={bottoTextmMargin}>
            <Text fontSize={bottomFontSize ? bottomFontSize : "14px"}>
              {name}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

Card.defaultProps = {
  size: 32,
  userId: "luv_IU",
  name: "",
  src: "https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1116084_16386257784873056.jpg",
};

export default Card;
