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
import VisitorActions from 'App/Stores/Visitor/Actions'



class NewRegistrationFormScreen extends Component {
 
	submit() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss(); 

		submitForm(form);

		//NavigationService.navigate('VisitorInfoScreen')
	}

    render() {
		const { 
			form,
			loader,
			changeForm,
			submitForm,
			validation,
			occupationList,
            sourceEnquiryList,
            productsList
		} = this.props;
		
		return (
			<View style={Style.container}>
				<Text style={ApplicationStyles.formHeading}>{'New Registration'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>

				 	<InputText
						style={Style.mb10}
						placeholder={'First Name'}
						value={form.first_name}
						onChange={(value) => changeForm({ edited_field: 'first_name', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name'}
						label={'First Name*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Last Name'}
						value={form.last_name}
						onChange={(value) => changeForm({ edited_field: 'last_name', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'last_name'}
						label={'Last Name*'}
					/>
					
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Contact Number'}
						value={form.contact_number}
						onChange={(value) => changeForm({ edited_field: 'contact_number', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number'}
						label={'Contact Number*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Email'}
						value={form.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={'Email'}
					/>

					<TextArea
	                    placeholder={'Address'}
	                    label={'Address'}
	                    numberOfLines={2}
	                    style={Style.mb10}
	                    value={form.address}
						onChange={(value) => changeForm({ edited_field: 'address', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address'}
                	/>

                	<InputNumber
						styles={Style.mb10}
						placeholder={'Age'}
						value={form.age}
						onChange={(value) => changeForm({ edited_field: 'age', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'age'}
						label={'Age'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Purpose of Buying'}
						value={form.purpose_of_buying}
						onChange={(value) => changeForm({ edited_field: 'purpose_of_buying', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'purpose_of_buying'}
						label={'Purpose of Buying*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Usage'}
						value={form.usage}
						onChange={(value) => changeForm({ edited_field: 'usage', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'usage'}
						label={'Usage*'}
					/>

					<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Gender</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Male'}
							checked={form.gender == 'Male'}
							onPress={(event)=>{
			                	let value = form.gender == 'Male' ? 'Female' : 'Male';
				                changeForm({ edited_field: 'gender', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'Female'}
							checked={form.gender == 'Female'}
							onPress={(event)=>{
			                	let value = form.gender == 'Female' ? 'Male' : 'Female';
				                changeForm({ edited_field: 'gender', edited_value: value });
			                }}
						/>
						</View>
					</View>


					<SearchableDropdown
				        dataSource={occupationList}
				        placeHolderText={'Select Occupation'}
				        selectedValue={form.occupation__c}
				        onChange={(value) => changeForm({ edited_field: 'occupation__c', edited_value: value })}
				        placeholder={'Type or Select Occupation'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Occupation'}
					/>


					<SearchableDropdown
				        dataSource={productsList}
				        placeHolderText={'Select Product'}
				        selectedValue={form.product_interested}
				        onChange={(value) => changeForm({ edited_field: 'product_interested', edited_value: value })}
				        placeholder={'Type or Select Product'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Product Interested*'}
					/>

					<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Mode of Purchase</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Cash'}
							checked={form.mode_of_purchase == 'Cash'}
							onPress={(event)=>{
			                	let value = form.mode_of_purchase == 'Cash' ? 'Finance' : 'Cash';
				                changeForm({ edited_field: 'mode_of_purchase', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'Finance'}
							checked={form.mode_of_purchase == 'Finance'}
							onPress={(event)=>{
			                	let value = form.mode_of_purchase == 'Finance' ? 'Cash' : 'Finance';
				                changeForm({ edited_field: 'mode_of_purchase', edited_value: value });
			                }}
						/>
						</View>
					</View>



					<View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Existing Two Wheeler</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={form.existing_two_wheeler == 'Yes'}
							onPress={(event)=>{
			                	let value = form.existing_two_wheeler == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'existing_two_wheeler', edited_value: value });
			                }}
						/>

						<GenericCheckBox
						style={{marginRight: '5%'}} 
							label={'No'}
							checked={form.existing_two_wheeler == 'No'}
							onPress={(event)=>{
			                	let value = form.existing_two_wheeler == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'existing_two_wheeler', edited_value: value });
			                }}
						/>
						</View>
					</View>


					<View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Exchange Required</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={form.exchange_required == 'Yes'}
							onPress={(event)=>{
			                	let value = form.exchange_required == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'exchange_required', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'No'}
							checked={form.exchange_required == 'No'}
							onPress={(event)=>{
			                	let value = form.exchange_required == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'exchange_required', edited_value: value });
			                }}
						/>
						</View>
					</View>



					<SearchableDropdown
				        dataSource={sourceEnquiryList}
				        placeHolderText={'Select Source'}
				        selectedValue={form.source_of_enquiry}
				        onChange={(value) => changeForm({ edited_field: 'source_of_enquiry', edited_value: value })}
				        placeholder={'Type or Select Source'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Source of Enquiry'}
					/>

					<InputDate
                        style={Style.mb10}
                        placeholder={'Expected Purchase Date'}
                        value={form.expected_close_date__c}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            this.props.changeForm({ edited_field: 'expected_close_date__c', edited_value: value })
                        }}
                        error={validation.invalid && validation.invalid_field == 'expected_close_date__c'}
                        label={'Expected Purchase Date'}
                    />


                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Was Test Drive Offered?*</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={form.test_drive_offered__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginHorizontal: '5%'}} 
							label={'No'}
							checked={form.test_drive_offered__c == 'No'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>
						</View>
					</View>

					<BlueButton
						style={ApplicationStyles.formButton}
						loading={loader}
						disabled={loader}
						title={'SUBMIT'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.registerCustomerValidation,
	form 					 	: state.visitor.registerCustomerForm,
	loader 			            : state.visitor.loaders.registerCustomerLoader,
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(VisitorActions.changeRegisterCustomerForm(params)),
	submitForm: (params) => dispatch(VisitorActions.registerCustomer(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewRegistrationFormScreen)