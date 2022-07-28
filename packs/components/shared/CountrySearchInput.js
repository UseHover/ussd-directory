import React, { useContext, useEffect, useRef, useState } from 'react'
import { CountriesContext } from '../index'

const CountrySearchInput = () => {
  const countriesContext = useContext(CountriesContext)
  const [countries, setCountries] = useState([])
  const countryListRef = useRef(null)

  const onCountrySearchBlur = () => {
    setTimeout(() => {
      countryListRef.current.classList.remove('uk-open')
    }, 500)
  }

  const onCountrySearchClick = () => {
    const classList = countryListRef.current.classList

    if (classList.contains('uk-open')) {
      classList.remove('uk-open')
      return
    }

    classList.add('uk-open')
  }

  const onCountrySearchInput = event => {
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

  const onCountrySelect = country => {
    window.location.replace(`/directory-country/?code=${country.alpha2}`)
  }

  useEffect(() => setCountries(countriesContext.countries), [countriesContext.countries])

  return (
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
          onClick={onCountrySearchClick}
          onBlur={onCountrySearchBlur}
          onInput={onCountrySearchInput}
        />
      </form>
      <ul
        ref={countryListRef}
        className="bg-white search-drop dropdown-content uk-drop uk-drop-bottom-left"
        style={{ left: '49px', top: '70px' }}
        id="countrySearch"
      >
        {countries.map(country => (
          <li className="d-flx al-i-c p-2 py-1 country" key={country.alpha2} onClick={() => onCountrySelect(country)}>
            <span className="country">{String.fromCodePoint(...country.codePoints)}</span>
            <p className="co-black ff-medium nanotext">{country.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CountrySearchInput
