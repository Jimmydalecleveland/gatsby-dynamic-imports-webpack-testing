import {
  lighten,
  darken,
  saturate,
  desaturate,
  readableColor,
  complement,
  parseToHsl,
  parseToRgb,
  getLuminance,
} from 'polished'
import PropTypes from 'prop-types'

export const makeColorObject = (color) => ({
  hex: color,
  hsl: parseToHsl(color),
  rgb: parseToRgb(color),
  readable: readableColor(color),
  complemented: complement(color),
  complementedReadable: readableColor(complement(color)),
})

export const makeColors = (colors) => {
  const renderedColors = {}

  Object.keys(colors).forEach((color) => {
    const c = colors[color]

    // Only single color properties required for each of these.
    const utilColors = ['warning', 'error', 'success']

    if (c) {
      if (utilColors.includes(color)) {
        renderedColors[color] = {
          base: makeColorObject(c),
        }
      } else if (color === 'dark') {
        // The dark color needs more light shades and less dark
        renderedColors[color] = {
          lightest: makeColorObject(lighten(0.15, c)),
          lighter: makeColorObject(lighten(0.1, c)),
          light: makeColorObject(lighten(0.05, c)),
          base: makeColorObject(c),
          darker: makeColorObject(darken(0.15, c)),
        }
      } else if (color === 'light') {
        // The light color needs more dark shades and less light
        renderedColors[color] = {
          lighter: makeColorObject(lighten(0.15, c)),
          base: makeColorObject(c),
          dark: makeColorObject(darken(0.05, c)),
          darker: makeColorObject(darken(0.1, c)),
          darkest: makeColorObject(darken(0.15, c)),
        }
      } else {
        const luminance = getLuminance(c)
        /**
         * The purpose of this block is to determine if a color is very dark, and if so,
         * adjust the amount that it lightens or darkens each shade by. This is so that
         * the adjustment for darker colors is lessened so they do not become nearly black
         * and vice versa for lighter colors.
         *
         * If luminance is less than 40% it is a very dark color.
         * If the above is not true, the default threshold for light and dark is 10%.
         * If it is true, the dark threshold should be 6%, and the light threshold 14%.
         */
        const darkThreshold = luminance < 0.4 ? 0.06 : 0.1
        const lightThreshold = luminance < 0.4 ? 0.14 : 0.1

        /**
         * Each property, excluding base, is lightened and then saturated or
         * darkened and desaturated by the above determined thresholds in increments.
         * e.g. "lighter" is twice the determined threshold for light, so the lightness
         * and saturation thresholds are both doubled.
         */
        renderedColors[color] = {
          lighter: makeColorObject(
            lighten(lightThreshold * 2, saturate(lightThreshold * 2, c))
          ),
          light: makeColorObject(
            lighten(lightThreshold, saturate(lightThreshold, c))
          ),
          base: makeColorObject(c),
          dark: makeColorObject(
            darken(darkThreshold, desaturate(darkThreshold, c))
          ),
          darker: makeColorObject(
            darken(darkThreshold * 2, desaturate(darkThreshold * 2, c))
          ),
        }
      }
    }
  })

  return renderedColors
}

export default {
  name: 'default',
  colors: makeColors({
    primary: '#0f6bc0',
    secondary: '#8036ff',
    tertiary: '#3af7d1',
    dark: '#383d43',
    light: '#f4f5f6',
    warning: '#ff7928',
    error: '#ff3068',
    success: '#2de6bc',
  }),
  prominent: 'dark',
  fonts: {
    headings: {
      family: 'sans-serif',
      lg: {
        size: [32, 52],
        lineHeight: [38, 60],
        weight: 800,
      },
      md: {
        size: [28, 48],
        lineHeight: [32, 56],
        weight: 800,
      },
      sm: {
        size: [24, 40],
        lineHeight: [28, 48],
        weight: 800,
      },
    },
    subheadings: {
      lg: {
        size: [22, 28],
        lineHeight: [24, 36],
        weight: 500,
      },
      md: {
        size: [20, 24],
        lineHeight: [24, 32],
        weight: 500,
      },
      sm: {
        size: [18, 20],
        lineHeight: [24, 28],
        weight: 500,
      },
    },
    body: {
      family: 'sans-serif',
      lg: {
        size: 18,
        lineHeight: 24,
      },
      md: {
        size: 16,
        lineHeight: 22,
      },
      sm: {
        size: 14,
        lineHeight: 22,
      },
      xs: {
        size: 12,
        lineHeight: 16,
      },
      xxs: {
        size: 10,
        lineHeight: 12,
      },
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '540px',
    md: '768px',
    lg: '940px',
    xl: '1200px',
  },
  spacing: {
    min: '4px',
    xxs: '8px',
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
    max: '88px',
  },
  shadow: '0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1)',
  radius: '4px',
}

/**
 * TODO: These props should be more complete, but due to the dynamic nature
 * of determining light and dark properties it will take more time to think through.
 */
export const propsShape = {
  theme: PropTypes.shape({
    name: PropTypes.string,
    colors: PropTypes.shape({
      primary: PropTypes.shape({
        base: PropTypes.shape({
          hex: PropTypes.string.isRequired,
          hsl: PropTypes.shape({
            hue: PropTypes.number.isRequired,
            saturation: PropTypes.number.isRequired,
            lightness: PropTypes.number.isRequired,
            alpha: PropTypes.number,
          }),
          rgb: PropTypes.shape({
            red: PropTypes.number.isRequired,
            green: PropTypes.number.isRequired,
            blue: PropTypes.number.isRequired,
            alpha: PropTypes.number,
          }),
          readable: PropTypes.string.isRequired,
          complemented: PropTypes.string.isRequired,
          complementedReadable: PropTypes.string.isRequired,
        }),
      }).isRequired,
    }),
  }).isRequired,
}
