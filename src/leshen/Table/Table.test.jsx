import React from 'react'
import { render } from 'setup-tests'
import Table from '.'

import { tableData, stickyTableData } from './dummyData'

describe('Table', () => {
  test('Table should render', () => {
    const { container } = render(<Table json={tableData} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('Table should render with sticky header', () => {
    const { container } = render(<Table json={stickyTableData} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
