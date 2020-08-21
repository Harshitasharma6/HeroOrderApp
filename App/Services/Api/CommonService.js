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
  url += `?state_id=${params.state_id}`
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['products'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function fetchLeadLostReasons(params) {
  let url = Config.COMMON_SERVICE.FETCH_LEAD_LOST_REASONS;
  url += `?state_id=${params.state_id}`
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['products'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}



export const CommonService = {
  fetchLeadSources,
  fetchLeadLostReasons
}
