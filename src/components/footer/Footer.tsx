import { css } from "@emotion/css";
import { FlexCenterContainer } from "components/lib/Emotion";

export const footerHight = 5.2;
export default function Footer() {
  return (
    <FlexCenterContainer className={css({ maxHeight: `${footerHight}rem` })}>
      <div>
        <a href="">Git hub</a>
        <a href="">Lined In</a>
        <a href="">Repository</a>
        <a href="">SSH Key</a>
      </div>
      <p>
        Developed by Andrew Shmorhun for testing porpoises. All rights reserved
      </p>
    </FlexCenterContainer>
  );
}
