import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../leshen/theme'

const Wrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Wrapper