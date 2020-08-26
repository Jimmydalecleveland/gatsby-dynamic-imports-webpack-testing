import styled from '@emotion/styled'

export const Table = styled.table`
  font-size: ${({ theme }) => theme.fonts.body.md.size}px;
  font-weight: ${({ theme }) => theme.fonts.body.md.weight};

  font-family: inherit;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  thead tr th {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.base.hex};
    text-align: left;
    font-weight: inherit;
  }

  th,
  td {
    padding: ${({ theme }) => theme.spacing.sm};
    min-width: 125px;
    background-color: white;
    color: ${({ theme }) => theme.colors.dark.base.hex};
    border: 0;
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.light.base.hex};
    white-space: pre-wrap;
  }

  td.sticky,
  th.sticky {
    position: sticky;
    left: 0px;
    min-width: 125px;
    box-shadow: ${({ theme }) => theme.shadow};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      box-shadow: none;
    }
  }

  .sticky p {
    max-width: 100px;
  }
`

export const TableWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light.base.hex};
  width: 100%;
  position: relative;
  overflow: auto;
  white-space: nowrap;
`
