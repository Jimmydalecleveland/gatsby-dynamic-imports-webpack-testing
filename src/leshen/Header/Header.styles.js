import styled from "@emotion/styled"
import { rem, stripUnit } from "polished"
import { css } from "@emotion/core"
import fluidRange from "../utils/fluidRange"

import { WidthContainer } from "../utils/helpers.styles"

export const Header = styled.header`
  background-image: ${({ theme, dark }) =>
    dark
      ? `linear-gradient(to right, ${theme.colors.dark.base.hex} 50%, ${theme.colors.dark.lighter.hex} 50%)`
      : theme.colors.light.lighter.hex};
  display: none;
  position: relative;
  z-index: 2;

  nav {
    a {
      display: inline-block;
      text-decoration: none;
      line-height: 1;
    }
  }

  .primary-link a,
  .primary-link > span {
    color: ${({ theme, dark }) =>
      dark ? theme.colors.light.lighter.hex : "inherit"};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: block;
  }
`

export const TopNav = styled.nav`
  a {
    border-left: 1px solid ${({ theme }) => theme.colors.dark.base.hex};
    padding: 0 1em;
    color: ${({ theme, dark }) =>
      dark ? theme.colors.light.lighter.hex : "inherit"};

    &:first-of-type {
      padding-left: 0;
      border-left: none;
    }
  }
`

export const TopBar = styled.div`
  ${WidthContainer};
  background-color: ${({ theme }) => theme.colors.light.base.hex};
  font-size: ${({ theme }) => rem(theme.fonts.body.xs.size)};
  padding-top: ${({ theme }) => theme.spacing.min};
  padding-bottom: ${({ theme }) => theme.spacing.min};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PhoneLink = styled.a`
  text-decoration: none;
  white-space: nowrap;

  &:link {
    color: ${({ theme, dark }) =>
      dark ? "#fff" : theme.colors.primary.base.hex};
  }

  &:hover {
    cursor: pointer;
  }
`

export const BottomBar = styled.div`
  ${WidthContainer};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LocationChanger = styled.div`
  display: flex;

  a {
    border-left: 1px solid ${({ theme }) => theme.colors.dark.base.hex};
    color: inherit;
    margin-left: 1em;
    padding-left: 1em;

    .ci {
      color: blue;
    }
  }

  span {
    color: red;
  }
`

export const MainNav = styled.nav`
  background: ${({ theme, dark }) =>
    dark ? theme.colors.dark.base.hex : theme.colors.light.lighter.hex};
  display: flex;
  align-items: center;
  flex-basis: 80%;

  .primary-link {
    display: flex;
    justify-content: flex-start;
    transition: color 0.1s, background-color 0.1s;
    align-items: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.base.hex};
      color: ${({ theme }) => theme.colors.light.base.hex};
    }

    &:hover .subnav {
      display: flex;
    }

    > a,
    > span {
      height: 100%;
      display: flex;
      align-items: center;
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xs}`};
    }

    &:first-of-type {
      margin-left: ${({ theme }) => theme.spacing.sm};
    }
  }

  .subnav {
    box-shadow: ${({ theme }) => theme.shadow};
    border-bottom-right-radius: ${({ theme }) => theme.radius};
    border-bottom-left-radius: ${({ theme }) => theme.radius};
    display: none;
    position: absolute;
    top: 100%;
    flex-direction: column;
    list-style: none;
    background: #fff;

    li:last-child {
      border-bottom-right-radius: inherit;
      border-bottom-left-radius: inherit;
    }

    a {
      padding: ${({ theme }) => theme.spacing.sm};
      padding-right: ${({ theme }) => theme.spacing.xl};
      color: ${({ theme }) => theme.colors.dark.base.hex};
      display: block;
      cursor: pointer;
      transition: color 0.25s, background-color 0.25s;
      text-transform: initial;

      :last-child {
        border-bottom-right-radius: inherit;
        border-bottom-left-radius: inherit;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.light.dark.hex};
      }
    }
  }
`

export const MegaMenu = styled.nav(
  ({ theme, featured }) => css`
  .subnav {
    color: ${theme.colors.dark.base.hex};
    box-shadow: ${theme.shadow};
    max-width: 980px;
    left: 0;
    right: 0;
    margin: auto;

    & {
      flex-direction: row;
    }

    .subnav-container {
      padding: ${theme.spacing.lg};
      width: ${featured ? "75%" : "100%"};
    }

    h3 {
      ${fluidRange("font-size", stripUnit(theme.fonts.subheadings.md.size))}
      color: ${theme.colors.dark.base.hex};
      font-weight: ${theme.fonts.subheadings.md.weight};
    }

    ul {
      grid-gap: ${theme.spacing.lg};
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      list-style: none;

      div, li {
        padding-right: ${theme.spacing.lg};
        width: 100%;
      }

      h4, & > li a {
        font-weight: ${theme.fonts.subheadings.md.weight};
        border-bottom: 1px solid ${theme.colors.dark.base.hex};

        &:hover {
          border-bottom: 1px solid ${theme.colors.primary.base.hex}
        }

        a {
          color: ${theme.colors.dark.base.hex};
          padding: ${theme.spacing.xxs};
          padding-left: 0;

          text-decoration: none;

          &:hover {
            background-color: initial;
            color: ${theme.colors.primary.base.hex};
          }
        }
      }

      li {
        a {
          color: ${theme.colors.dark.base.hex};
          padding: ${theme.spacing.xxs};
          padding-left: 0;

          &:hover {
            background-color: initial;
            color: ${theme.colors.primary.base.hex};
          }
        }
      }
    }
  }
`
)

export const FeaturedContent = styled.div`
  background-color: ${({ theme }) => theme.colors.light.base.hex};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 25%;
`

export const CallButton = styled.div(
  ({ theme, dark }) => css`
    color: ${dark
      ? theme.colors.light.lighter.hex
      : theme.colors.primary.base.hex};
    display: flex;
    text-decoration: none;

    > svg {
      margin-right: ${theme.spacing.min};
    }
  `
)

export const MobileHeader = styled.header(
  ({ theme, dark }) => css`
    background: ${dark
      ? theme.colors.dark.base.hex
      : theme.colors.light.lighter.hex};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacing.sm};

    svg {
      margin: inherit;
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      display: none;
    }
  `
)

export const MobileNav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  z-index: 2;

  a {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    display: flex;
    width: 100%;
    color: inherit;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark.base.hex};
  }

  button,
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: none;
  }

  .back-button {
    background-color: ${({ theme }) => theme.colors.light.dark.hex};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    justify-content: flex-start;
    width: 100%;
    text-align: left;

    svg {
      margin: 0;
    }
  }

  ul {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    list-style-type: none;
    background-color: #fff;
    /* 55px is the height of the header */
    height: calc(100vh - 55px);

    li {
      border-bottom: ${({ theme }) =>
        `solid 1px ${theme.colors.light.dark.hex}`};
      display: flex;
      width: 100%;

      button {
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
        color: ${({ theme }) => theme.colors.dark.base.hex};
        width: 100%;
        text-align: left;
        text-decoration: none;
        transition: background-color 0.3s;

        &:active {
          background-color: ${({ theme }) => theme.colors.primary.base.hex};
          color: ${({ theme }) => theme.colors.light.base.hex};
        }

        svg {
          margin: 0;
        }
      }
    }
  }
`
