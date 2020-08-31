import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
    apiClient,
    isWithin,
    in200s
} = apiClientService;



function fetchLeadSources(params) {
  let url = Config.COMMON_SERVICE.FETCH_LEAD_SOURCES;
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['lead_source'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function fetchLeadLostReasons(params) {
  let url = Config.COMMON_SERVICE.FETCH_LEAD_LOST_REASONS;
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['lost_status_reason'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}

function getAllStates(params) {
  let url = Config.COMMON_SERVICE.GET_STATES;
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['states'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}

function getAllCities(params) {
  let url = Config.COMMON_SERVICE.GET_CITIES;
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['cities'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}



export const CommonService = {
  fetchLeadSources,
  fetchLeadLostReasons,
  getAllStates,
  getAllCities,
}
