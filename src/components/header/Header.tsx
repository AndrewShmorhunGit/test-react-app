import { css } from "@emotion/css";
import { FormSearch } from "components/lib/Bootstrap";
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  RelativeContainer,
} from "components/lib/Emotion";
import { Clock } from "components/lib/Navigation";
import { ClocksLogo, ShieldLogo } from "components/logos/Logos";
import { palette } from "styles/palette";
import { appShadows, container } from "styles/styles";
import { getDate } from "utils/functions";

export const headerHight: number = 10;
export function Header() {
  const { day, date, dayOfMonth } = getDate();
  const { time } = Clock();
  return (
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
                  <p className={css({ fontWeight: 700 })}>{dayOfMonth + " "}</p>

                  <p>{date}</p>
                </FlexRowContainer>
                <RelativeContainer
                  className={css({
                    display: "flex",
                    gap: "1.2rem",
                  })}
                >
                  <div>
                    <ClocksLogo
                      height={18}
                      width={18}
                      fill={palette.main_primary_dark}
                    />
                  </div>
                  <p>{time}</p>
                </RelativeContainer>
              </div>
            </FlexColumnContainer>
          </FlexRowContainer>
        </div>
      </Container>
    </header>
  );
}
