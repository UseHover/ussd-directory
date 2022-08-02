import { useQuery } from 'react-query'
import http from '../http'
import md5 from 'md5'

const useApi = (url, method = 'GET', data = {}) => {
  const queryKey = md5(`${url}${method.toLowerCase()}`)
  const response = useQuery(queryKey, async () => {
    console.log('use query stuff')

    const results = await http(url, method)
    return results.data
  })

  return {
    data: response.data,
    loading: response.isLoading,
  }
}

export default useApi
