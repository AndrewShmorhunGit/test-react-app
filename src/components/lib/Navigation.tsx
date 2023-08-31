import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { palette } from "../../styles/palette";
import React from "react";
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  Spinner,
} from "./Emotion";
import spinner from "../../content/logos/spinner.svg";
export const NavigationLink = styled.button({
  padding: "0 0.4rem",
  border: "none",
  background: "transparent",
  color: palette.text_dark,
  fontSize: "1.6rem",
  fontWeight: "600",
  textAlign: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  ":hover": {
    color: "grey",
  },
});

export const ImgOnLoad = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isErrored, setIsErrored] = React.useState(false);
  return (
    <div
      className={css({
        cursor: "pointer",
      })}
    >
      {isLoaded
        ? null
        : !isErrored && (
            <Container
              className={css({
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              })}
            >
              <Spinner src={spinner} alt="animation spinner" />
            </Container>
          )}
      {isErrored ? (
        <FlexColumnContainer>
          <h2>Image download error..</h2>
          <FlexCenterContainer>
            {/* <ErrorLogo height={96} width={96} /> */}
          </FlexCenterContainer>
        </FlexColumnContainer>
      ) : (
        <img
          style={isLoaded ? { width: "100%" } : { display: "none" }}
          src={src}
          alt={"user"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsErrored(true)}
        />
      )}
    </div>
  );
};

export function Clock() {
  let time = new Date().toLocaleTimeString();
  const [isTime, setTime] = React.useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return { time: isTime };
}
