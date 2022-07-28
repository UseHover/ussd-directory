import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import http from '../http'
import endpoints from '../endpoints'
import CountriesContext from './CountriesContext'

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([])

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
    }

    loadCountries()
  }, [])

  return <CountriesContext.Provider value={{ countries }}>{children}</CountriesContext.Provider>
}

CountriesProvider.propTypes = {
  cart: PropTypes.object,
  children: PropTypes.node.isRequired,
  createCart: PropTypes.func.isRequired,
}

export default CountriesProvider
