import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { stripUnit, rem } from 'polished'

export const buttonStyles = ({
  color,
  theme,
  rounded,
  shadow,
  variant,
  outlined,
  ghost,
  leftIcon,
  rightIcon,
}) => {
  let borderRadius
  let colorAdjustment = 'dark'

  if (rounded === 'min') {
    borderRadius = theme.radius
  } else if (rounded === 'max') {
    borderRadius = '2em'
  } else {
    borderRadius = 'none'
  }

  if (!theme.colors[color].dark) {
    colorAdjustment = 'light'
  }

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.xxs} ${theme.spacing.sm};
    font: inherit;
    color: ${theme.colors[color].base.readable};
    background-color: ${theme.colors[color].base.hex};
    border: 0;
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: all 0.3s;
    -webkit-appearance: button;

    > * {
      pointer-events: none;
    }

    .button-text {
      ${leftIcon && `margin-left: ${theme.spacing.xxs}`};
      ${rightIcon && `margin-right: ${theme.spacing.xxs}`};
    }

    &:hover {
      color: ${theme.colors[color][colorAdjustment].readable};
      background-color: ${theme.colors[color][colorAdjustment].hex};
    }

    &:active {
      color: ${theme.colors[color][`${colorAdjustment}er`].readable};
      background-color: ${theme.colors[color][`${colorAdjustment}er`].hex};
    }

    /* TODO: determine design system specifications for this state */
    &:disabled {
      background-color: ${theme.colors.light.darkest.hex};
      color: ${theme.colors.dark.lightest.hex};
    }

    ${shadow && `box-shadow: ${theme.shadow}`};

    ${
      variant === 'small' &&
      `
      padding: ${theme.spacing.min} ${theme.spacing.xxs};
      `
    };

    ${
      ghost &&
      `
      color: ${theme.colors[color].base.hex};
      box-shadow: none;
      background-color: transparent;
      `
    }

    ${
      variant === 'feature' &&
      `
      padding-top: ${theme.spacing.xs};
      padding-bottom: ${theme.spacing.xs};

      .button-text {
        margin-left: ${leftIcon ? theme.spacing.xs : ''};
        margin-right: ${rightIcon ? theme.spacing.xs : ''};
      }
      `
    }

    ${
      outlined &&
      `
      background-color: transparent;
      color: ${theme.colors[color].base.hex};
      border: 2px solid ${theme.colors[color].base.hex};

      &:hover {
        background-color: transparent;
        color: ${theme.colors[color][colorAdjustment].hex};
        border-color: ${theme.colors[color][colorAdjustment].hex};
      }

      &:active {
        background-color: transparent;
        color: ${theme.colors[color][`${colorAdjustment}er`].hex};
        border-color: ${theme.colors[color][`${colorAdjustment}er`].hex};
      }
    `
    };

    ${
      variant === 'mega' &&
      css`
        padding: ${theme.spacing.sm} ${theme.spacing.max};
        justify-self: stretch;
        flex-direction: column;

        .button-text {
          margin-top: ${leftIcon && theme.spacing.sm};
          margin-bottom: ${rightIcon && theme.spacing.sm};
          margin-left: 0;
          margin-right: 0;
        }
      `
    }

    ${
      variant === 'hero' &&
      `
      padding-top: ${theme.spacing.sm};
      padding-bottom: ${theme.spacing.sm};
      padding-left: ${
        leftIcon
          ? rem(stripUnit(theme.spacing.xl) - stripUnit(theme.spacing.min))
          : theme.spacing.xl
      };
      padding-right: ${
        rightIcon
          ? rem(stripUnit(theme.spacing.xl) - stripUnit(theme.spacing.min))
          : theme.spacing.xl
      };

      .button-text {
        margin-left: ${leftIcon ? theme.spacing.sm : ''};
        margin-right: ${rightIcon ? theme.spacing.sm : ''};
      }
    `
    }
  `
}

export const Button = styled.button(buttonStyles)
