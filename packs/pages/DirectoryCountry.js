import React, { useContext, useEffect, useState } from 'react'
import { BannerContent, CountrySearchInput, Header, Loader } from '../components/shared'
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

  console.log({ channels })
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

          <section className="code-head">
            <div className="space-between-groups flex-wrap">
              <p className="ff-bold smalltext no-wrap mb-1 mx-auto ml-0">{countriesContext.selectedCountry?.name}</p>
              <div className="switcher d-flx flt-r show-mediumup">
                <button id="btn1" className="mr-1 active">
                  <p className="mr-1h">Grid view</p>
                  <svg width="25" height="24">
                    <use href="/uploads/icon-sprite.svg#grid-box"></use>
                  </svg>
                </button>
                <button id="btn2" className="">
                  <p className="mr-1h">List view</p>
                  <svg width="26" height="24">
                    <use href="/uploads/icon-sprite.svg#list-box"></use>
                  </svg>
                </button>
              </div>
            </div>
            <section>
              {Object.keys(channels).length === 0 ? (
                <Loader />
              ) : (
                <div id="ussdList" className="">
                  <ul id="ulList" className="gridstyle">
                    {channels.data.map(channel => (
                      <li className="list-card" key={channel.id}>
                        <div className="space-between-groups listly mb-1h">
                          <p className="ff-medium lh-24">{channel.attributes.name}</p>
                          <p className="co-purple picotext uppercase ff-medium mr-2-0">
                            {channel.attributes.country_alpha2}
                          </p>
                        </div>
                        <a
                          href={`tel:${channel.attributes.root_code}`}
                          id="myInput"
                          className="h5 smalltext lh-32 mt-0 mb-1h"
                        >
                          {channel.attributes.root_code}
                        </a>
                        <p className="copy no-wrap mb-1h ff-medium">{channel.attributes.institution_type}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
            <a href="/directory" className="ff-medium co-blue mt-3 microtext d-none fit-content mx-auto" id="view">
              View more
            </a>
          </section>
        </div>
      </section>
    </>
  )
}

export default DirectoryCountry
