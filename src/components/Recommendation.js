import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

const Recommendation = props => {
  return (
    <>
      <Flex
        left="1006px"
        position="fixed"
        height="100vh"
        margin="0px 0px 30px 0px"
        padding="0px"
        maxWidth="293px"
        right="0"
        bg="red"
        top="100px"
        fd="column"
        jc="flex-start"
      >
        <Flex height="30px" bg="black"></Flex>
      </Flex>
    </>
  );
};

Recommendation.defaultProps = {};

export default Recommendation;
