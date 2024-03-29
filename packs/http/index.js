import axios from 'axios'
import endpoints from '../endpoints'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  config.headers['Content-Type'] = 'application/json'
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
})

const http = (url, method = 'GET', data = {}) => axiosInstance({ url, method, data })

export const getChannels = (queryParams = '', perPage = 100) => {
  const endpoint = `${endpoints.CHANNELS}?bookmarked=true&order_key=name&per_page=${perPage}&${queryParams}`
  return http(endpoint)
}

export const getChannelActions = channelId => {
  const endpoint = `${endpoints.CHANNEL_ACTIONS}?channel_id=${channelId}`
  return http(endpoint)
}

export default http
