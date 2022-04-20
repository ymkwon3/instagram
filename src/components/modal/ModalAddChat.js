import React from "react";

// elements
import { Flex, Image, Button, Text, Textare } from "../../elements";

// styles
import styled from "styled-components";

import Card from "../../components/Card";

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { useSelector } from "react-redux";

function ModalAddChat() {
  const user_follows = useSelector((state) => state.user?.userInfo.follow);
  console.log(user_follows);

  const formData = [];
  user_follows.forEach((follow, idx) =>
    formData.push({ id: idx, name: follow })
  );
  console.log(formData);

  const [isChecked, setIsChecked] = React.useState(false); // 체크 여부
  const [checkedItems, setCheckedItems] = React.useState(new Set()); // 체크되 요소들

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      // 체크 되었을 때
      checkedItems.add(id); // 체크시 삽입
      setCheckedItems(checkedItems); // 체크 요소 넣어주기
      // box.style.backgroundColor = "#F6CB44"; // 스타일 변경
    } else if (!isChecked && checkedItems.has(id)) {
      // 체크가 안되었고, id가 있을 때(클릭 2번시)
      checkedItems.delete(id); // 체크 두번시 삭제
      setCheckedItems(checkedItems);
      // box.style.backgroundColor = "#fff";
    }
    return checkedItems;
  };
  return (
    <>
      <Flex
        width="409px"
        height="65%"
        bg="white"
        margin="auto"
        display="fixed"
        zIndex="100"
        borderRadius="12px"
        fd="column"
        jc="flex-start"
      >
        {/* Header */}
        <Flex
          jc="space-between"
          padding="20px 15px"
          borderBottom="1px solid rgb(0 0 0 / 13%)"
          height="43px"
        >
          <Text fontSize="22px" fontWeight="600" color="black">
            X
          </Text>
          <Text fontSize="16px" fontWeight="600" color="black">
            새로운 메세지
          </Text>
          <Text fontSize="14px" color="rgba(0,149,246,1)">
            다음
          </Text>
        </Flex>

        <Flex fd="column" overflow="hidden" minHeight="0" minWidth="0">
          {/* Body */}
          <Flex
            fd="column"
            borderBottom="1px solid rgb(0 0 0 / 13%)"
            ai=""
            overflow="auto"
            margin="8px 0px"
          >
            <Text
              fontSize="18px"
              fontWeight="600"
              color="black"
              margin="4px 12px"
            >
              받는 사람:
            </Text>
            <Flex fd="column" ai="" margin="0px 8px" width="calc(100%-80px)">
              {/* <Flex jc="">클릭한 사람 나타내기</Flex> */}
              <AddMessageInput placeholder="검색..."></AddMessageInput>
            </Flex>
          </Flex>

          {/* Bottom */}

          <Flex fd="column" overflow="auto">
            <Flex jc="">
              <Text
                fontSize="14px"
                lineHeight="18px"
                fontWeight="600"
                margin="16px"
              >
                추천
              </Text>
            </Flex>

            {formData.map((item) => {
              return (
                <>
                  <Flex key={item.id} padding="8px 16px">
                    <Card size={48} userId={item.name} name="아이유"></Card>
                    <Flex jc="flex-end">
                      <label htmlFor="follow">
                        <CheckInput
                          id="follow"
                          type="checkbox"
                          name="follow"
                          value={item.name}
                          onChange={(e) => checkHandler(e)}
                        />
                      </label>
                    </Flex>
                  </Flex>
                </>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

const AddMessageInput = styled.input`
  font-size: 14px;
  line-height: 30px;
  autocomplete: off;
  overflow: visible;
  padding: 4px 12px;
  outline: 0;
  border: 0;
  &:placehoder {
    color: #d0d0d0;
  }
`;

const CheckInput = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  &:checked {
    background-color: blue;
    border: none;
  }
`;
export default ModalAddChat;
