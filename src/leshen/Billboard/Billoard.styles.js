import { css } from "@emotion/core"
import { stripUnit } from "polished"
import styled from "@emotion/styled"

import Img from "../Image"
import SectionComponent from "../Section"
import fluidRange from "../utils/fluidRange"
import { ColorDeterminer } from "../utils/helpers.styles"

export const Section = styled(SectionComponent)`
  position: relative;
`

export const Content = styled.div(
  ColorDeterminer,
  ({ theme, variant, backgroundColor }) =>
    css`
      position: relative;
      z-index: 1;
      ${variant === "full" && !backgroundColor && `background-color: inherit;`}
      @media (min-width: ${theme.breakpoints.md}) {
        width: 50%;
        box-shadow: ${variant === "full" ? theme.shadow : "none"};
        ${
          variant === "full" &&
          fluidRange("padding", [
            stripUnit(theme.spacing.sm),
            stripUnit(theme.spacing.lg),
          ])
        };
        ${
          variant === "full" &&
          !backgroundColor &&
          `background-color: ${theme.colors.light.lighter.hex};`
        }

        ${
          variant === "split" &&
          fluidRange("padding-right", [
            stripUnit(theme.spacing.lg),
            stripUnit(theme.spacing.xxl),
          ])
        };
      }

      section:nth-of-type(even) & {
        @media (min-width: ${theme.breakpoints.md}) {
          left: 50%;
          ${
            variant === "split" &&
            `${fluidRange("padding-left", [
              stripUnit(theme.spacing.lg),
              stripUnit(theme.spacing.xxl),
            ])};
            padding-right: 0;
          `
          }
        }
      }
    `
)

export const Image = styled(Img)(
  ({ theme, variant }) => css`
    display: none;
    ${variant === "split" && "width: 50%"};

    @media (min-width: ${theme.breakpoints.md}) {
      display: block;
      position: absolute !important;
      top: 0;
      right: 0;
      bottom: 0;
      left: ${variant === "full" ? "0" : "50%"};
    }

    section:nth-of-type(even) & {
      @media (min-width: ${theme.breakpoints.md}) {
        transform: scale(-1, 1);
        right: ${variant === "full" ? "0" : "50%"};
        left: 0;
      }
    }
  `
)
