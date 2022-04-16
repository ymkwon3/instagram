import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components
import Recommendation from "../components/Recommendation";
import Post from "../components/Post";

const Main = (props) => {
  return (
    <>
      <Flex
        maxWidth="935px"
        margin="0px auto"
        padding="90px 0px 0px 0px"
        jc="flex-start"
      >
        <Flex
          fd="column"
          float="left"
          margin="0px 28px 0px 0px"
          maxWidth="614px"
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Flex>{" "}
        <Recommendation />
      </Flex>
    </>
  );
};

Main.defaultProps = {};

export default Main;
