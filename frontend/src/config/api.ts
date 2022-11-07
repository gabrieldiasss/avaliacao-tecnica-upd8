import * as axios from 'axios'
import ENV from 'react-native-config'

const api = axios.default.create({
  baseURL: ENV.API_URL,
})

export { api }