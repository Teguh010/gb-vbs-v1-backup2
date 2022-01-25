import axios from 'axios'
import { apiDomain } from 'src/config'
// alert('hai from httpcommnon')
let xrouter = null
export const HTTP = function () {
  const xaxios = axios.create({
    baseURL: apiDomain
    // headers: getHeader()
  })
  xaxios.interceptors.response.use((response) => {
    console.log('see response httpcommon', response)
    return response
  }, function (error) {
    // Do something with response error
    if ((error.response.status === 401)) {
      if (error.response.data) {
        if (error.response.data.message === 'token Expired' || error.response.data.message === 'Invalid authorization token..') {
          console.log('unauthorized, logging out ...')
          window.localStorage.removeItem('authUser')
          window.localStorage.removeItem('profileUser')
          xrouter.push('/login')
        }
      }
    }
    return Promise.reject(error)
  })
  return xaxios
}
export default ({ app, router, store, Vue }) => {
  xrouter = router
}
