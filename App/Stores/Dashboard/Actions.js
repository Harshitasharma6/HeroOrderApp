import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({

    doNothing: null,

    feedBackAction:['payload'],
    feedBackSuccess: ['payload'],
    feedBackFailure: null,
    feedBackLoading: null,
    feedBackLoadingStop: null,


    sendAttachment: ['payload'],
    sendAttachmentSuccess: ['payload'],
    sendAttachmentFailure: null,
    sendAttachmentLoading: null,
    sendAttachmentLoadingStop: null,

    changeFeedBackForm: ['payload'],
    feedBackFormValidationFailed: ['payload'],

    fetchOutStandingAction:['payload'],
    outStandingSuccess: ['payload'],
    outStandingFailure: null,
    outStandingLoading: null,
    outStandingLoadingStop: null,


    fetchCommunications: ['payload'],
    fetchCommunicationsSuccess: ['payload'],
    fetchCommunicationsFailure: null,
    fetchCommunicationsLoading: null,
    fetchCommunicationsLoadingStop: null,


    fetchCommunicationsAttachments: ['payload'],
    fetchCommunicationsAttachmentsSuccess: ['payload'],
    fetchCommunicationsAttachmentsFailure: null,
    fetchCommunicationsAttachmentsLoading: null,
    fetchCommunicationsAttachmentsLoadingStop: null,




    fetchCommunicationsAttachmentsDetails: ['payload'],
    fetchCommunicationsAttachmentsDetailsSuccess: ['payload'],
    fetchCommunicationsAttachmentsDetailsFailure: null,
    fetchCommunicationsAttachmentsDetailsLoading: ['payload'],
    fetchCommunicationsAttachmentsDetailsLoadingStop: null,


    submitFinalObservationForm: ['payload'],
    submitFinalObservationFormSuccess: ['payload'],
    submitFinalObservationFormFailure: null,
    submitFinalObservationFormLoading: null,
    submitFinalObservationFormLoadingStop: null,

    changeFinalObservationForm: ['payload'],
    addFinalObservationForm: ['payload'],
    removeFinalObservationForm: ['payload'],
    finalObservationFormValidationFailed: ['payload'],

    fetchFinalObservation: ['payload'],
    fetchFinalObservationLoading: null,
    fetchFinalObservationLoadingStop: null,
    fetchFinalObservationSuccess: ['payload'],
    fetchFinalObservationFailure: null,



    updateDashboardSearchFilters: ['payload']






    


});

export const DashboardTypes = Types
export default Creators
