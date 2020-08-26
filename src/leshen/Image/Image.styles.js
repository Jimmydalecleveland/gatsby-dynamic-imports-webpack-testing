import styled from '@emotion/styled'
import GatsbyImg from 'gatsby-image'

export const Img = styled(GatsbyImg)`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${({ theme, hasMarginBottom }) =>
    hasMarginBottom && theme.spacing.md};
`

export const SVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    max-width: ${(props) => props.maxWidth};
  }
`
