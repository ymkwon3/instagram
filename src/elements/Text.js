import React from "react";
import styled from "styled-components";

const Text = props => {
  const { fontSize, fontWeight, color, children } = props;
  const styled = { fontSize, fontWeight, color };
  return <TextStyled {...styled}>{children}</TextStyled>;
};

Text.defaultProps = {
  fontSize: "14px",
  fontWeight: "",
  color: "#8e8e8e",
};

const TextStyled = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

export default Text;
