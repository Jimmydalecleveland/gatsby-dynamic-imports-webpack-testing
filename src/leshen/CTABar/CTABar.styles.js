import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { ColorDeterminer } from "../utils/helpers.styles"

export const Container = styled.div(
  ColorDeterminer,
  ({ theme, light }) => css`
    background-color: ${light
      ? theme.colors.light.lighter.hex
      : theme.colors.primary.base.hex};
    color: ${light
      ? theme.colors.primary.base.hex
      : theme.colors.primary.base.readable};
    border-top: 5px solid;
    width: 100%;
    z-index: 3;

    &.original {
      border: 0;
    }
  `
)

export const StickyBar = styled.div(
  ({ isVisible }) => css`
    transform: translateY(${isVisible ? "0" : "100%"});
    z-index: 3;
    position: fixed;
    opacity: ${isVisible ? 1 : 0};
    bottom: 0;
    width: 100%;
    transition: transform 0.5s cubic-bezier(1, 0.05, 0.17, 1.09),
      opacity 0.5s cubic-bezier(1, 0.05, 0.17, 1.09);
    padding: 0;
  `
)
