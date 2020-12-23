import axios from 'axios'
import constants from '../common/constants/constants'

export const qiitaApi = axios.create({
  baseURL: constants.qiitaApi.baseUrl,
  timeout: constants.qiitaApi.timeout
})