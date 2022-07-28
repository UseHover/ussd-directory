import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { CountriesProvider } from './components'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('appRoot'))

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

// /
// /directory
// /directory?country=KE
// /directory/channelId
