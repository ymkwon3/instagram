import React from "react";
import styled from "styled-components";

const Textarea = React.forwardRef((props, ref) => {
  const { rows, placeholder, padding } = props;
  return (
    <TextareaStyled
      rows={rows}
      autoComplete="off"
      autoCorrect="off"
      placeholder={placeholder}
      ref={ref}
    ></TextareaStyled>
  );
});

Textarea.defaultProps = {
  rows: "1",
  placeholder: "",
  padding: "0",
};

const TextareaStyled = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  font-size: 14px;
  padding: ${props => props.padding};
`;

export default Textarea;
