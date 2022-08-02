import React, { useEffect, useState } from 'react'
import { BannerContent, ChannelList, CountrySearchInput, Header } from '../components/shared'
import { getChannels } from '../http'

const Home = () => {
  const [channels, setChannels] = useState({})

  useEffect(() => {
    const loadChannels = async () => {
      const response = await getChannels('', 50)
      setChannels(response.data)
    }

    loadChannels()
  }, [])

  return (
    <>
      <section className="home-banner">
        <Header />
        <article className="tx-c co-white">
          <div className="wrapper will-grow">
            <BannerContent
              title="USSD Directory for 30+ countries"
              subtitle="Find USSD codes across Africa. We have thousands of entries across mobile network operators, banks,
              telcos, industries and utilities."
            />
            <CountrySearchInput />
          </div>
        </article>
      </section>

      <section>
        <ChannelList channels={channels} />
      </section>
    </>
  )
}

export default Home
