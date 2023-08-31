import styled from "@emotion/styled";
import { flexCenter } from "../../styles/styles";
import { keyframes } from "@emotion/react";

export const Container = styled.div({
  marginLeft: "auto",
  marginRight: "auto",
});

export const RelativeContainer = styled.div({
  position: "relative",
});

export const AbsoluteBottomContainer = styled.div({
  position: "absolute",
  bottom: 0,
});

export const AbsoluteCenterContainer = styled.div({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

export const GridContainer = styled.div({
  display: "grid",
});

export const FlexRowContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const FlexColumnContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const FlexCenterContainer = styled.div({
  ...flexCenter,
});

///////////////////////////
// STYLED APP COMPONENTS //
///////////////////////////

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(1turn)" },
});

export const Spinner = styled.img({
  width: "6rem",
  height: "6rem",
  animation: `${spin} 1.5s linear infinite`,
});
