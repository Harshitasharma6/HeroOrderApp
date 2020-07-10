import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000
})

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function (resolve, reject) {
      resolve(null)
    })
  }

  let number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}


function loginUser(params) {
  return userApiClient.post('agents/login', params).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }
    return null
  }).catch(error => {
    return null
  });
}


function startDay(params) {
  let requestParams = {
    area: params.area,
    latitude: String(params.latitude),
    longitude: String(params.longitude),
    date: String(params.date)
  };
  return userApiClient.post('agents/startDay', requestParams, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }
    return null
  }).catch(error => {
    return null
  });
}

function endDay(params) {
  let requestParams = {
    area: params.area,
    latitude: String(params.latitude),
    longitude: String(params.longitude),
    date: String(params.date)
  };
  return userApiClient.post('agents/endDay', requestParams, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }
    return null
  }).catch(error => {
    return null
  });
}

function markUserAbsent(params) {
  let requestParams = {
    absentReason: params.absentReason,
    leaveType: params.leaveType,
    date: String(params.date)
  };
  return userApiClient.post('agents/markAbsent', requestParams, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status) && in200s(response.data.status)) {// todo:  chnage to (in200s(response.status)) 
      return response.data
    }
    return null
  }).catch(error => {
    return null
  });
}


function getAgentAreas(params) {
  return userApiClient.post('agents/areas', params, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status) && in200s(response.data.status)) {
      return response.data
    }
    return null
  }).catch(error => {
    return error.response.data
  });
}


function getServerTime() {

}


function getAgentArea() {

}

export const userService = {
  fetchUser,
  loginUser,
  startDay,
  endDay,
  markUserAbsent,
  getAgentAreas
}
