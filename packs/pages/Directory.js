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
        <li className="sub-filter on-active" id="all">
          <p>All</p>
        </li>
        <li className="sub-filter" id="bank">
          <p>Banking</p>
        </li>
        <li className="sub-filter" id="telecom">
          <p>Telco</p>
        </li>
        <li className="sub-filter" id="mmo">
          <p>Mobile Money</p>
        </li>
      </ul>
      <div className="wrapper will-grow">
        <form className="uk-search uk-search-default max-365">
          <a href="" className="uk-search-icon">
            <svg width="24" height="24">
              <use href="/uploads/icon-sprite.svg#search"></use>
            </svg>
          </a>
          <input className="uk-search-input bg-white picotext h-48" type="search" placeholder="Search institution" />
        </form>

        <ChannelList channels={channels} />
      </div>
    </>
  )
}

export default Directory
