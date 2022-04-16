import React from "react";
import styled from "styled-components";

const InputLogin = React.forwardRef((props, ref) => {
  const {
    type,
    label,
    width,
    height,
    padding,
    margin,
    fontSize,
    fontWeight,
    bg,
    color,
    _onBlur,
    _onChange,
  } = props;
  const styles = {
    width,
    height,
    padding,
    margin,
    fontSize,
    fontWeight,
    bg,
    color,
  };

  return (
    <InputContainer {...styles}>
      <input
        ref={ref}
        type={type}
        placeholder=" "
        autoComplete="off"
        onBlur={_onBlur}
        onChange={_onChange}
      />
      <label>{label}</label>
    </InputContainer>
  );
});

InputLogin.defaultProps = {
  fontSize: "12px",
  bg: "#fafafa",
  width: "270px",
  height: "36px",
  padding: "11px",
  _onBlur: () => {},
  _onChange: () => {},
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};

  & > input {
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
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
    font-size: ${props => props.fontSize};
    position: absolute;
    left: ${props => props.padding};
    top: ${props => props.padding};
    transition: 0.2s;
    user-select: none;
    color: #8e8e8e;
  }

  & > input:not(:placeholder-shown) {
    font-size: ${props => parseInt(props.fontSize) + "px"};
    padding-top: ${props => parseInt(props.padding) + 12 + "px"};
  }

  & > input:not(:placeholder-shown) + label {
    transform: translateY(-${props => parseInt(props.padding) - 4 + "px"});
    font-size: ${props => parseInt(props.fontSize) - 1 + "px"};
  }

  & > input::-ms-reveal {
    display: none;
  }
`;

export default InputLogin;
