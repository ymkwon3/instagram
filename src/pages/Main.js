import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text, Textarea } from "../elements";

// components
import Recommendation from "../components/Recommendation";
import Post from "../components/Post";

// packages
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Main = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  const userInfo = useSelector(state => state.user.userInfo);

  React.useEffect(() => {
    dispatch(postActions.getPostListDB([...userInfo.follow, userInfo.userId]));
  }, []);

  return (
    <>
      <Flex
        maxWidth="935px"
        margin="0px auto"
        padding="90px 0px 0px 0px"
        jc="flex-start"
        ai="flex-start"
      >
        <Flex
          fd="column"
          float="left"
          margin="0px 28px 0px 0px"
          maxWidth="614px"
        >
          {postList?.map((post, idx) => (
            <Post key={post.PostId} {...post} currentUserId={userInfo.userId}/>
          ))}
        </Flex>
        <Recommendation />
      </Flex>
    </>
  );
};

Main.defaultProps = {};

export default Main;
