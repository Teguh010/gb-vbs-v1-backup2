import router from 'src/router/routes'
// export const hostDomain = 'http://172.104.162.220'
// export const hostDomain = 'http://192.168.31.38'
// export const hostDomain = 'http://localhost'
// export const hostDomain = 'http://test.gpsku.co.id'
// export const hostDomain = 'http://globaltrackindo.co.id'
export const hostDomain = 'https://server2.gpsku.co.id'
// export const hostDomain = 'http://server2.gpsku.co.id'

// export const apiDomain = 'http://test.gpsku.co.id:8081/auth-server/'
// export const apiDomain = 'http://test.gpsku.co.id:8081/'
// export const apiDomain = 'http://192.168.31.38:8081/'
// export const apiDomain = hostDomain + ':8082/'
export const apiDomain = hostDomain + ':8088/'

// export const apiDomain = hostDomain + ':8083/'
// export const apiDomain = hostDomain + ':8084/'
export const apiScoketIO = hostDomain + ':4118/'

// export const apiDomain = 'http://172.17.2.232:380816989/'
// export const apiDomain = 'http://globaltrackindo.co.id:8081/'
export const loginUrl = apiDomain + 'login/create_token'
export const userUrl = apiDomain + 'api/user'
export const menuUrl = apiDomain + 'v1/menuformat'
export const routerUrl = apiDomain + 'v1/routerformat'
export const forgotPassword = apiDomain + 'api/forgot-password'
export const resetPassword = apiDomain + 'api/reset-password'

export const userListUrl = apiDomain + 'api/v1/user-list'
export const getUserConversationUrl = apiDomain + 'api/v1/get-user-conversation'
export const saveChatMessageUrl = apiDomain + 'api/v1/save-chat'

export const getUserPMNotifications = apiDomain + 'api/v1/get-private-message-notifications'
export const getUserPrivateMessages = apiDomain + 'api/v1/get-private-messages'
export const getUserPrivateMessagesSent = apiDomain + 'api/v1/get-private-messages-sent'
export const getPrivateMessageById = apiDomain + 'api/v1/get-private-message'
export const sendPrivateMessage = apiDomain + 'api/v1/send-private-message'
// export const signGoogleUrl = apiDomain + 'googlesign'

export const getHeader = function () {
  // debugger
  if (window.localStorage.getItem('authUser') === null) { return }
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + tokenData.access_token
  }
  return headers
}

export const getAccessToken = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  return 'access_token=' + tokenData.access_token
}

export const getAccessTokenKey = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  return tokenData.access_token
}

export const logout = function () {
  window.localStorage.removeItem('authUser')
  router.push('/')
}

export const getRouter = function () {
  const routerData = JSON.parse(window.localStorage.getItem('routerUser'))
  return routerData
}

export const getMenu = function () {
  const menuData = JSON.parse(window.localStorage.getItem('menuUser'))
  return menuData
}
export const getProfile = function () {
  const profile = JSON.parse(window.localStorage.getItem('profileUser'))
  // console.log(profile)
  return profile
}
export const isLogin = function () {
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  const menuUser = JSON.parse(window.localStorage.getItem('menuUser'))
  return (authUser && authUser.access_token && typeof menuUser !== 'undefined')
}
