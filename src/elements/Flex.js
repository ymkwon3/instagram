import React from "react";
import styled from "styled-components";

const Flex = (props) => {
  // fd: flex-direction, jc: justify-content, ai: align-items, bg: background-color
  const {
    color,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    borderTop, // new
    borderBottom,
    gap,
    position,
    top,
    left, // new
    right, // new
    fd,
    jc,
    ai,
    bg,
    zIndex,
    overflow,
    children,
    _onClick,
    className,
    maxWidth, // new
    minWidth, // new
    flex, // new
    whiteSpace, // new
    float, // new
    alignContent, // new
    minHeight, // new
    maxHeight, // new
    aspectRatio, // new
    flexBasis, // new
  } = props;

  const styles = {
    color,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    borderTop, // new
    borderBottom,
    gap,
    position,
    top,
    left, // new
    right, // new
    fd,
    jc,
    ai,
    bg,
    zIndex,
    overflow,
    maxWidth, // new
    minWidth, // new
    flex, // new
    whiteSpace, // new
    float, // new
    alignContent, // new
    minHeight, // new
    maxHeight, // new
    aspectRatio, //new
    flexBasis, // new
  };
  return (
    <FlexDiv onClick={_onClick} {...styles} className={className}>
      {children}
    </FlexDiv>
  );
};

Flex.defaultProps = {
  width: "100%",
  height: "",
  margin: "",
  padding: "",
  border: "none",
  borderRadius: "",
  borderTop: "", // new
  borderBottom: "",
  gap: "",
  position: "static",
  top: "",
  left: "", // new
  right: "", // new
  fd: "row",
  jc: "center",
  ai: "center",
  bg: "",
  zIndex: "",
  overflow: "visible",
  _onClick: () => {},
  maxWidth: "", // new
  minWidth: "", // new
  flex: "", // new
  whiteSpace: "", // new
  float: "", // new
  alignContent: "", // new
  minHeight: "", // new
  maxHeight: "", // new
  aspectRatio: "", // new
  flexBasis: "", // new
};

const FlexDiv = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-top: ${(props) => props.borderTop}; // new
  border-bottom: ${(props) => props.borderBottom};
  gap: ${(props) => props.gap};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left}; // new
  right: ${(props) => props.right}; // new
  flex-direction: ${(props) => props.fd};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  background-color: ${(props) => props.bg};
  overflow: ${(props) => props.overflow};
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth}; // new
  min-width: ${(props) => props.minWidth}; // new
  flex: ${(props) => props.flex}; // new
  white-space: ${(props) => props.whiteSpace}; // new
  float: ${(props) => props.float}; // new
  align-content: ${(props) => props.alignContent}; // new
  min-height: ${(props) => props.minHeight}; // news
  max-height: ${props => props.maxHeight};
  aspect-ratio: ${(props) => props.aspectRatio}; // news
  flex-basis: ${(props) => props.flexBasis}; // news
`;

export default Flex;
