import React from 'react'
import PropTypes from 'prop-types'
import { Done } from 'emotion-icons/material'

import Typography from '../Typography'
import Brandy from '../Brandy'
import ListItem from '../List/ListItem'
import Price from '../Price'
import * as Styled from './PackageCard.styles'

const PackageCard = ({ label, packageData, cta, children }) => (
  <div>
    <Styled.PackageCard>
      {label && (
        <Typography variant="small" className="label">
          {label}
        </Typography>
      )}

      {packageData.name && (
        <Typography variant="h5" className="title">
          {packageData.name}
        </Typography>
      )}
      {packageData.details && (
        <div className="details">
          {packageData.details.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      )}
      <Price className="price" {...packageData.price}>
        {packageData.price.disclaimer && (
          <Styled.Disclaimer
            symbol={packageData.price.disclaimer.symbol}
            text={packageData.price.disclaimer.text}
            variant="legal"
          />
        )}
      </Price>
      {packageData.bullets && (
        <Styled.Bullets>
          {packageData.bullets.map((bullet) => (
            <ListItem key={bullet.text} icon={<Done />}>
              <Brandy text={bullet.text} variant="body" />
              {bullet.disclaimer && (
                <Brandy
                  symbol={bullet.disclaimer.symbol}
                  text={bullet.disclaimer.text}
                  variant="legal"
                />
              )}
            </ListItem>
          ))}
        </Styled.Bullets>
      )}
      {children}

      <div className="spacer" />
      {cta && cta}
    </Styled.PackageCard>
  </div>
)

PackageCard.defaultProps = {
  label: '',
  cta: null,
  children: null,
}

PackageCard.propTypes = {
  label: PropTypes.string,
  packageData: PropTypes.shape({
    name: PropTypes.string,
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
    price: PropTypes.shape({
      amount: PropTypes.string.isRequired,
      disclaimer: PropTypes.shape({
        symbol: PropTypes.string,
        text: PropTypes.string.isRequired,
      }),
    }),
    disclaimer: PropTypes.string,
  }).isRequired,
  cta: PropTypes.element,
  children: PropTypes.node,
}

export default PackageCard

export const ticketID = 'CMS-169'
