import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import Fuse from "fuse.js"
import { useDebounce, useDebouncedCallback } from "use-debounce"

import * as Styled from "./ChannelLineup.styles"
import Table from "./Table"
import chunkArray from "../utils/chunkArray"

const ChannelLineup = ({ data }) => {
  const [userFilter, setUserFilter] = useState("")
  const [debouncedUserFilter] = useDebounce(userFilter, 300)
  const tableRef = useRef()

  const { channels, packages } = data

  const updateFilter = e => {
    setUserFilter(e.target.value)
  }

  const channelArray = channels.edges

  // TODO: clean up fuse fuzzy filtering - investigate fuse options
  // there are multiple options such as threshold that we weren't
  // sure how to use properly, yet.
  const fuse = new Fuse(channelArray, {
    shouldSort: true,
    keys: ["node.name"],
  })

  const fuseResults = fuse.search(debouncedUserFilter)

  // Take the data and break it into chunks so that we can load it more efficiently
  const chunks = chunkArray(channelArray, 20)

  const [loadedChunk, setLoadedChunk] = useState(chunks[0])
  const [chunkIndex, setChunkIndex] = useState(1)

  const handleScroll = () => {
    if (
      tableRef.current.scrollHeight - tableRef.current.scrollTop - 200 <=
      tableRef.current.clientHeight
    ) {
      if (chunkIndex <= chunks.length - 1) {
        setChunkIndex(chunkIndex + 1)
        setLoadedChunk(prevLoadedChunks => [
          ...prevLoadedChunks,
          ...chunks[chunkIndex],
        ])
      }
    }
  }

  const [debouncedHandleScroll] = useDebouncedCallback(() => {
    handleScroll()
  }, 5)

  return (
    <div>
      <Styled.FilterContainer>
        <Styled.FilterControl>
          <Styled.Filter
            data-testid="ChannelLineup-input"
            data-tracking="channel-lineup__input"
            placeholder="Search"
            type="text"
            value={userFilter}
            onChange={updateFilter}
          />
          <Styled.IconContainer direction="left">
            <Styled.SearchIcon size="1.5em" />
          </Styled.IconContainer>
          {userFilter !== "" && (
            <Styled.IconContainer
              direction="right"
              data-testid="ChannelLineup-cancel"
              onClick={() => setUserFilter("")}
              onKeyDown={e => e.keyCode === 13 && setUserFilter("")}
              tabIndex="0"
            >
              <Styled.CancelIcon size="1.5em" />
            </Styled.IconContainer>
          )}
        </Styled.FilterControl>
      </Styled.FilterContainer>
      <Styled.TableWrapper ref={tableRef} onScroll={debouncedHandleScroll}>
        <Table
          channels={fuseResults.length > 0 ? fuseResults : loadedChunk}
          packages={packages.edges}
        />
      </Styled.TableWrapper>
    </div>
  )
}

ChannelLineup.defaultProps = {
  data: {},
}

ChannelLineup.propTypes = {
  data: PropTypes.shape(),
}

export default ChannelLineup
