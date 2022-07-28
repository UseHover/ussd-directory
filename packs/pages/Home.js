import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../components/shared/Header'
import { CountriesContext } from '../components'

const Home = () => {
  const countriesContext = useContext(CountriesContext)
  const [countries, setCountries] = useState([])
  const countryListRef = useRef(null)

  const countrySearchOnBlur = () => {
    countryListRef.current.classList.remove('uk-open')
  }

  const countrySearchOnClick = () => {
    const classList = countryListRef.current.classList

    if (classList.contains('uk-open')) {
      classList.remove('uk-open')
      return
    }

    classList.add('uk-open')
  }

  const filterCountries = event => {
    countryListRef.current.classList.add('uk-open')
    const value = event.currentTarget.value.toLowerCase()

    if (value.length === 0) {
      setCountries(countriesContext.countries)
      return
    }

    setCountries([
      ...countries.filter(c => {
        const name = c.name.toLowerCase()
        return name.indexOf(value) !== -1 || name === value
      }),
    ])
  }

  useEffect(() => setCountries(countriesContext.countries), [countriesContext.countries])

  return (
    <>
      <section className="home-banner">
        <Header />
        <article className="tx-c co-white">
          <div className="wrapper will-grow">
            <h1 className="co-white mb-1h">USSD Directory for 30+ countries</h1>
            <p className="max-527 mx-auto lh-31">
              Find USSD codes across Africa. We have thousands of entries across mobile network operators, banks,
              telcos, industries and utilities.
            </p>
            <section className="max-667 mx-auto pos-r">
              <form className="uk-search uk-search-default mt-5" type="button" id="searchCountryForm">
                <a href="" className="uk-search-icon">
                  <svg width="24" height="24">
                    <use href="/uploads/icon-sprite.svg#search"></use>
                  </svg>
                </a>

                <input
                  id="searchInput"
                  className="uk-search-input dropbtn bg-white"
                  placeholder="Search country"
                  autoComplete="off"
                  onClick={countrySearchOnClick}
                  onBlur={countrySearchOnBlur}
                  onInput={filterCountries}
                />
              </form>
              <ul
                ref={countryListRef}
                className="bg-white search-drop dropdown-content uk-drop uk-drop-bottom-left"
                style={{ left: '49px', top: '70px' }}
                id="countrySearch"
              >
                {countries.map(country => (
                  <li className="d-flx al-i-c p-2 py-1 country" key={country.alpha2}>
                    <span className="country">{String.fromCodePoint(...country.codePoints)}</span>
                    <p className="co-black ff-medium nanotext">{country.name}</p>
                  </li>
                ))}
              </ul>
            </section>
            .
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
              <p className="ff-bold smalltext no-wrap mb-1 mx-auto ml-0">All Countries</p>
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
              <div className="code-container">
                <div id="loader"></div>
              </div>
              <div id="ussdList"></div>
            </section>
            <a href="/directory" className="ff-medium co-blue mt-3 microtext d-none fit-content mx-auto" id="view">
              View more
            </a>
          </section>
        </div>
      </section>

      <section className="wrapper will-grow d-flx gsm-section bg-lightblue">
        <div className="mb-2 width-100-pc max-474">
          <h2 className="mb-1h mt-1">Get Stax</h2>
          <p className="lh-31 mb-2h">
            Never dial a USSD Code Again. Let Stax do it for you. Stax makes it simpler and easier for you to send
            money, buy airtime, request money, check your account balance, and do more with your bank and mobile money
            accounts. It leverages USSD automation technology to give you more control of your money. No need to
            remember different USSD codes, switch from bank app to fintech app or biller to biller ever again. Best part
            is - it works offline.
          </p>
          <a href="https://stax.onelink.me/nR0j/ussddirectory" target="_blank" rel="noreferrer">
            <img className="google-play mr-2 mb-2" src="/uploads/play.png" alt="Google-play" />
          </a>
        </div>
        <img className="gsm" src="/uploads/gsm.png" alt="mobile app view" />
      </section>

      <section className="wrapper will-grow negate-bottom">
        <h4 className="co-deepblack mb-5 h2 mt-5h">USSD blog</h4>
        <div id="recent-blog-posts" className="row overflow-hidden grid mostly-3">
          <template>
            <div className="col-lg-3 col-md-5 blog-post-thumb-container">
              <div className="skewed-bg-bottom-left position-relative mid-grey-bg blog-post-thumb">
                <a href="" className="stretched-link">
                  <img src="" className="featured-img" alt="" />
                  <h3 className="title"></h3>
                </a>
              </div>
            </div>
          </template>
        </div>
        <div className="col-lg-2 col-md-5 home-blog-post-link order-last order-lg-first order-md-6">
          <a href="https://blog.ussd.directory" className="ff-semibold microtext co-blue mt-5 d-blk tx-r">
            View all
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
