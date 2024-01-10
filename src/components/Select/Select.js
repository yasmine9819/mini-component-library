import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue, getSelectorWidth } from "./Select.helpers";

const Select = ({ id, label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  // const selectorWidth = getSelectorWidth(value);

  return (
    <Wrapper>
      <Selector id={id} value={value} onChange={onChange}>
        {children}
      </Selector>
      <SelectedItem>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size="24"></Icon>
        </IconWrapper>
      </SelectedItem>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Selector = styled.select`
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;
const SelectedItem = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding-right: 52px;
`;

export default Select;
