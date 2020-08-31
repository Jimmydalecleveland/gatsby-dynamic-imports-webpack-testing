import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { stripUnit } from "polished"

import fluidRange from "../utils/fluidRange"

export const Intro = styled.header(
  ({ theme, centeredContent, hasChildren }) => css`
    text-align: ${centeredContent ? "center" : "left"};
    ${
      hasChildren &&
      fluidRange("margin-bottom", [
        stripUnit(theme.spacing.lg),
        stripUnit(theme.spacing.xxl),
      ])
    };

  ${
    !centeredContent &&
    `
      > .svg-image {
        margin-left: auto;
        margin-right: auto;
      }
    `
  }

    @media (min-width: ${theme.breakpoints.lg}) {
      width: ${centeredContent ? "60%" : "80%"};
      margin-left: auto;
      margin-right: auto;
    }
  `
)

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ centeredContent }) =>
    centeredContent ? "center" : "flex-start"};
`
