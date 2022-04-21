import React from "react";
import styled from "styled-components";

const Textarea = React.forwardRef((props, ref) => {
  const {
    height,
    rows,
    placeholder,
    padding,
    bg,
    maxLength,
    lineHeight,
    _onChange,
    overflow,
    _value,
    _onKeyDown,
  } = props;
  return (
    <TextareaStyled
      rows={rows}
      autoComplete="off"
      autoCorrect="off"
      placeholder={placeholder}
      lineHeight={lineHeight}
      height={height}
      bg={bg}
      ref={ref}
      maxLength={maxLength} // new2
      padding={padding}
      onChange={(e) => _onChange(e.target.value)}
      onKeyDown={_onKeyDown}
      overflow={overflow}
      value={_value}
    ></TextareaStyled>
  );
});

Textarea.defaultProps = {
  rows: "1",
  placeholder: "",
  padding: "0",
  bg: "",
  maxLength: 0, // new2
  lineHeight: "24px",
  overflow: "",
  _onChange: () => {},
  _value: "",
};

const TextareaStyled = styled.textarea`
  width: 100%;
  height: ${props => props.height};
  resize: none;
  outline: none;
  border: none;
  font-size: 16px;
  line-height: ${props => props.lineHeight};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
`;

export default Textarea;
