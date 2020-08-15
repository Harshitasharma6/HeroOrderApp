import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
    apiClient,
    isWithin,
    in200s
} = apiClientService;



function getAllProducts(params) {
  let url = Config.PRODUCTS_SERVICE.FETCH_PRODUCTS;
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


function getProductSchemes(params) {
  let url = Config.PRODUCTS_SERVICE.FETCH_SCHEMES;
  url += `?product_id=${params.product_id}&state_id=${params.state_id}`
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['scheme'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}



export const ProductsService = {
  getAllProducts,
  getProductSchemes
}
