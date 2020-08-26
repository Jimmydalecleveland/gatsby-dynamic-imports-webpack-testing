import styled from "@emotion/styled"
import { rem } from "polished"
import Brandy from "../Brandy"
import List from "../List"

export const Animator = styled.div`
  margin-left: auto;
  margin-right: auto;

  > * {
    transition: all 0.3s ease-in;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:hover {
      cursor: pointer;

      > * {
        transform: translateY(-8px);
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary.base.hex},
          0 8px 10px ${({ theme }) => theme.colors.light.darker.hex};
        border-color: ${({ theme }) => theme.colors.primary.dark.hex};

        button {
          background-color: ${({ theme }) => theme.colors.primary.dark.hex};
        }
      }
    }
  }
`

export const Bullets = styled(List)`
  margin: ${({ theme }) => theme.spacing.sm};
`

export const Disclaimer = styled(Brandy)`
  margin: ${({ theme }) => theme.spacing.sm};
`

// TODO: This needs to be refactored to new style approach
// Overwriting the LinkButton this way to display none the icon is a temporary
// adjustment to get away from flex-box nonesense when the button is 100% width
export const PackageCard = styled.div`
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.light.darker.hex};
  border-top: ${({ theme }) =>
    `solid ${theme.spacing.xxs} ${theme.colors.primary.base.hex}`};
  background-color: ${({ theme }) => theme.colors.light.lighter.hex};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  a {
    align-self: stretch;
    margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};

    button {
      width: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      justify-content: center;

      svg {
        display: none;
      }
    }
  }

  .label {
    transform: ${({ theme }) =>
      `translateY(calc(-100% - ${theme.spacing.xxs}))`};
    padding: ${({ theme }) => `${theme.spacing.min} ${theme.spacing.lg}`};
    background-color: ${({ theme }) => theme.colors.primary.dark.hex};
    font-size: ${({ theme }) => rem(theme.fonts.body.xxs.size)};
    line-height: ${({ theme }) => rem(theme.fonts.body.xxs.lineHeight)};
    color: ${({ theme }) => theme.colors.primary.dark.readable};
    position: absolute;
    margin: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .title {
    margin: ${({ theme }) => `${theme.spacing.xxs} 0 ${theme.spacing.sm}`};
    padding: ${({ theme }) => `0 ${theme.spacing.lg} 0`};
    font-size: ${({ theme }) => rem(theme.fonts.body.xxs.size)};
    line-height: ${({ theme }) => rem(theme.fonts.body.xxs.lineHeight)};
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .details {
    margin: ${({ theme }) => `0 0 ${theme.spacing.sm}`};
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};
    background-color: ${({ theme }) => theme.colors.light.base.hex};
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    font-size: 12px;
    line-height: 14px;
    width: 100%;

    > span {
      padding: ${({ theme }) => `${theme.spacing.min}  ${theme.spacing.xs}`};
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex: 1;

      &::after {
        background-color: ${({ theme }) => theme.colors.dark.lightest.hex};
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        content: "";
        width: 1px;
        height: 100%;
      }

      &:last-of-type::after {
        display: none;
      }
    }
  }

  .spacer {
    flex: 1;
  }

  .price {
    margin-bottom: ${({ theme }) => theme.spacing.sm};

    &__wrapper {
      display: inline-block;
    }
  }
`
