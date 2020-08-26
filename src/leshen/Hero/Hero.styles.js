import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { stripUnit } from "polished"

import Image from "../Image"
import Section from "../Section"
import fluidRange from "../utils/fluidRange"

export const Hero = styled(Section)(
  ({ theme }) =>
    css`
      position: relative;
      z-index: 0;

      @media (min-width: ${theme.breakpoints.md}) {
        padding-right: 50%;
      }
    `
)

export const Content = styled.div(
  ({ split, theme }) => css`
    position: relative;
    z-index: 2;
    ${split &&
    fluidRange("padding-right", [
      stripUnit(theme.spacing.lg),
      stripUnit(theme.spacing.xxl),
    ])};
  `
)

export const BackgroundImage = styled(Image)(
  ({ theme, split }) => css`
    position: absolute !important;
    top: 0;
    left: ${split ? "50%" : 0};
    bottom: 0;
    right: 0;
    display: none;
    opacity: 0;

    @media (min-width: ${theme.breakpoints.md}) {
      display: block;
      opacity: 1;
    }
  `
)
