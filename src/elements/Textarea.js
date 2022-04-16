import React from "react";
import styled from "styled-components";

const Textarea = React.forwardRef((props, ref) => {
  const { rows, placeholder, padding, bg } = props;
  return (
    <TextareaStyled
      rows={rows}
      autoComplete="off"
      autoCorrect="off"
      placeholder={placeholder}
      bg={bg}
      ref={ref}
    ></TextareaStyled>
  );
});

Textarea.defaultProps = {
  rows: "1",
  placeholder: "",
  padding: "0",
  bg: "",
};

const TextareaStyled = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  font-size: 14px;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
`;

export default Textarea;
