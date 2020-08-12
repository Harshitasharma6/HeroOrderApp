import axios from 'axios'
import { is, curryN, gte } from 'ramda'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});

const in200s = isWithin(200, 299)


// function errorResponseHandler(error) {
//     if(error.response && error.response.status == 403) {
//     	helperService.clearCookie();
//     	helperService.showToastError({
//     		content: 'Session Expired! Please login Again'
//     	});

//     	helperService.navigate('/login');
//     }

//     if(error.response && error.response.status == 400) {
//       helperService.showToastError({
//         content: (error.response.data.message || (error.response.data.response  ? error.response.data.response.message  : ''))
//       });
//     }
//  }




const apiClient = axios.create({
 baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})


//apiClient.interceptors.response.use((response) => response, errorResponseHandler);


export const apiClientService = {
	apiClient,
	isWithin,
	in200s
}