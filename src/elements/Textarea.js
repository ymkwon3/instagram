import React from "react";
import styled from "styled-components";

const Textarea = React.forwardRef((props, ref) => {
  const {
    rows,
    placeholder,
    padding,
    bg,
    maxLength,
    _onChange,
    overflow,
    _value,
    _onKeyPress,
  } = props;
  return (
    <TextareaStyled
      rows={rows}
      autoComplete="off"
      autoCorrect="off"
      placeholder={placeholder}
      bg={bg}
      ref={ref}
      maxLength={maxLength} // new2
      padding={padding}
      onChange={(e) => _onChange(e.target.value)}
      overflow={overflow}
      value={_value}
      onKeyPress={_onKeyPress}
    ></TextareaStyled>
  );
});

Textarea.defaultProps = {
  rows: "1",
  placeholder: "",
  padding: "0",
  bg: "",
  maxLength: 0, // new2
  overflow: "",
  _onChange: () => {},
  _value: "",
};

const TextareaStyled = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  font-size: 16px;
  line-height: 24px;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
`;

export default Textarea;
