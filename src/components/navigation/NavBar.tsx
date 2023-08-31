import { css } from "@emotion/css";
import { headerHight } from "components/header/Header";
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  RelativeContainer,
} from "components/lib/Emotion";
import { ImgOnLoad, NavigationLink } from "components/lib/Navigation";
import { SettingsLogo } from "components/logos/Logos";
import { palette } from "styles/palette";
import { appShadows } from "styles/styles";

export function NavBar() {
  const navigation = ["income", "groups", "products", "users", "settings"];
  return (
    <div
      id="navigation"
      className={css({
        gridTemplateRows: "2",
        gridTemplateColumns: "1/2",
        height: `calc(100vh - ${headerHight}rem)`,
        boxShadow: appShadows.header,
      })}
    >
      <FlexCenterContainer className={css({ padding: "8rem 4rem" })}>
        <RelativeContainer>
          <Container
            className={css({
              background: palette.background_third,
              overflow: "hidden",
              width: "12rem",
              height: "12rem",
              borderRadius: "50%",
            })}
          >
            <ImgOnLoad
              src={
                "https://res.cloudinary.com/natalie-cakes/image/upload/v1693496671/dzenCode/user_ajakc7.jpg"
              }
            />
          </Container>
          <div
            className={css({
              boxShadow: appShadows.settings,
              background: palette.background_second,
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              position: "absolute",
              right: "0rem",
              bottom: "0rem",
            })}
          >
            <Container
              className={css({
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              })}
            >
              <SettingsLogo height={20} width={20} fill={palette.text_dark} />
            </Container>
          </div>
        </RelativeContainer>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <FlexColumnContainer className={css({ gap: "2rem" })}>
          {navigation.map((link) => {
            return <NavigationLink key={link}>{link}</NavigationLink>;
          })}
        </FlexColumnContainer>
      </FlexCenterContainer>
    </div>
  );
}
