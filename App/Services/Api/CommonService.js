import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'
import S3 from 'aws-sdk/clients/s3';
import {decode} from 'base64-arraybuffer';
import fs from 'react-native-fs';

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

function getCallOptions(params) {
  let url = Config.COMMON_SERVICE.GET_CALL_OPTIONS;
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}



function getBookingPicklist(params) {
  
  let url = Config.COMMON_SERVICE.GET_BOOKING_PICKLIST;
  url += `?model_color=yes&financier_name=yes&payment_mode=yes`
  return apiClient.get(url, {
    headers: {
      token: params.token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data'];
    }
    return null
  }).catch(error => {
   
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function uploadImage(params) {
  let url = Config.COMMON_SERVICE.UPLOAD_IMAGE;
  const formData = new FormData();
  formData.append('image', {
    uri: params.image,
    name: `image.png`,
    type: `image/png`,
  });

  return apiClient.post('https://herodealersapp.herokuapp.com/images/single', formData, {
    headers: {
      token: params.token,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['url'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


// async function uploadImageS3(params) {
//   let file = params.image;
//   const s3bucket = new S3({
//      accessKeyId: 'AKIA37SVVXBH4HUFQTXH',
//      secretAccessKey: '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',
//      Bucket:  'cloud-cube',
//      signatureVersion: 'v4',
//      region: 'us-east-1',
//      destination: 'undrl5nijfej/public/',
//      bucketPath: 'undrl5nijfej/public/',
//      BucketPath: 'undrl5nijfej/public/',
//    });


//   let contentType = 'image/jpeg';
//   let contentDeposition = 'inline;filename="' + file.name + '"';
//   const base64 = await fs.readFile(file.uri, 'base64');

//   const arrayBuffer = decode(base64);
//   s3bucket.createBucket(() => {
//      const params = {
//        Bucket: 'cloud-cube',
//        Key: file.name,
//        Body: arrayBuffer,
//        ContentDisposition: contentDeposition,
//        ContentType: contentType,
//    };



//   return s3bucket.upload(params, (err, data) => {
//      if (err) {
//        console.log('error in callback');
//      }
//     debugger
//    console.log('success');
//    console.log("Response URL : "+ data.Location);
//    });
//  });


// }



export const CommonService = {
  fetchLeadSources,
  fetchLeadLostReasons,
  getAllStates,
  getAllCities,
  uploadImage,
  getCallOptions,
  getBookingPicklist,
  //uploadImageS3
}
