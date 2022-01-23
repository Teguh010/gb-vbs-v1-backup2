import { HTTP } from 'boot/httpcommon'
// import { apiDomain } from 'src/config'

export const fetchMaster = function (url, value, label, datas) {
  const params = {
  }

  HTTP().get(url, { params: params }).then((response) => {
    response.data.forEach(element => {
      datas.push({ label: element[label], value: element[value] })
    })
    return datas
  }).catch(error => {
    console.log(error)
  })
}

export const fetchMasterData = function (url, datas) {
  const params = {
  }

  HTTP().get(url, { params: params }).then((response) => {
    response.data.forEach(element => {
      datas.push(element)
    })
    // datas = response.data
    return datas
  }).catch(error => {
    console.log(error)
  })
}

export const fetchData = async function (url, data) {
  const params = {
  }

  await HTTP().get(url, { params: params }).then((response) => {
    Object.assign(data, response.data)
    return data
  }).catch(error => {
    console.log(error)
    return true
  })
}
