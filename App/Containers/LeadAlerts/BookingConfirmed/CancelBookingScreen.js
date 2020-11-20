import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard, Label, Item} from 'react-native';
import Style from './styles'
import InputText from 'App/Components/FormInput/InputText';
import InputMobile from 'App/Components/FormInput/InputMobile';
import InputNumber from 'App/Components/FormInput/InputNumber';
import BlueButton from 'App/Components/BlueButton';
import Select from 'App/Components/Select';
import TextArea from 'App/Components/FormInput/TextArea';
import { connect } from 'react-redux';
import ShreeActions from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import InputDate from 'App/Components/FormInput/InputDate';
import {ApplicationStyles} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import GenericIcon from 'App/Components/GenericIcon'
import VisitorActions from 'App/Stores/Visitor/Actions'
import LeadAlertsAction from 'App/Stores/LeadAlerts/Actions'
import CommonActions from 'App/Stores/Common/Actions'
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Colors} from 'App/Theme'



class CancelBookingScreen extends Component {
    render() {
		const { 
			id,
			form,
			loader,
			changeForm,
			onSubmit,
			validation,
            leadLostReasonsList,
		} = this.props;
		
		return (
			<View style={Style.container}>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
				<SearchableDropdown
			        dataSource={leadLostReasonsList}
			        placeHolderText={'Select reason'}
			        selectedValue={form.lead_status_reason__c}
			        onChange={(value) => changeForm({ edited_field: 'lead_status_reason__c', edited_value: value })}
			        placeholder={'Type or Select reason'}
			        invalid={false}
			        labelStyles={{ ...Style.pickerLabel }}
			        customPickerStyles={{ ...Style.picker }}
			        label={'Reason'}
				/>

				<BlueButton
					style={ApplicationStyles.formButton}
					loading={loader}
					disabled={loader}
					title={'SUBMIT'}
					onPress={() => onSubmit({...form, id: id})}
				/>
				</ScrollView>
			</View>
		)
	}
}

	// markLeadLostLoader: false
 //    },

 //    leadLostForm: {},
 //    leadLostFormValidation: {
 //        invalid: false,
 //        invalid_field: ''
 //    },


const mapStateToProps = (state) => ({
	validation      			: state.leadAlerts.cancelBookingFormValidation,
	form 					 	: state.leadAlerts.cancelBookingForm,
	loader 			            : state.leadAlerts.loaders.cancelBookingLoader,
  	leadLostReasonsList 	    : state.common.leadLostReasonsList,
  
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(LeadAlertsAction.changeCancelBookingForm(params)),
	clearForm: ()              => dispatch(LeadAlertsAction.clearCancelBookingForm())
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CancelBookingScreen)