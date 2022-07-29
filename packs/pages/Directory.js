import React, { useEffect, useState } from 'react'
import { ChannelList, CountrySearchInput, Header } from '../components/shared'
import { getChannels } from '../http'

const Directory = () => {
  const [channels, setChannels] = useState({})

  useEffect(() => {
    const loadChannels = async () => {
      const response = await getChannels()
      setChannels(response.data)
    }

    loadChannels()
  }, [])

  return (
    <>
      <Header hasBanner={false} />
      <CountrySearchInput hasBanner={false} />
      <ChannelList channels={channels} />
    </>
  )
}

export default Directory
