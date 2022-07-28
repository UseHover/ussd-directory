import axios from 'axios'
import endpoints from '../endpoints'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  config.headers['Content-Type'] = 'application/json'
  return config
})

const http = (url, method = 'GET', data = {}) => axiosInstance({ url, method, data })

export const getChannels = (queryParams = '') => {
  const endpoint = `${endpoints.CHANNELS}?bookmarked=true&order_key=name&per_page=100&${queryParams}`
  return http(endpoint)
}

export default http
