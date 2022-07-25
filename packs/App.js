import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Directory, DirectoryDetail, Home } from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directory" element={<Directory />} />
      <Route path="/directory/:channelId" element={<DirectoryDetail />} />
    </Routes>
  </BrowserRouter>
)

export default App
