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
  const postList = useSelector((state) => state.post?.postList);
  console.log(postList);

  React.useEffect(() => {
    dispatch(postActions.getPostListDB());
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
          <Post imageUrl="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/278070637_1173735450111264_6880398074226860271_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=kOfWh5OYa1EAX_jXs71&_nc_ht=scontent-atl3-1.cdninstagram.com&oh=00_AT-53J2hLOxyOjdOTfvuaEuNirOdcU4p_Xxv91nj7QNl-A&oe=6260AB31"/>
          <Post />
          <Post imageUrl="https://post-phinf.pstatic.net/MjAyMDAyMjhfNyAg/MDAxNTgyODc1MjE5OTI2.E17Bhe29zfHHo2cq3gxizQvG7vabgtS19-FKCLB6Zygg.i4UXMjzfL3D7xWdGRghvWCco0-8CFlHVSU9-VIqXQZ0g.GIF/ec8820408bcf838979006d65a9a8f279.gif?type=w1200"/>
          <Post imageUrl="http://img.etoday.co.kr/pto_db/2020/12/20201209044925_1552354_710_340.jpg"/>
          <Post imageUrl="http://newsimg.hankookilbo.com/2018/09/18/201809181844065492_4.jpg"/>
          {postList?.map((post, idx) => (
            <Post key={post.postId} {...post} />
          ))}
        </Flex>
        <Recommendation />
      </Flex>
    </>
  );
};

Main.defaultProps = {};

export default Main;
