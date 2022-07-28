import React, { useContext, useEffect, useState } from 'react'
import { BannerContent, ChannelList, CountrySearchInput, Header } from '../components/shared'
import { CountriesContext } from '../components'
import { getChannels } from '../http'

const DirectoryCountry = () => {
  const countriesContext = useContext(CountriesContext)
  const country = countriesContext.selectedCountry
  const [channels, setChannels] = useState({})

  useEffect(() => {
    const loadChannels = async () => {
      const response = await getChannels(`country=${country?.alpha2}`)
      setChannels(response.data)
    }

    if (country?.alpha2) {
      loadChannels()
    }
  }, [country?.alpha2])

  return (
    <>
      <section className="home-banner">
        <Header />
        <article className="tx-c co-white">
          <div className="wrapper will-grow">
            <BannerContent
              title={`USSD Directory for ${country?.name}`}
              subtitle="Find USSD codes across Africa. We have thousands of entries across mobile network operators, banks,
              telcos, industries and utilities."
            />
            <CountrySearchInput />
          </div>
        </article>
      </section>
      <section>
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
          <form className="uk-search uk-search-default max-365">
            <a href="" className="uk-search-icon">
              <svg width="24" height="24">
                <use href="/uploads/icon-sprite.svg#search"></use>
              </svg>
            </a>
            <input
              className="uk-search-input bg-white picotext h-48"
              type="search"
              placeholder="Search bank, telecom, mobile money, etc"
              id="searchFilter"
            />
          </form>

          <ChannelList channels={channels} country={country} />
        </div>
      </section>
    </>
  )
}

export default DirectoryCountry