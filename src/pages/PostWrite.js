import React from "react";

// elements
import { Flex, Image, Textarea, Text } from "../elements";

// styles
import styled from "styled-components";

// components
import Card from "../components/Card";

// packages
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as imageActions } from "../redux/modules/image";

// react-icons
import { BsEmojiDizzy } from "react-icons/bs";

const PostWrite = () => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  console.log(preview);

  // const is_uploading = useSelector((state) => state.image.uploading);
  const [file, setFile] = React.useState("");
  const fileInput = React.useRef();

  const selectFile = (e) => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("파일을 선택해주세요!");
      return;
    }

    setFile(fileInput.current.files[0].name);

    // 업로드된 파일을 읽어오는 객체 생성
    const reader = new FileReader();
    const selectdFile = fileInput.current.files[0];

    console.log(selectdFile);

    // dispatch(imageActions.imageStoreTemp(selectdFile));
    // 업로드된 파일 내용을 읽어오기
    reader.readAsDataURL(selectdFile);

    console.log(reader);

    // 파일 읽기가 끝난 후 발생하는 이벤드 핸들러
    reader.onloadend = () => {
      console.log(reader.result);
      //   setPreview(reader.result);
      //   console.log(preview);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  return (
    <React.Fragment>
      <Flex jc="" ai="flex-start">
        <Flex width="688px" height="600px" fd="column" jc="space-between">
          <Flex>
            <AttachmentDescription
              value={file}
              placeholder="사진을 선택해주세용!"
              onChange={() => {}}
            />
            <AttachmentLabel htmlFor="file">파일찾기</AttachmentLabel>
            <AttachmentInput
              onChange={selectFile}
              type="file"
              id="file"
              ref={fileInput}
              // disabled={is_uploading}
            />
          </Flex>

          <Image
            shape="rectangle"
            width="100%"
            height="100%"
            src={
              preview
                ? preview
                : "https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1116084_16386257784873056.jpg"
            }
          />
        </Flex>

        <ModalBodyRight />
      </Flex>
    </React.Fragment>
  );
};

const AttachmentDescription = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
`;

const AttachmentLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;

const AttachmentInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export default PostWrite;

const ModalBodyRight = (props) => {
  return (
    <>
      <Flex width="340px" ai="" fd="column">
        <Card />
        <Textarea
          padding="6px 16px"
          rows={7}
          placeholder="문구 입력..."
          maxlength={2200}
        />
        <Flex jc="space-between" padding="4px 8px">
          <BsEmojiDizzy style={{ fontSize: "20px", margin: "8px" }} />
          <div>
            <Text margin="0px 8px 0px 0px">0/2,200</Text>
          </div>
        </Flex>
      </Flex>
    </>
  );
};
