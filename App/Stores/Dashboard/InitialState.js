import { HelperService } from 'App/Services/Utils/HelperService';
import _ from 'lodash';

export const INITIAL_STATE = {
    feedBackLoader: false,
    outStandingLoader: false,
    fetchOutStandingList: [],
    
    feedBackForm: {},
    sendAttachmentLoader: false,
    feedBackFormValidation: {
        invalid: false,
        invalid_field: ''
    },

    communicationsList: [],
    communicationsAttachmentsList: [],
    communicationsAttachmentsDetailsList:[],


    fetchCommunicationsLoader: false,
    fetchCommunicationsAttachmentsLoader: false,
	fetchCommunicationsAttachmentsDetailsLoader: false,


    finalObservationFetchLoader: false,
    finalObservationSubmitLoader: false,


    finalObservationForm:[{
        "id": _.uniqueId(),
        "attributes" : {"type": "Final_Observation__c", "referenceId": ""},
        "User__c":"",
        "Date__c": HelperService.dateReadableFormatWithHyphen(),
        Packing__c: "None",
        Product__c: "None",
        Brand__c: "",
        "RSP__c" : "",
        "WSP__c" : "",
        "OwnerId": ""
    }],
    finalObservationList: [],
    finalObservationFormValidation: {
        invalid: false,
        invalid_field: ''
    },
    finalObservationFormDefault: {
        "attributes" : {"type": "Final_Observation__c", "referenceId": ""},
        "User__c":"",
        "Date__c": HelperService.dateReadableFormatWithHyphen(),
        Packing__c: "None",
        Product__c: "None",
        Brand__c: "",
        "RSP__c" : "",
        "WSP__c" : "",
        "OwnerId": ""
    },
    searchFilters: {
        district: ''
    }
}
