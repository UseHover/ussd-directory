import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CountriesProvider } from './components'

const root = ReactDOM.createRoot(document.getElementById('appRoot'))

root.render(
  <React.StrictMode>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </React.StrictMode>
)

// /
// /directory
// /directory?country=KE
// /directory/channelId
