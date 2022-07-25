import React from 'react'
import Header from '../components/shared/Header'

const Home = () => {
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
                />
              </form>
              <ul className="bg-white search-drop dropdown-content" id="countrySearch" uk-drop="mode: click"></ul>
            </section>
          </div>
        </article>
      </section>
    </>
  )
}

export default Home
