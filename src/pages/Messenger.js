import React from "react";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// styles
import styled from "styled-components";

const Messenger = (props) => {
  return (
    <>
      <Flex
        margin="90px 0px 0px 0px"
        maxWidth="935px"
        bg="yellow"
        overflow="hidden"
        height="88vh"
      >
        {/* Messenger 왼쪽  */}
        <Flex
          width="350px"
          overflow="hidden"
          height="100%"
          jc="flex-start"
          bg="blue"
        >
          <Flex flexWrap="wrap" width="100%" zIndex="2" padding="0 20px">
            <Flex height="inherit" jc="space-between" width="100%">
              <Flex margin="0px 8px 0px 0px" flexBasis="32px"></Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* Messenger 오른쪽  */}
        <Flex
          flex="1 1 auto"
          width="583"
          minHeight="0"
          minWidth="0"
          height="100%"
          bg="green"
          border="1px solid black"
        ></Flex>
      </Flex>
    </>
  );
};

Messenger.defaultProps = {};

export default Messenger;
