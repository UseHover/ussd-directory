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
        <ChannelList channels={channels} country={country} />
      </section>
    </>
  )
}

export default DirectoryCountry
