import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import http from '../http'
import endpoints from '../endpoints'
import CountriesContext from './CountriesContext'

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, selectCountry] = useState()
  const countryCode = window.location.search.split('=')[1]

  useEffect(() => {
    const loadCountries = async () => {
      const response = await http(`${endpoints.COUNTRIES}?channels=true`)
      const countries = response.data.map(country => {
        const codePoints = country.alpha2
          .toUpperCase()
          .split('')
          .map(char => 127397 + char.charCodeAt())
        return { ...country, ...{ codePoints } }
      })

      setCountries(countries)
      if (countryCode) {
        selectCountry(countries.filter(c => c.alpha2 === countryCode)[0])
      }
    }

    loadCountries()
  }, [countryCode])

  return <CountriesContext.Provider value={{ countries, selectedCountry }}>{children}</CountriesContext.Provider>
}

CountriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CountriesProvider
