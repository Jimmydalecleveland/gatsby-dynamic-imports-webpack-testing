import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { stripUnit } from "polished"

import fluidRange from "../utils/fluidRange"
import { WidthContainer, ColorDeterminer } from "../utils/helpers.styles"

export const Section = styled.section(
  WidthContainer,
  ColorDeterminer,
  ({ theme }) => css`
    ${fluidRange("padding-top", [
      stripUnit(theme.spacing.lg),
      stripUnit(theme.spacing.max),
    ])};
    ${fluidRange("padding-bottom", [
      stripUnit(theme.spacing.lg),
      stripUnit(theme.spacing.max),
    ])};
    position: relative;
  `
)
