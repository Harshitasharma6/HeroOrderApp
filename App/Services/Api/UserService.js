import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import {apiClientService} from './ApiService'

const {
  apiClient,
  isWithin,
  in200s
} = apiClientService;




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
  
  let url = Config.USER_SERVICE.LOGIN;
  
  return apiClient.post(url, params).then((response) => {
      if (in200s(response.status)) {
          return response.data
      }
      return null
  }).catch(error => {      
      return null
  });
}


function logoutUser(params) {
  
  let url = Config.USER_SERVICE.LOGOUT;
  url += `?sfid=${params.dealers_sales_person_login_info_id}`
  
  return apiClient.post(url, params).then((response) => {
      if (in200s(response.status)) {
          return response.data
      }
      return null
  }).catch(error => {
      return null
  });
}

function getTaxDetails(params) {
	let url = Config.USER_SERVICE.GET_TAX_DETAILS;
  
  return apiClient.get(url, {
		headers: {
			token: params.token,
			state__c: params.state__c,
		}
	}).then((response) => {
		if (in200s(response.status)) {
      
			return response['data']['tax'];
		}
		return null
	}).catch(error => {
   
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
   		return null;

	});
}


function startDay(params) {
  let requestParams = {
    area: params.area,
    latitude: String(params.latitude),
    longitude: String(params.longitude),
    date: String(params.date)
  };
  return userApiClient.post(Config.USER_SERVICE.START_DAY_URL, requestParams, {
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
  return userApiClient.post(Config.USER_SERVICE.END_DAY_URL, requestParams, {
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
    console.log(error)
    return null
  });
}

function markUserAbsent(params) {
  let requestParams = {
    absentReason: params.absentReason,
    leaveType: params.leaveType,
    date: String(params.date)
  };
  return userApiClient.post(Config.USER_SERVICE.MARK_ABSENT_URL, requestParams, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {// todo:  change to (in200s(response.status)) 
      return response.data
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}


function getAgentAreas(params) {
  return userApiClient.get(Config.USER_SERVICE.FETCH_AREAS_URL, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {
      console.log(response['data']['data']['areas'], "AGENT AREAS");
      return response['data']['data']['areas'];
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}

function getAgentDetails(params) {
  return userApiClient.get(Config.USER_SERVICE.FETCH_AGENT_DETAILS, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data'];
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}

function checkAttendance(params) {
  params.date = String(params.date);
  return userApiClient.post(Config.USER_SERVICE.CHECK_ATTENDANCE, params, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']
    }
    return null
  }).catch(error => {
    return null
  });
}

function getAllPSM(params) {
  return userApiClient.get(Config.USER_SERVICE.FETCH_ALL_PSM, {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['psm'];
    }
    return null
  }).catch(error => {
    console.log(error.response)
    return null
  });
}

function getAppVersion(params) { 
    let url = Config.USER_SERVICE.GET_APP_VERSION;
    return apiClient.get(url, {
        headers: {
            'token': params.token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response.data.data.version
        }
        return null
    }).catch(error => {
        return null
    });
}

export const userService = {
  fetchUser,
  loginUser,
  startDay,
  endDay,
  markUserAbsent,
  getAgentAreas,
  getAgentDetails,
  checkAttendance,
  getAllPSM,
  logoutUser,
  getTaxDetails,
  getAppVersion
}
