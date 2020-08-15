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
import VisitorActions from 'App/Stores/Visitor/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import InputDate from 'App/Components/FormInput/InputDate';
import {ApplicationStyles} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import Ratings from 'App/Components/Ratings'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//  "model_name__c": "a029D000002ZFPoQAO", (*mandatory)
// 	"vehicle_no__c": "DL1CV6565",
// 	"ride_comfort__c": "3", 	(*mandatory)
// 	"responsiveness_of_the_vehicle__c": "3", 	(*mandatory)
// 	"dealers_sales_person_login_info__c": "a0O9D000001hLV9UAM", 	(*mandatory)
// 	"ease_of_handeling__c": "4", (*mandatory) 
// 	"overall_experience__c": "4", (*mandatory)
// 	"date_of_test_drive": "2020-08-16" (*mandatory)



class TestDriveFeedBackScreen extends Component {
	submit() {
		const { 
			currentEnquiryId,
			submitForm, 
			form
		} = this.props;

		Keyboard.dismiss(); 
		submitForm({
			...form, 
			enquiry_id: currentEnquiryId, 
			dealers_sales_person_login_info__c: "a0O9D000001hLV9UAM",
			date_of_test_drive: HelperService.dateReadableFormatWithHyphen()
		});
	}

    render() {
		const { 
			validation, 
			form,
			submitForm,
			changeForm, 
			loader,
			productsList
		} = this.props;
		
		return (
			<View style={Style.container}>
				<Text style={ApplicationStyles.formHeading}>{'Test Drive Feedback'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>

					<SearchableDropdown
				        dataSource={productsList}
				        placeHolderText={'Model Name'}
				        selectedValue={form.model_name__c}
				        onChange={(value) => changeForm({ edited_field: 'model_name__c', edited_value: value })}
				        placeholder={'Type or Select Model Name'}
				        invalid={validation.invalid && validation.invalid_field == 'model_name__c'}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Model Name*'}
					/>

				 	<InputText
						style={Style.mb10}
						placeholder={''}
						value={form.vehicle_no__c}
						onChange={(value) => changeForm({ edited_field: 'vehicle_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'vehicle_no__c'}
						label={'Vehicle No.'}
					/>


					<Text style={{...ApplicationStyles.label, marginBottom: hp('3%'), marginTop: hp('2%')}}>Rate the vehicle on the following grounds:</Text>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Ride Comfort</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings 
						value={form.ride_comfort__c || 0} 
						onChange={(value) => changeForm({ edited_field: 'ride_comfort__c', edited_value: value })}
					/>
					</View>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Ease of Handling</Text>
						<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings 
						value={form.ease_of_handeling__c || 0} 
						onChange={(value) => changeForm({ edited_field: 'ease_of_handeling__c', edited_value: value })}
						/>
					</View>


					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Responsiveness of the Vehicle</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings 
						value={form.responsiveness_of_the_vehicle__c || 0} 
						onChange={(value) => changeForm({ edited_field: 'responsiveness_of_the_vehicle__c', edited_value: value })}
					/>
					</View>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Overall Experience</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
						<Ratings 
							value={form.overall_experience__c || 0} 
							onChange={(value) => changeForm({ edited_field: 'overall_experience__c', edited_value: value })}
						/>
					</View>

					<BlueButton
						style={{...ApplicationStyles.formButton, width: wp('60%')}}
						loading={loader}
						disabled={loader}
						title={'SUBMIT FEEDBACK'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.createFeedbackValidation,
	form 					 	: state.visitor.feedbackForm,
	loader 			            : state.visitor.loaders.createFeedbackLoader,
	productsList                : state.common.productsList,
	currentEnquiryId            : state.visitor.currentEnquiryId
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(VisitorActions.changeCreateFeedbackForm(params)),
	submitForm: (params) => dispatch(VisitorActions.createFeedback(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TestDriveFeedBackScreen)