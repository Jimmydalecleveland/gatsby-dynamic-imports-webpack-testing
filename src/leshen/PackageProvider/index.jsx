import React from 'react'
import PropTypes from 'prop-types'
import { Done } from 'emotion-icons/material'

import Brandy from '../Brandy'
import Typography from '../Typography'
import Price from '../Price'
import List from '../List'
import ListItem from '../List/ListItem'

const PackageProvider = ({ name, price, termsLink, details, bullets }) => (
  <>
    {name && (
      <Typography variant="h5" className="title">
        {name}
      </Typography>
    )}
    {details && (
      <div className="details">
        {details.map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
    )}
    {price && price.amount && (
      <Price className="price" {...price}>
        {price.disclaimer && (
          <Brandy
            symbol={price.disclaimer.symbol}
            text={price.disclaimer.text}
            variant="legal"
          />
        )}
      </Price>
    )}
    {bullets.length > 0 && (
      <List>
        {bullets.map((bullet) => (
          <ListItem key={bullet.text} icon={<Done />}>
            <Typography>{bullet.text}</Typography>
            {bullet.disclaimer && (
              <Brandy variant="legal" text={bullet.disclaimer.text} />
            )}
          </ListItem>
        ))}
      </List>
    )}
    {termsLink && (
      <a href="/terms" className="terms">
        {termsLink}
      </a>
    )}
  </>
)

PackageProvider.defaultProps = {
  name: '',
  termsLink: '',
  legal: null,
  details: [],
  bullets: [],
}

PackageProvider.propTypes = {
  name: PropTypes.string,
  price: PropTypes.shape({
    label: PropTypes.string,
    amount: PropTypes.string.isRequired,
    disclaimer: PropTypes.shape({
      symbol: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  }).isRequired,
  legal: PropTypes.node,
  termsLink: PropTypes.string,
  // TODO: use callback proptype the check the length > 3
  details: PropTypes.arrayOf(PropTypes.string),
  bullets: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      disclaimer: PropTypes.shape({
        symbol: PropTypes.string,
        text: PropTypes.string.isRequired,
      }),
    })
  ),
}

export default PackageProvider

export const ticketID = 'CMS-149'
