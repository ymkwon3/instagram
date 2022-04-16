import React from "react";
import styled from "styled-components";

const Text = props => {
  // new : margin, textAlign
  const { fontSize, fontWeight, color, margin, textAlign, children } = props;
  const styled = { fontSize, fontWeight, color, margin, textAlign };
  return <TextStyled {...styled}>{children}</TextStyled>;
};

Text.defaultProps = {
  fontSize: "14px",
  fontWeight: "",
  color: "#8e8e8e",
  textAlign: "start",
};

const TextStyled = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  margin: ${props => props.margin};
  text-align: ${props => props.textAlign};
`;

export default Text;
