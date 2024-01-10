import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <IconWrapper
        size={size}
        style={{
          "--width": size == "small" ? 16 + "px" : 24 + "px",
          "--height": size == "small" ? 16 + "px" : 24 + "px",
        }}
      >
        <Icon id={icon} size={size}></Icon>
      </IconWrapper>
      <NativeInput
        type="text"
        size={size}
        placeholder={placeholder}
        value={label}
        width={width}
      />
    </Wrapper>
  );
};

export default IconInput;

const NativeInput = styled.input`
  border: none;
  border-bottom: solid ${(props) => (props.size == "small" ? "1px" : "2px")}
    ${COLORS.black};
  padding-left: ${(props) => (props.size == "small" ? "21px" : "36px")};
  font-size: ${(props) => (props.size == "small" ? "14px" : "18px")};
  font-weight: 700;
  color: ${COLORS.gray700};
  width: ${(props) => props.width + "px"};
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  &:focus {
    outline: 5px auto hsla(218, 57%, 53%, 1);
    outline-offset: 2px;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;
const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: ${(props) => (props.size == "small" ? "4px" : "6px")};
  left: 0;
  margin: auto;
  width: var(--width);
  height: var(--height);
`;
