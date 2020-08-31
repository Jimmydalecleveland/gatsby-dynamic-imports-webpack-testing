/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import * as Styled from './Table.styles'

const addStickyClass = (i, sticky) => (i === 0 && sticky ? 'sticky' : '')

const Table = ({ json, ...props }) => (
  <Styled.TableWrapper>
    <Styled.Table {...props}>
      <thead>
        <tr>
          {json.headings.map((heading, i) => (
            <th key={heading} className={addStickyClass(i, json.sticky)}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {json.rows.map((row) => (
          <tr key={uuid()}>
            {row.map((item, i) => (
              <td
                key={uuid()}
                className={addStickyClass(i, json.sticky)}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  </Styled.TableWrapper>
)

Table.propTypes = {
  json: PropTypes.shape({
    headings: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    sticky: PropTypes.bool,
  }).isRequired,
}

export default Table

export const ticketID = 'CMS-177'
