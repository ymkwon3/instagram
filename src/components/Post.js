import React from "react";

// styles
import styled from "styled-components";

// elements
import { Button, Flex, Image, Text } from "../elements";

// components
import Card from "../components/Card";
import ModalFrame from "./modal/ModalFrame";
import PostDetails from "../pages/PostDetails";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";
// react-icons
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiSmile } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { RiBookmarkLine } from "react-icons/ri";
import moment from "moment";
import "moment/locale/ko";
import { useDispatch } from "react-redux";
import ModalPostM from "./modal/ModalPostM";
import PostWrite from "../pages/PostWrite";
import ModalPostMO from "./modal/ModalPostMO";

const Post = props => {
  const {
    _id,
    content,
    imageUrl,
    createdAt,
    userId,
    currentUserId,
    userImage,
    likes,
    isLiked,
  } = props;

  const editProps = { imageUrl, userId, _id, content };
  // 모달 여닫기
  const [modalOpen, setModalOpen] = React.useState(false);

  // 열리는 모달 종류
  const [modalType, setModalType] = React.useState("");

  const commentRef = React.useRef(null);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const followCancel = () => {
    if (window.confirm("팔로우를 취소하시겠어요?")) {
      dispatch(userActions.unFollowDB(userId));
    }
  };

  const autoGrow = () => {
    // 댓글 창 영역 설정

    const padding = 4; // 패딩값
    const lineHeight = 18; // 라인높이

    if (
      commentRef.current.rows < 5 &&
      (commentRef.current.scrollHeight - padding) /
        (lineHeight * commentRef.current.rows) >
        1
    ) {
      commentRef.current.rows += 1;
    } else if (commentRef.current.value === "") {
      commentRef.current.rows = 1;
    }
  };

  // 게시물 삭제
  const removePost = () => {
    if (
      currentUserId === userId &&
      window.confirm("정말로 게시물을 삭제하시겠습니까?")
    ) {
      dispatch(postActions.deletePostDB(_id));
      closeModal();
    }
  };

  const clickLike = () => {
    // 모듈이 다르더라도 액션이 같으면 동시에 실행됨
    dispatch(userActions.likeDB(_id));
    dispatch(postActions.setLike(_id, true));
  };

  const clickUnLike = () => {
    dispatch(userActions.unLikeDB(_id));
    dispatch(postActions.setLike(_id, false));
  };

  return (
    <>
      <ModalFrame open={modalOpen} close={closeModal}>
        {/* 모달 창 main 부분 */}
        {modalType === "detail" ? (
          <PostDetails {...props} isLiked={isLiked} />
        ) : modalType === "mine" ? (
          <ModalPostM
            remove={removePost}
            edit={() => setModalType("edit")}
            cancel={closeModal}
          />
        ) : modalType === "others" ? (
          <ModalPostMO followCancel={followCancel} cancel={closeModal} />
        ) : (
          <PostWrite type="edit" close={closeModal} {...editProps} />
        )}
      </ModalFrame>

      <Flex
        fd="column"
        jc="stretch"
        border="1px solid #dbdbdb"
        borderRadius="3px"
        bg="#fff"
        margin="0px 0px 24px 0px"
      >
        {/* 게시글 head 부분 */}
        <Flex jc="space-between" borderBottom="">
          <Flex padding="14px 16px">
            <Card userId={userId} src={userImage} />
          </Flex>

          <BsThreeDots
            className="hoverEvent"
            style={{ margin: "0px 12px 0px 0px" }}
            size="20"
            color="#262626"
            onClick={() => {
              if (currentUserId === userId) {
                setModalType("mine");
                openModal();
              } else {
                setModalType("others");
                openModal();
              }
            }}
          />
        </Flex>

        {/* 게시글 body 부분 */}

        <Image shape="rectangle" src={imageUrl} />

        {/* 게시글 bottom 부분 */}
        <Flex>
          {/* 첫번째 줄 */}
          <Flex ai="center" jc="space-between" padding="12px 16px">
            <Flex jc="start" gap="16px">
              {!isLiked ? (
                <AiOutlineHeart
                  className="iconHoverEvent"
                  color="#000"
                  size="26"
                  onClick={() => {
                    clickLike();
                  }}
                />
              ) : (
                <AiFillHeart
                  className="iconHoverEvent"
                  color="#ed4956"
                  size="26"
                  onClick={() => {
                    clickUnLike();
                  }}
                />
              )}

              <HiOutlineChat
                className="iconHoverEvent"
                color="#000"
                size="26"
                onClick={() => {
                  setModalType("detail");
                  openModal();
                }}
              />
              <BiShareAlt className="iconHoverEvent" color="#000" size="26" />
            </Flex>
            <RiBookmarkLine className="iconHoverEvent" color="#000" size="26" />
          </Flex>
        </Flex>
        <Flex jc="flex-start" padding="3px 18px">
          <Text fontSize="14px" fontWeight="600" color="#000">
            좋아요 {likes}개
          </Text>
        </Flex>
        <Flex jc="flex-start" padding="3px 18px">
          <Text fontSize="10px">{moment(createdAt).fromNow()}</Text>
        </Flex>
        {/* 세번째 줄 :댓글 입력 창 */}

        <Flex
          jc=""
          margin="17px 0px 0px 0px"
          padding="6px 16px"
          borderTop="1px solid #857d7d24"
        >
          <FiSmile
            color="#000"
            size={26}
            style={{ margin: "8px 16px 8px 0px" }}
          />

          <PostTextarea
            placeholder="댓글 달기..."
            rows={1}
            ref={commentRef}
            onInput={autoGrow}
          ></PostTextarea>
          <Button width="50px" bg="transparent">
            <Text color="#0095f6">게시</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

Post.defaultProps = {
  createdAt: "1996-03-11 10:00:00",
};

const PostTextarea = styled.textarea`
  color: #262626;
  background: 0 0;
  font-size: 14px;
  line-height: 18px;
  max-height: 80px;
  outline: 0;
  border: none;
  width: 100%;
  display: flex;
  resize: none;
  text-decoration: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Post;
