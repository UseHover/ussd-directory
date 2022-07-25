import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
console.log('We are ehre')

const root = ReactDOM.createRoot(document.getElementById('appRoot'))

if (!root) {
  console.log('Root element does not exist')
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// /
// /directory
// /directory?country=KE
// /directory/channelId
