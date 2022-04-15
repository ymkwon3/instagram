import React from "react";
import styled from "styled-components";

const InputLogin = React.forwardRef((props, ref) => {
  const {
    type,
    label,
    width,
    height,
    padding,
    fontSize,
    bg,
    color,
    _onBlur,
  } = props;
  const styles = { width, height, padding, fontSize, bg, color };

  return (
    <InputContainer {...styles}>
      <input
        ref={ref}
        type={type}
        placeholder=" "
        autoComplete="off"
        onBlur={_onBlur}
      />
      <label>{label}</label>
    </InputContainer>
  );
});

InputLogin.defaultProps = {
  fontSize: "16px",
  bg: "#fafafa",
  width: "270px",
  height: "40px",
  padding: "10",
  _onBlur: () => {},
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};

  & > input {
    font-size: ${props => props.fontSize};
    width: 100%;
    height: 100%;
    background-color: ${props => props.bg};
    padding: ${props => props.padding};
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: ${props => props.color};
  }

  & > label {
    font-size: 16px;
    position: absolute;
    left: ${props => props.padding};
    top: ${props => props.padding};
    transition: 0.2s;
    user-select: none;
    color: #8e8e8e;
  }

  & > input:focus, & > input:not(:placeholder-shown) {
    /* border: 2px solid #35a0b8;
    outline: 2px solid #35a0b8; */
  }

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translateY(-${props => props.padding});
      font-size: 12px;
  }

  & > input::-ms-reveal {
    filter: invert();
  }
`;

export default InputLogin;
