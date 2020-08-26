import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import useOnScroll from '../../hooks/useOnScroll'
import CTABar from '.'
import * as Styled from './CTABar.styles'

const StickyBar = ({ children, showOriginal }) => {
  const { scrollRef, scrolledTo } = useOnScroll()

  const stickyBarRef = useRef()
  const [stickyBarHeight, setStickyBarHeight] = useState(80)

  useEffect(() => {
    setStickyBarHeight(stickyBarRef.current.clientHeight)
  }, [stickyBarRef])

  return (
    <>
      <Global
        styles={css`
          body {
            margin-bottom: ${stickyBarHeight}px;
          }
        `}
      />
      {showOriginal && <CTABar className="original">{children}</CTABar>}
      <div id="sticky-ref" ref={scrollRef} />
      <Styled.StickyBar
        ref={stickyBarRef}
        id="sticky-bar"
        isVisible={scrolledTo}
      >
        <CTABar className="sticky">{children}</CTABar>
      </Styled.StickyBar>
    </>
  )
}

StickyBar.defaultProps = {
  showOriginal: false,
}

StickyBar.propTypes = {
  children: PropTypes.node.isRequired,
  showOriginal: PropTypes.bool,
}

export default StickyBar
