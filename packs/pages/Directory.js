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
      <ul className="uk-subnav filter">
        <li className="sub-filter on-active">
          <p>All</p>
        </li>
        <li className="sub-filter">
          <p>Banking</p>
        </li>
        <li className="sub-filter">
          <p>Telco</p>
        </li>
        <li className="sub-filter">
          <p>Mobile Money</p>
        </li>
      </ul>
      <div className="wrapper will-grow">
        <ChannelList channels={channels} />
      </div>
    </>
  )
}

export default Directory
