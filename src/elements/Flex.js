import React from "react";
import styled from "styled-components";

const Flex = props => {
  // fd: flex-direction, jc: justify-content, ai: align-items, bg: background-color
  const {
    color,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    borderBottom,
    gap,
    position,
    top,
    fd,
    jc,
    ai,
    bg,
    zIndex,
    overflow,
    children,
    _onClick,
    className,
  } = props;
  const styles = {
    color,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    borderBottom,
    gap,
    position,
    top,
    fd,
    jc,
    ai,
    bg,
    zIndex,
    overflow,
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
  borderBottom: "none",
  gap: "",
  position: "static",
  top: "",
  fd: "row",
  jc: "center",
  ai: "center",
  bg: "",
  zIndex: "",
  overflow: "visible",
  _onClick: () => {},
};

const FlexDiv = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-bottom: ${props => props.borderBottom};
  gap: ${props => props.gap};
  z-index: ${props => props.zIndex};
  position: ${props => props.position};
  top: ${props => props.top};
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  background-color: ${props => props.bg};
  overflow: ${props => props.overflow};
  color: ${props => props.color};
`;

export default Flex;
