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
import CommonActions from 'App/Stores/Common/Actions'
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Colors} from 'App/Theme'
import GoogleAddress from 'App/Components/GoogleAddress'
// "first_name__c": "test 12",	(*mandatory)
// 	"last_name__c": "enquiry visit test",	(*mandatory)
// 	"contact_number__c": "1646464944", 	(*mandatory)
// 	"age__c":  "28",
// 	"genders__c": "Male",
// 	"product__c": "a029D000002ZFPtQAO", 	(*mandatory)
// 	"mode_of_buying__c": "Cash",
// 	"exchange_required__c":"No",
// 	"lead_source__c": "Event",
// 	"existing_two_wheelers__c": "Yes",
// 	"purpose_of_buying__c" : "Nothing",
// "usage__c": "Nothing",
// "expected_close_date__c": "2020-08-19",
//  "dealers_sales_person__c": "a0O9D000001hLV9UAM",
// 	"email_id__c": "abc@gmail.com",
// 	"occupation__c" : "Business",
// 	"test_drive_offered__c": "Yes",		(*mandatory)
// 	"customer__c": "0039D000008BMX2QAO",
// 	"address_line_1__c" : “test address”
//  "pincode__c": null


class NewRegistrationFormScreen extends Component {
	componentWillUnmount() {
		const {
			clearRegistrationForm
		} = this.props;

		clearRegistrationForm();
	}

	submit() {
		const { 
			dealers_sales_person__c,
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();
		
		submitForm({
			...form,
			dealers_sales_person__c
		});
	}

    render() {
		const { 
			form,
			loader,
			openModal,
			closeModal,
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
						value={form.first_name__c}
						onChange={(value) => changeForm({ edited_field: 'first_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name__c'}
						label={'First Name*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Last Name'}
						value={form.last_name__c}
						onChange={(value) => changeForm({ edited_field: 'last_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'last_name__c'}
						label={'Last Name*'}
					/>
					
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Contact Number'}
						value={form.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Contact Number*'}
					/>

					<SearchableDropdown
				        dataSource={productsList}
				        placeHolderText={'Select Product'}
				        selectedValue={form.product__c}
				        onChange={(value) => changeForm({ edited_field: 'product__c', edited_value: value })}
				        placeholder={'Type or Select Product'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Product Interested*'}
					/>

					<InputDate
                        style={Style.mb10}
                        placeholder={'Expected Purchase Date'}
                        value={HelperService.dateReadableFormat(form.expected_close_date__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            this.props.changeForm({ edited_field: 'expected_close_date__c', edited_value: formattedDate })
                        }}
                        error={validation.invalid && validation.invalid_field == 'expected_close_date__c'}
						label={'Expected Purchase Date*'}
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

					<InputText
						style={Style.mb10}
						placeholder={'Email'}
						value={form.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={'Email'}
					/>


					<GoogleAddress
						value={form.address_line_1__c}
						changeForm={(value) => changeForm({ edited_field: 'address_line_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address_line_1__c'}
					/>


					<InputNumber
						styles={Style.mb10}
						placeholder={'Pincode'}
						value={form.pincode__c}
						onChange={(value) => changeForm({ edited_field: 'pincode__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'pincode__c'}
						label={'Pincode'}
					/>

				
					<InputNumber
						styles={Style.mb10}
						placeholder={'Age'}
						value={form.age__c}
						onChange={(value) => changeForm({ edited_field: 'age__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'age__c'}
						label={'Age'}
					/>

					{
					// 	<InputText
					// 	style={Style.mb10}
					// 	placeholder={'Purpose of Buying'}
					// 	value={form.purpose_of_buying__c}
					// 	onChange={(value) => changeForm({ edited_field: 'purpose_of_buying__c', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'purpose_of_buying__c'}
					// 	label={'Purpose of Buying*'}
					// />

					// <InputText
					// 	style={Style.mb10}
					// 	placeholder={'Usage'}
					// 	value={form.usage__c}
					// 	onChange={(value) => changeForm({ edited_field: 'usage__c', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'usage__c'}
					// 	label={'Usage*'}
					// />
				}

					<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Gender</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Male'}
							checked={form.genders__c == 'Male'}
							onPress={(event)=>{
			                	let value = form.genders__c == 'Male' ? 'Female' : 'Male';
				                changeForm({ edited_field: 'genders__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'Female'}
							checked={form.genders__c == 'Female'}
							onPress={(event)=>{
			                	let value = form.genders__c == 'Female' ? 'Male' : 'Female';
				                changeForm({ edited_field: 'genders__c', edited_value: value });
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


					

					<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Mode of Purchase</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Cash'}
							checked={form.mode_of_buying__c == 'Cash'}
							onPress={(event)=>{
			                	let value = form.mode_of_buying__c == 'Cash' ? 'Finance' : 'Cash';
				                changeForm({ edited_field: 'mode_of_buying__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'Finance'}
							checked={form.mode_of_buying__c == 'Finance'}
							onPress={(event)=>{
			                	let value = form.mode_of_buying__c == 'Finance' ? 'Cash' : 'Finance';
				                changeForm({ edited_field: 'mode_of_buying__c', edited_value: value });
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
							checked={form.existing_two_wheelers__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.existing_two_wheelers__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'existing_two_wheelers__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
						style={{marginRight: '5%'}} 
							label={'No'}
							checked={form.existing_two_wheelers__c == 'No'}
							onPress={(event)=>{
			                	let value = form.existing_two_wheelers__c == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'existing_two_wheelers__c', edited_value: value });
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
							checked={form.exchange_required__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.exchange_required__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'exchange_required__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'No'}
							checked={form.exchange_required__c == 'No'}
							onPress={(event)=>{
			                	let value = form.exchange_required__c == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'exchange_required__c', edited_value: value });
			                }}
						/>
						</View>
					</View>



					<SearchableDropdown
				        dataSource={sourceEnquiryList}
				        placeHolderText={'Select Source'}
				        selectedValue={form.lead_source__c}
				        onChange={(value) => changeForm({ edited_field: 'lead_source__c', edited_value: value })}
				        placeholder={'Type or Select Source'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Source of Enquiry'}
					/>
			

                 <TextArea
	                placeholder={'Remarks'}
	                label={'Remarks'}
	                numberOfLines={4}
	                style={{width: wp('87.5%')}}
					value={form.remark__c}
					onChange={(value) => changeForm({ edited_field: 'remark__c', edited_value: value })}
					error={validation.invalid && validation.invalid_field == 'remark__c'}
	        	/>

					
			

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
  	productsList 				: state.common.productsList,
  	contact_number              : state.visitor.searchCustomerForm.contact_number,
  	dealers_sales_person__c     : state.user.sfid
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.registerCustomer(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearRegistrationForm()),
	openModal:(params)		   => dispatch(CommonActions.openModal(params)),
	closeModal:(params)		   => dispatch(CommonActions.closeModal(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewRegistrationFormScreen)