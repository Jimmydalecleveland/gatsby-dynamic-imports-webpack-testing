import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Lens as Disc } from 'emotion-icons/material'

import * as Styled from './ChannelLineup.styles'
import Link from '../Link'

const Table = memo(({ packages, channels }) => (
  <Styled.Table>
    <Styled.THead>
      <tr>
        <Styled.THLabel>Channels</Styled.THLabel>
        {packages.map((packageItem) => (
          <Styled.THTopSticky key={packageItem.node.name}>
            {packageItem.node.name}
          </Styled.THTopSticky>
        ))}
      </tr>
    </Styled.THead>
    <tbody>
      {channels.map(({ node: channel }) => (
        <tr key={channel.name}>
          <Styled.THSideSticky>
            {channel.url ? (
              <Link to={channel.url}>{channel.name}</Link>
            ) : (
              channel.name
            )}
          </Styled.THSideSticky>
          {packages.map(({ node: packageItem }) => (
            <Styled.TD key={packageItem.brandy_id}>
              {channel.packageAvailability.includes(packageItem.brandy_id) && (
                <Disc size="0.75em" />
              )}
            </Styled.TD>
          ))}
        </tr>
      ))}
    </tbody>
  </Styled.Table>
))

Table.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        brandy_id: PropTypes.string.isRequired,
        packageAvailability: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    })
  ).isRequired,
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        brandy_id: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default Table
