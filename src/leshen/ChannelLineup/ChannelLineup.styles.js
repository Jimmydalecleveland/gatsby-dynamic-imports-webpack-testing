import styled from '@emotion/styled'
import { rem } from 'polished'
import { Search, Cancel } from 'emotion-icons/material'

export const Table = styled.table`
  font-size: ${({ theme }) => rem(theme.fonts.body.md.size)};
  font-weight: ${({ theme }) => theme.fonts.body.md.weight};
  font-family: inherit;
  width: 100%;
  border-spacing: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => rem(theme.fonts.body.xs.size)};
  }
`

export const TableWrapper = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.light.base.hex};
  border-bottom: 2px solid ${({ theme }) => theme.colors.light.base.hex};
  width: 100%;
  max-height: 400px;
  position: relative;
  white-space: nowrap;
  overflow: auto;
  z-index: 2;
`

export const THead = styled.thead`
  tr th {
    text-align: left;
    font-weight: ${({ theme }) => theme.fonts.subheadings.md.weight};
    white-space: normal;
  }

  tr th:not(:first-of-type) {
    text-align: center;
  }
`

export const TD = styled.td`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.light.base.hex};
  text-align: center;
  background-color: white;
  white-space: pre-wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xs};
  }
`

export const TH = styled.th`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.light.base.hex};
  position: sticky;
  text-align: left;
  background-color: white;
  font-weight: inherit;
  white-space: pre-wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xxs};
  }
`

export const THLabel = styled(TH)`
  box-shadow: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary.base.hex};
  top: 0;
  left: 0;
  z-index: 20;
`

export const THTopSticky = styled(TH)`
  box-shadow: 0 0.3rem 1rem -0.3rem rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary.base.hex};
  top: 0;
  z-index: 10;
`

export const THSideSticky = styled(TH)`
  box-shadow: ${({ theme }) => theme.shadow};
  min-width: 125px;
  border-left: 0;
  left: 0;
`

export const FilterContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.dark.base.hex};
`

export const Filter = styled.input`
  font-family: ${({ theme }) => theme.fonts.body.family};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.lg}`};
  border: 1px solid ${({ theme }) => theme.colors.light.darker.hex};
  border-radius: ${({ theme }) => theme.radius};
  background-color: white;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark.lightest.hex};
  }

  &:invalid {
    box-shadow: none;
  }
`

export const FilterControl = styled.div`
  position: relative;
  display: inline-block;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

export const IconContainer = styled.span`
  /* TODO ask about a better way to handle this  */
  ${({ direction }) => (direction === 'left' ? 'left' : 'right')}: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 2.5em;
  z-index: 2;
`

export const SearchIcon = styled(Search)`
  fill: ${({ theme }) => theme.colors.dark.lightest.hex};
  position: absolute;
  left: 0.4em;
  top: 0;
  bottom: 0;
  overflow: visible;
`

export const CancelIcon = styled(Cancel)`
  fill: ${({ theme }) => theme.colors.light.darker.hex};
  position: absolute;
  right: 0.5em;
  top: 0;
  bottom: 0;
  overflow: visible;

  &:hover {
    cursor: pointer;
  }
`
