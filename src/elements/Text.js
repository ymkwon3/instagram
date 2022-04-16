import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { fontSize, fontWeight, color, children, margin, height, width } =
    props;
  const styled = { fontSize, fontWeight, color, margin, height, width };
  return <TextStyled {...styled}>{children}</TextStyled>;
};

Text.defaultProps = {
  fontSize: "14px",
  fontWeight: "",
  color: "#8e8e8e",
  margin: "",
  height: "", // new
  width: "", // new
};

const TextStyled = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin}; // new
  height: ${(props) => props.height}; // new
  width: ${(props) => props.width}; // new
`;

export default Text;
