/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
const STYLES = {
  large: {
    height: "16px",
    radius: "8px",
    padding: "4px",
  },
  medium: {
    height: "12px",
    radius: "4px",
    padding: "0px",
  },
  small: {
    height: "8px",
    radius: "4px",
    padding: "0px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--radius": styles.radius,
        "--padding": styles.padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar
        style={{
          "--height": styles.height,
          "--width": value + "%",
        }}
      ></Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  overflow: hidden;
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0px 0px 4px; ;
`;

export default ProgressBar;
