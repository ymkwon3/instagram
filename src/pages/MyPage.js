import React from "react";

import { Flex, Image, Button, Text } from "../elements";

import { FiSettings, FiPlayCircle } from "react-icons/fi";
import { MdGridOn } from "react-icons/md";
import { CgBookmark } from "react-icons/cg";
import { RiPriceTag3Line } from "react-icons/ri";
import { BsSuitHeartFill } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";

import Footer from "../components/Footer";
import ModalFrame from "../components/modal/ModalFrame";
import PostDetails from "./PostDetails";

const MyPage = props => {
  const post_list = useSelector(state => state.post.postList);
  const logined_userInfo = useSelector(state => state.user.userInfo);

  return (
    <>
      <Flex margin="90px 0px 30px 0px" maxWidth="935px" fd="column">
        <MyPageHeader
          {...logined_userInfo}
          post_list_count={
            post_list.filter(v => v.userId === logined_userInfo.userId).length
          }
        />
        <MyPageTab />
        <MyPagePostList
          post_list={post_list}
          logined_userId={logined_userInfo.userId}
        />
      </Flex>
      <Footer />
    </>
  );
};

export default MyPage;

const MyPageHeader = ({
  userId,
  userName,
  userImage,
  follow,
  follower,
  post_list_count,
}) => {
  const dispatch = useDispatch();
  const imageRef = React.useRef(null);
  const setUserImage = (e) => {
    const formData = new FormData();
    formData.append("profile", e.target.files[0])
    dispatch(userActions.uploadUserImageDB(formData))
  };

  return (
    <>
      {/* Header */}
      <Flex margin="0px 0px 44px 0px">
        <Flex maxWidth="290px">
          <label htmlFor="profile">
            <Image src={userImage} size={150} shape="circle" />
          </label>
          <input onChange={(e) => setUserImage(e)} ref={imageRef} id="profile" type="file" style={{visibility: "hidden", width: "0"}}></input>
        </Flex>

        {/*Header 첫번째 줄 */}
        <Flex fd="column">
          <Flex jc="" margin="0px 0px 20px 0px">
            <Text fontSize="28px" fontWeight="300">
              {userId}
            </Text>
            <Button
              margin="0px 0px 0px 20px"
              bg="transparent"
              color="rgba(38,38,38,1)"
              border="1px solid rgba(219,219,219,1)"
              borderRadius="4px"
              padding="5px 9px"
            >
              프로필 편집
            </Button>
            <FiSettings
              style={{ marginLeft: "5px", padding: "8px", fontSize: "45px" }}
            />
          </Flex>
          {/* Header 두번째 줄 */}
          <Flex jc="" margin="0px 0px 20px 0px">
            <Text fontSize="16px" margin="0px 40px 0px 0px" fontWeight="400">
              게시글
              <span> </span>
              <span style={{ color: "rgba(38,38,38,1)", fontWeight: "600" }}>
                {post_list_count}
              </span>
            </Text>
            <Text fontSize="16px" margin="0px 40px 0px 0px" fontWeight="400">
              팔로워
              <span> </span>
              <span style={{ color: "rgba(38,38,38,1)", fontWeight: "600" }}>
                {follow.length}
              </span>
            </Text>
            <Text fontSize="16px" fontWeight="400">
              팔로우
              <span> </span>
              <span style={{ color: "rgba(38,38,38,1)", fontWeight: "600" }}>
                {follower.length}
              </span>
            </Text>
          </Flex>
          {/*Header 세번째 줄 */}
          <Flex jc="">
            <Text
              fontSize="16px"
              color="color: rgba(38,38,38,1)"
              fontWeight="600"
            >
              {userName}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const MyPageTab = props => {
  return (
    <>
      <Flex borderTop="1px solid #dbdbdb">
        <Flex width="auto">
          <Flex height="52px" margin="0px 60px 0px 0px" className="hoverEvent">
            <MdGridOn />
            <Text margin="0px 0px 0px 6px">게시물</Text>
          </Flex>
          <Flex height="52px" margin="0px 60px 0px 0px" className="hoverEvent">
            <FiPlayCircle />
            <Text margin="0px 0px 0px 6px">동영상</Text>
          </Flex>
          <Flex height="52px" margin="0px 60px 0px 0px" className="hoverEvent">
            <CgBookmark />
            <Text margin="0px 0px 0px 6px">저장됨</Text>
          </Flex>
          <Flex height="52px" className="hoverEvent">
            <RiPriceTag3Line />
            <Text margin="0px 0px 0px 6px">태그됨</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const MyPagePostList = ({ post_list, logined_userId }) => {

  return (
    <>
      <Flex jc="flex-start" gap="28px" flexWrap="wrap">
        {post_list.map((v, idx) => {
          return v.userId === logined_userId ? (
            <div key={v._id + idx}>
              <Flex position="relative" width="293px" height="293px">
                <Image
                  className="hoverEvent"
                  src={v.imageUrl}
                  shape="rectangle"
                  width="100%"
                  height="100%"
                />
                <ImageCover className="hoverEvent">
                  <Flex height="100%">
                    <BsSuitHeartFill style={{ fontSize: "24px" }} />
                    <Text
                      fontSize="26px"
                      color="white"
                      margin="0px 0px 0px 10px"
                    >
                      {v.likes}
                    </Text>
                  </Flex>
                </ImageCover>
              </Flex>
            </div>
          ) : null;
        })}
      </Flex>
    </>
  );
};

const ImageCover = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  &:hover {
    opacity: 0.5;
    background-color: black;
    color: white;
  }
`;
