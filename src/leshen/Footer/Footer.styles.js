import styled from '@emotion/styled'
import Section from '../Section'
import Typography from '../Typography'

export const TopSection = styled(Section)`
  padding-top: ${({ theme }) => theme.spacing.lg} !important;
  padding-bottom: ${({ theme }) => theme.spacing.lg} !important;
  border-bottom: 1px solid
    ${({ theme, dark }) =>
      dark ? theme.colors.dark.lighter.hex : theme.colors.light.dark.hex};

  .logo {
    display: inline-block;
    max-width: 200px;
  }
`

export const BottomSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
  grid-row-gap: ${({ theme }) => theme.spacing.md};
  grid-column-gap: ${({ theme }) => theme.spacing.md};

  padding-top: ${({ theme }) => theme.spacing.lg} !important;
  padding-bottom: ${({ theme }) => theme.spacing.lg} !important;
`

export const LegalSection = styled(Section)`
  padding-top: ${({ theme }) => theme.spacing.lg} !important;
  padding-bottom: ${({ theme }) => theme.spacing.lg} !important;
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.dark.light.hex : theme.colors.light.dark.hex};
`

export const Nav = styled.nav`
  a {
    display: block;
    padding-bottom: 1em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

export const GroupLabel = styled(Typography)`
  margin-top: 0;
  font-weight: ${({ theme }) => theme.fonts.subheadings.md.weight};
`
