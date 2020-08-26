import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { stripUnit } from "polished"

import SectionComponent from "../Section"
import fluidRange from "../utils/fluidRange"

export const Section = styled(SectionComponent)(
  ({
    theme,
    imageWidth,
    alignImageToBottom,
    reverseForMobile,
    hideImageOnMobile,
  }) => {
    const oneThird = stripUnit(theme.breakpoints.xl) / 3
    const oneFourth = stripUnit(theme.breakpoints.xl) / 4
    const width = stripUnit(imageWidth) || stripUnit(theme.breakpoints.xl)

    const gridTemplateColumns = ["1fr", "1fr"]
    const gridTemplateAreas = ["image", "content"]
    const reverseMobileTemplateAreas = alignImageToBottom
      ? true
      : reverseForMobile
    let mobileTemplateAreas = '"image" "content"'

    if (reverseMobileTemplateAreas) {
      mobileTemplateAreas = '"content" "image"'
    }

    /**
     * Determine if the image should be smaller than half the container
     *  and set the template areas to position the image on the correct side
     */
    if (width < oneFourth) {
      gridTemplateAreas.push("content")
      gridTemplateColumns.push("1fr")
    }
    if (width < oneThird) {
      gridTemplateAreas.push("content")
      gridTemplateColumns.push("1fr")
    }

    return css`
      ${alignImageToBottom && `padding-bottom: 0 !important`};

      &:nth-of-type(odd) {
        .split-content__grid {
          @media screen and (min-width: ${theme.breakpoints.md}) {
            grid-template-areas: "${[...gridTemplateAreas]
              .reverse()
              .join(" ")}";
          }
        }
      }

      .split-content {
        &__grid {
          display: grid;
          align-items: center;
          grid-template-rows: auto auto;
          grid-template-areas: ${mobileTemplateAreas};
          ${fluidRange("grid-gap", [
            stripUnit(theme.spacing.lg),
            stripUnit(theme.spacing.xxl),
          ])};

          @media screen and (min-width: ${theme.breakpoints.md}) {
            grid-template-areas: "${gridTemplateAreas.join(" ")}";
            grid-template-columns: ${gridTemplateColumns.join(" ")};
            grid-template-rows: none;
          }
        }

        &__image {
          align-self: ${alignImageToBottom ? "flex-end" : "center"};
          margin: 0;
          padding: 0;
          text-align: center;
          ${hideImageOnMobile ? "display: none" : null};
          grid-area: image;

          @media screen and (min-width: ${theme.breakpoints.md}) {
            display: block;
          }
        }

        &__content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          grid-area: content;
          ${
            alignImageToBottom &&
            fluidRange("padding-bottom", [
              stripUnit(theme.spacing.lg),
              stripUnit(theme.spacing.xxl),
            ])
          };
        }
      }
    `
  }
)
