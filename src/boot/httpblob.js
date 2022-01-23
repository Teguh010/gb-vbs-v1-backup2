import axios from 'axios'
import { apiDomain, getHeader } from 'src/config'
let xrouter = null
export const HTTPB = function () {
  const xaxios = axios.create({
    baseURL: apiDomain,
    headers: getHeader(),
    responseType: 'arraybuffer'
  })
  xaxios.interceptors.response.use((response) => {
    // debugger
    return response
  }, function (error) {
    // debugger
    // Do something with response error
    if ((error.response.status === 401) || (error.response.status === 403)) {
      console.log('unauthorized, logging out ...')
      window.localStorage.removeItem('authUser')
      xrouter.push('/login')
    }
    return Promise.reject(error)
  })
  return xaxios
}
export default ({ app, router, store, Vue }) => {
  xrouter = router
}
