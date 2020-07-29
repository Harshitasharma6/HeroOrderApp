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
import Ratings from 'App/Components/Ratings'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



class TestDriveFeedBackScreen extends Component {
 
	submit() {
		// const { 
		// 	submitForm, 
		// 	form,
		// 	access_token
		// } = this.props;

		// Keyboard.dismiss(); 

		// submitForm({
		// 	form, 
		// 	...{
		// 		access_token: access_token
		// 	}
		// });

		NavigationService.navigate('VisitorInfoScreen')
	}

    render() {
		const { 
			validation, 
			form,
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

					<SearchableDropdown
				        dataSource={[{id: 'Boss', name: 'Boss'}, {id: 'Admin', name: 'Admin'}, {id: 'Dealer', name: 'Dealer'}]}
				        placeHolderText={'Model Name'}
				        selectedValue={''}
				        onChange={(value) => changeForm({ edited_field: 'occupation', edited_value: value })}
				        placeholder={'Type or Select Model Name'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Model Name'}
					/>

				 	<InputText
						style={Style.mb10}
						placeholder={''}
						value={form.CounterName}
						onChange={(value) => changeForm({ edited_field: 'CounterName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CounterName'}
						label={'Vehicle No'}
					/>


					<Text style={{...ApplicationStyles.label, marginBottom: hp('3%')}}>Rate the vehicle on the following grounds:</Text>



					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Ride Comfort</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings value={2}/>
					</View>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Ease of Handling</Text>
						<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings value={0}/>
					</View>


					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Responsiveness of the Vehicle</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings value={0}/>
					</View>

					<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Overall Experience</Text>
					<View style={{flexDirection: 'row', marginBottom: hp('3%')}}>
					<Ratings value={0}/>
					</View>

					

				

					<BlueButton
						style={{marginTop: hp('1%')}}
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
	validation      			: state.shree.shreeDealerFormValidation,
	access_token    			: state.startDay.access_token,
	form 					 	: state.shree.shreeDealerForm,
	loader 			            : state.shree.createShreeDealerLoader
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(ShreeActions.changeShreeDealerForm(params)),
	submitForm: (params) => dispatch(ShreeActions.createShreeDealer(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TestDriveFeedBackScreen)