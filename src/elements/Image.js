import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, paddingTop } = props;

  const styles = {
    src: src,
    size: size,
    paddingTop: paddingTop,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} src={src}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
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
  background-image: url(${(props) => props.src});
  background-size: cover;
  /* background-position: center; */
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url(${(props) => props.src});
  background-size: cover;
  // margin: 4px;
`;

export default Image;
