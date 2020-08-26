import theme, { makeColors, makeColorObject } from './theme'
import themeFixture from './example-theme-output'

const PX_VALUE_REGEX = expect.stringMatching(/^\d+px$/)

const desiredBreakpoints = {
  xs: PX_VALUE_REGEX,
  sm: PX_VALUE_REGEX,
  md: PX_VALUE_REGEX,
  lg: PX_VALUE_REGEX,
  xl: PX_VALUE_REGEX,
}

const desiredSpacing = {
  min: PX_VALUE_REGEX,
  xxs: PX_VALUE_REGEX,
  xs: PX_VALUE_REGEX,
  sm: PX_VALUE_REGEX,
  md: PX_VALUE_REGEX,
  lg: PX_VALUE_REGEX,
  xl: PX_VALUE_REGEX,
  xxl: PX_VALUE_REGEX,
  max: PX_VALUE_REGEX,
}

describe('theme', () => {
  test('theme output matches expected', () => {
    expect(theme.breakpoints).toEqual(desiredBreakpoints)
    expect(theme.spacing).toEqual(desiredSpacing)
    expect(theme.colors).toMatchObject(themeFixture.colors)
  })

  test('makeColorObject takes a color and returns an object with theme properties', () => {
    const expectedOutput = {
      hex: '#bada55',
      hsl: {
        hue: 74.4360902255639,
        saturation: 0.6425120772946858,
        lightness: 0.5941176470588235,
      },
      rgb: { red: 186, green: 218, blue: 85 },
      readable: '#000',
      complemented: '#7555da',
      complementedReadable: '#fff',
    }
    expect(makeColorObject('#bada55')).toEqual(expectedOutput)
  })

  describe('makeColors', () => {
    const customColors = {
      primary: '#0f6bc0',
      secondary: '#8036ff',
      tertiary: '#3af7d1',
      dark: '#383d43',
      light: '#f4f5f6',
      warning: '#ff7928',
      error: '#ff3068',
      success: '#2de6bc',
    }
    const output = makeColors(customColors)

    test('"primary" theme color should have correct keys', () => {
      const expectedPrimaryKeys = ['lighter', 'light', 'base', 'dark', 'darker']

      expect(Object.keys(output.primary).sort()).toEqual(
        expectedPrimaryKeys.sort()
      )
    })

    test('"light" theme color should have correct keys', () => {
      const expectedLightKeys = ['lighter', 'base', 'dark', 'darker', 'darkest']
      expect(Object.keys(output.light).sort()).toEqual(expectedLightKeys.sort())
    })

    test('"dark" theme color should have correct keys', () => {
      const expectedDarkKeys = [
        'lightest',
        'lighter',
        'light',
        'base',
        'darker',
      ]
      expect(Object.keys(output.dark).sort()).toEqual(expectedDarkKeys.sort())
    })
  })
})
