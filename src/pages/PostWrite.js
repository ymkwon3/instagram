import React from "react";

// elements
import { Flex, Image, Textarea, Text, Button } from "../elements";

// styles
import styled from "styled-components";

// components
import Card from "../components/Card";

// packages
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as imageActions } from "../redux/modules/image";

// react-icons
import { BsEmojiDizzy, BsChevronDown } from "react-icons/bs";
import { FiSmile } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const PostWrite = () => {
  const dispatch = useDispatch();
  const preview = useSelector(state => state.image.preview);

  // const is_uploading = useSelector((state) => state.image.uploading);
  const [file, setFile] = React.useState(null);
  const textInput = React.useRef("");
  const [text, setText] = React.useState("");

  const handleFileSelect = e => {
    setFile(e.target.files[0]);
    dispatch(imageActions.setPreview(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <section className="add">
      <Flex fd="column">
        <Flex height="42px" borderBottom="1px solid #dbdbdb">
          <Text fontWeight="600" fontSize="16px" color="#262626">
            새 게시물 만들기
          </Text>
          <Button
            className="rightBtn"
            bg="transparent"
            color="#0095f6"
            _onClick={() => console.log("작성하기만들어야함무라비")}
          >
            공유하기
          </Button>
        </Flex>
        <Flex ai="start" height="100%">
          <Flex flex="2" fd="column">
            <InputFile
              type="file"
              placeholder="사진을 선택해주세용!"
              onChange={handleFileSelect}
            />
            <Flex>
              <Image
                shape="rectangle"
                src={
                  preview
                    ? preview
                    : "https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1116084_16386257784873056.jpg"
                }
              />
            </Flex>
          </Flex>
          <Flex width="1px" height="777px" bg="#dbdbdb" />

          {/* 오른쪽 게시물 내용 작성 부분 */}
          <Flex flex="0.9" fd="column">
            <Flex padding="0 16px" height="60px">
              <Card />
            </Flex>

            <Textarea
              padding="0 16px"
              rows={7}
              placeholder="문구 입력..."
              maxLength={2200}
              value={text}
              _onChange={setText}
            />
            <Flex
              jc="space-between"
              height="44px"
              padding="4px 8px"
              borderBottom="1px solid #dbdbdb"
            >
              <FiSmile
                size={20}
                color="#8e8e8e"
                style={{ margin: "0 0 0 8px" }}
              />

              <Text margin="0px 8px 0px 0px" fontSize="12px" color="#c7c7c7">
                {text.length}/2,200
              </Text>
            </Flex>
            <Flex
              jc="space-between"
              height="44px"
              padding="4px 8px"
              borderBottom="1px solid #dbdbdb"
            >
              <Text margin="0 9px" fontSize="16px">
                위치 추가
              </Text>
              <GoLocation style={{ margin: "0 8px 0 0" }}></GoLocation>
            </Flex>
            <Flex
              jc="space-between"
              height="44px"
              padding="4px 8px"
              borderBottom="1px solid #dbdbdb"
            >
              <Text margin="0 9px" fontSize="16px" color="#262626">
                접근성
              </Text>
              <BsChevronDown style={{ margin: "0 8px 0 0" }}></BsChevronDown>
            </Flex>
            <Flex
              jc="space-between"
              height="44px"
              padding="4px 8px"
              borderBottom="1px solid #dbdbdb"
            >
              <Text margin="0 9px" fontSize="16px" color="#262626">
                고급 설정
              </Text>
              <BsChevronDown style={{ margin: "0 8px 0 0" }}></BsChevronDown>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

const InputFile = styled.input`
  width: 100%;
  cursor: pointer;
  padding: 10px;
  &[type="file"]::file-selector-button {
    background-color: transparent;
    content: "사진 업로드";
    color: #0095f6;
    border: none;
    font-size: 14px;
    font-weight: 600;
  }
`;

export default PostWrite;
