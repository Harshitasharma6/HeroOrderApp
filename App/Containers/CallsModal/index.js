import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import TextArea from "App/Components/FormInput/TextArea";
import BlueButton from "App/Components/BlueButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import ConnectedReasons from './ConnectedReasons';
import NotConnectedReasons from './NotConnectedReasons';
import CommonActions from 'App/Stores/Common/Actions'
import VisitorActions from 'App/Stores/Visitor/Actions'


class CallsModal extends Component  {
	render() {
		const { 
			isVisible, 
			onSubmit, 
			onCloseModal, 
			toggleModal, 
			callConnected,
			callDisconnected,
			showConnectedOptions,
			showDisconnectedOptions,
			changeForm,
			submitForm,
			updateForm,
			form,
			loading,
			clearForm,
			purpose_of_call,
			outcome_purpose_of_call,
			reasons_for_not_Connected
		} =  this.props;

	    let body = (
	    	<View style={Style.container}>
		        <View style={Style.modalContainer}>
		            <Text style={Style.questionHeading}>Did the call get connected?</Text>
		            <View style={Style.actionContainer}>
		                <BlueButton
		                    onPress={() => {showConnectedOptions(); changeForm({edited_field: 'call_connected__c', edited_value: 'yes'})}}
		                    title={'Yes'}
		                    disabled={false}
		                    loading={false}
		                    style={{...Style.actionButton, ...Style.yesActionButton}}
		                    textStyle={Style.actionButtonTextStyle}
		                />
		                <BlueButton
		                    onPress={() => {showDisconnectedOptions(); changeForm({edited_field: 'call_connected__c', edited_value: 'no'})}}
		                    title={'No'}
		                    disabled={false}
		                    style={{...Style.actionButton, ...Style.noActionButton}}
		                    textStyle={Style.actionButtonTextStyle}
		                />
		            </View>
		        </View>
	        </View>
	    );

	    if (callConnected) {
	    	body = (
	    		<View style={{...Style.container, height: hp('82%')}}>
	    			<Text style={Style.modalHeading}>Call Feedback</Text>
	    			<ConnectedReasons 
	    				data={form} 
	    				onChange={(params) => changeForm(params)} 
	    				loading={loading}
	    				purpose_of_call={purpose_of_call}
						outcome_purpose_of_call={outcome_purpose_of_call}
						reasons_for_not_Connected={reasons_for_not_Connected}
	    				onSubmit={() => {form.call_activity_sfid ? updateForm(form) : submitForm(form)}}
	    			/>
	    		</View>
	    	)	
	    }

	    if (callDisconnected) {
	    	body = (
	    		<View style={{...Style.container, height: hp('66%')}}>
	    			<Text style={Style.modalHeading}>Call Feedback</Text>
	    			<NotConnectedReasons 
	    				data={form} 
	    				onChange={(params) => changeForm(params)} 
	    				loading={loading} 
	    				onSubmit={() => {form.call_activity_sfid ? updateForm(form) : submitForm(form)}}
	    				purpose_of_call={purpose_of_call}
						outcome_purpose_of_call={outcome_purpose_of_call}
						reasons_for_not_Connected={reasons_for_not_Connected}
	    			/>
	    		</View>
	    	)
	    }
	    return (
	        <Modal
	            isVisible={isVisible}
	            onBackdropPress={() => {onCloseModal(); clearForm()}}
	            animationIn={"slideInUp"}
	        >
	            {body}
	        </Modal>
	    );
	}	
}

const mapStateToProps = (state) => ({
	callConnected: 	state.common.callConnected,
	callDisconnected: state.common.callDisconnected,
	form: state.visitor.registerCustomerOutgoingCallForm,
	loading: state.visitor.loaders.registerCustomerOutgoingCallLoader,
	purpose_of_call: state.common.purpose_of_call,
	outcome_purpose_of_call: state.common.outcome_purpose_of_call,
	reasons_for_not_Connected: state.common.reasons_for_not_Connected
});

const mapDispatchToProps = (dispatch) => ({
	showConnectedOptions: (params) 	  => dispatch(CommonActions.showConnectedOptions(params)),
	showDisconnectedOptions: (params) => dispatch(CommonActions.showDisconnectedOptions(params)),
	changeForm: (params)       		  => dispatch(VisitorActions.changeRegisterCustomerOutgoingCallForm(params)),
	submitForm: (params)       		  => dispatch(VisitorActions.registerCustomerOutgoingCall(params)),
	updateForm: (params) 		   	  => dispatch(VisitorActions.updateFollowUpCall(params)),
	clearForm: () 					  => dispatch(VisitorActions.clearRegisterCustomerOutgoingCallForm(params))
  });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CallsModal)

const Style = StyleSheet.create({
	modalContainer: {
		justifyContent: 'center', 
		alignItems: 'center', 
		width: '100%',
		backgroundColor: Colors.lightGrey
	},
    modalHeading: {
        color: Colors.primary,
        fontSize: wp('4.5%'),
        fontFamily: ApplicationStyles.textMsgFont,
        marginBottom: 10,
        textTransform: 'uppercase' 
    },
    questionHeading: {
    	color: Colors.grey,
    	fontSize: wp('4.8%'),
    	fontFamily: ApplicationStyles.textMsgFont
    },
    actionButtonTextStyle: {
        fontSize: wp('4%')
    },
    actionButton: {
        width: wp('22%'),
        height: hp('4.5%'),
        borderRadius: hp('5%')
    },
    yesActionButton: {
    	backgroundColor: '#43B800'
    },
    noActionButton: {
    	backgroundColor: '#D71E22'
    },
    actionContainer: {
        flexDirection: 'row',
        marginTop: hp('2.5%'),
        width: '100%',
        justifyContent: 'space-around'
    },
    container: {
        margin: 0,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: hp('20%')
    }
});