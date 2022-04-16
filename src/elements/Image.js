import React from "react";
import styled from "styled-components";

const Image = props => {
  const { shape, src, size, width, height, margin, paddingTop } = props;

  const styles = {
    src,
    size,
    width,
    height,
    margin,
    paddingTop,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "square") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  // 기존 정사각형을 square로 변경 후 일반 사각형을 rectangle로 변경
  if (shape === "rectangle") {
    return <ImageRectangle {...styles}></ImageRectangle>;
  }
};

Image.defaultProps = {
  shape: "circle",
  src: "https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1116084_16386257784873056.jpg",
  size: 36,
  paddingTop: "75%",
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 100px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: ${(props) => props.paddingTop};
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  /* background-position: center; */
`;

const ImageRectangle = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.src});
  background-size: cover;
  margin: ${props => props.margin};
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url(${props => props.src});
  background-size: cover;
  // margin: 4px;
`;

export default Image;
