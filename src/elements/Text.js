import React from "react";
import styled from "styled-components";

const Text = (props) => {
  // new : margin, textAlign
  const {
    fontSize,
    fontWeight,
    color,
    margin,
    width,
    textAlign,
    children,
    lineHeight,
  } = props;
  const styled = {
    fontSize,
    fontWeight,
    color,
    margin,
    textAlign,
    lineHeight,
    width,
  };
  return <TextStyled {...styled}>{children}</TextStyled>;
};

Text.defaultProps = {
  fontSize: "14px",
  fontWeight: "",
  color: "#8e8e8e",
  textAlign: "start",
  lineHeight: "normal",
  width: "",
};

const TextStyled = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  width: ${(props) => props.width};
`;

export default Text;
