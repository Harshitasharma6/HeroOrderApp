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



class TestDriveFeedBackScreen extends Component {
	submit() {
		const { 
			submitForm, 
			form
		} = this.props;

		Keyboard.dismiss(); 
		submitForm(form);
	}

    render() {
		const { 
			validation, 
			form,
			submitForm,
			changeForm, 
			loader
		} = this.props;
		
		return (
			<View style={Style.container}>
				<Text style={ApplicationStyles.formHeading}>{'Test Drive Feedback'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>

					{
					// 	<SearchableDropdown
				 //        dataSource={[{id: 'Boss', name: 'Boss'}, {id: 'Admin', name: 'Admin'}, {id: 'Dealer', name: 'Dealer'}]}
				 //        placeHolderText={'Model Name'}
				 //        selectedValue={''}
				 //        onChange={(value) => changeForm({ edited_field: 'occupation', edited_value: value })}
				 //        placeholder={'Type or Select Model Name'}
				 //        invalid={false}
				 //        labelStyles={{ ...Style.pickerLabel }}
				 //        customPickerStyles={{ ...Style.picker }}
				 //        label={'Model Name'}
					// />
				}

				 	<InputText
						style={Style.mb10}
						placeholder={''}
						value={form.vehicle_number}
						onChange={(value) => changeForm({ edited_field: 'vehicle_number', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'vehicle_number'}
						label={'Vehicle No.'}
					/>


					<Text style={{...ApplicationStyles.label, marginBottom: hp('3%'), marginTop: hp('2%')}}>Rate the vehicle on the following grounds:</Text>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Ride Comfort</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings 
						value={form.ride_comfort || 0} 
						onChange={(value) => changeForm({ edited_field: 'ride_comfort', edited_value: value })}
					/>
					</View>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Ease of Handling</Text>
						<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings 
						value={form.ease_of_handling || 0} 
						onChange={(value) => changeForm({ edited_field: 'ease_of_handling', edited_value: value })}
						/>
					</View>


					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Responsiveness of the Vehicle</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings 
						value={form.responsiveness_of_vehicle || 0} 
						onChange={(value) => changeForm({ edited_field: 'responsiveness_of_vehicle', edited_value: value })}
					/>
					</View>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Overall Experience</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
						<Ratings 
							value={form.overall_experience || 0} 
							onChange={(value) => changeForm({ edited_field: 'overall_experience', edited_value: value })}
						/>
					</View>


					<InputDate
                        style={Style.mb10}
                        placeholder={'Date of test drive'}
                        value={form.date_of_test_drive || 0}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            changeForm({ edited_field: 'date_of_test_drive', edited_value: value })
                        }}
                        error={validation.invalid && validation.invalid_field == 'date_of_test_drive'}
                        label={'Date of test drive'}
                    />


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
	loader 			            : state.visitor.loaders.createFeedbackLoader
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(VisitorActions.changeCreateFeedbackForm(params)),
	submitForm: (params) => dispatch(VisitorActions.createFeedback(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TestDriveFeedBackScreen)