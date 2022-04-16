import React from "react";
import styled from "styled-components";

const Textarea = React.forwardRef((props, ref) => {
  const { rows, placeholder, padding, bg, maxlength } = props;
  return (
    <TextareaStyled
      rows={rows}
      autoComplete="off"
      autoCorrect="off"
      placeholder={placeholder}
      bg={bg}
      ref={ref}
      maxlength={maxlength} // new2
      padding={padding}
    ></TextareaStyled>
  );
});

Textarea.defaultProps = {
  rows: "1",
  placeholder: "",
  padding: "0",
  bg: "",
  maxlength: "", // new2
};

const TextareaStyled = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  font-size: 14px;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
`;

export default Textarea;
