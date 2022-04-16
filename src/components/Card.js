import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

const Card = (props) => {
  const { name } = props;
  return (
    <>
      <Flex width="auto">
        <div style={{ padding: "0px 10px 0px 0px" }}>
          <Image shape="circle" size={32} margin="0px" />
        </div>
        <Flex fd="column" ai="flex-start">
          <Text color="black">유저아이디</Text>
          <Text>{name}</Text>
        </Flex>
      </Flex>
    </>
  );
};

Card.defaultProps = {};

export default Card;
