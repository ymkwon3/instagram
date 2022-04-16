import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

const Card = props => {
  const { name, size, userId, src, margin, padding } = props;
  const styles = {
    size,
    src,
    margin,
    padding,
  };
  return (
    <>
      <Flex margin={margin} padding={padding}>
        <Flex width={size}>
          <Image shape="circle" {...styles} />
        </Flex>

        <Flex fd="column" ai="flex-start" gap="3px" margin="0 0 0 14px">
          <Text fontSize="14px" color="black" fontWeight="600">
            {userId}
          </Text>
          <Text fontSize="12px">{name}</Text>
        </Flex>
      </Flex>
    </>
  );
};

Card.defaultProps = {
  size: 32,
  userId: "유저기본",
  src: "https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1116084_16386257784873056.jpg",
};

export default Card;
