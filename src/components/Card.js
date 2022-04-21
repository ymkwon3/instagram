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
    hoverEvent,
    className,
    _onClick,
    content,
  } = props;
  const styles = {
    size,
    margin,
    padding,
    topFontSize,
    topFontWeight,
    bottomFontSize,
    bottoTextmMargin,
    hoverEvent,
    _onClick,
  };
  return (
    <>
      <Flex
        _onClick={_onClick}
        cursor={hoverEvent}
        margin={margin}
        padding={padding}
        className={className}
        jc="start"
      >
        <Flex width={size}>
          <Image src={src} shape="circle" {...styles} />
        </Flex>

        <Flex
          width="fit-content"
          fd="column"
          ai="flex-start"
          gap="3px"
          margin="0 10px 0 14px"
        >
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
        <Text>{content}</Text>
      </Flex>
    </>
  );
};

Card.defaultProps = {
  size: 32,
  userId: "luv_IU",
  name: "",
  src: "https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1116084_16386257784873056.jpg",
  topFontSize: "",
  topFontWeight: "",
  bottomFontSize: "",
  bottoTextmMargin: "",
};

export default Card;
