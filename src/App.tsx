import "bootstrap/dist/css/bootstrap.min.css";
import { FormSearch } from "./components/lib/Bootstrap";
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  RelativeContainer,
} from "./components/lib/Emotion";
import { css } from "@emotion/css";
import { appShadows, container, createGrid } from "./styles/styles";
import { getDate, Clock } from "./utils/functions";
import { ImgOnLoad, NavigationLink } from "./components/lib/Navigation";
import { ClocksLogo, SettingsLogo, ShieldLogo } from "./components/logos/Logos";
import { palette } from "./styles/palette";
import image from "./content/images/examples/groups_middle.png";

function App() {
  const { day, date, dayOfMonth } = getDate();
  const { time } = Clock();
  const navigation = ["income", "groups", "products", "users", "settings"];

  const headerHight: number = 10;

  return (
    <div>
      <header
        className={css({
          boxShadow: appShadows.header,
        })}
      >
        <Container className={css({ ...container })}>
          <div
            className={css({
              height: `${headerHight}rem`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            })}
          >
            <FlexRowContainer className={css({ gap: "10rem" })}>
              <FlexCenterContainer
                className={css({
                  // display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                })}
              >
                <ShieldLogo height={48} width={48} />
                <div>
                  <p
                    className={css({
                      fontSize: "1.4rem",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: palette.main_primary,
                    })}
                  >
                    inventory
                  </p>
                </div>
              </FlexCenterContainer>
              <FlexCenterContainer className={css({ width: "24rem" })}>
                <FormSearch />
              </FlexCenterContainer>
            </FlexRowContainer>
            <FlexRowContainer>
              <FlexColumnContainer
                className={css({
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  width: "22rem",
                })}
              >
                <p>{day}</p>
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    gap: "4rem",
                  })}
                >
                  <FlexRowContainer
                    className={css({ maxWidth: "12rem", gap: "0.4rem" })}
                  >
                    <p className={css({ fontWeight: 700 })}>
                      {dayOfMonth + " "}
                    </p>

                    <p>{date}</p>
                  </FlexRowContainer>
                  <RelativeContainer
                    className={css({
                      display: "flex",
                      gap: "1.2rem",
                    })}
                  >
                    <div>
                      <ClocksLogo height={24} width={24} />
                    </div>
                    <p>{time}</p>
                  </RelativeContainer>
                </div>
              </FlexColumnContainer>
            </FlexRowContainer>
          </div>
        </Container>
      </header>
      <main className={css({ ...createGrid("2fr 10fr", 1) })}>
        <div
          id="navigation"
          className={css({
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
                  <SettingsLogo
                    height={20}
                    width={20}
                    fill={palette.text_dark}
                  />
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
        <div
          className={css({
            overflow: "scrollX",
            height: `calc(100vh - ${headerHight}rem)`,
            padding: "2rem",
          })}
        >
          <img src={image} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
