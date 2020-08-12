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
import CustomerInfoCard from 'App/Containers/Insights/Customers/CustomerInfoCard'



class CustomerRegistrationForm extends Component {
 
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
			form,
			loader,
			changeForm,
			submitForm,
			validation,
			occupationList,
            sourceEnquiryList,
            productsList,
            visitorData
		} = this.props;
		
		return (
			<View style={Style.container}>
				<CustomerInfoCard data={visitorData.data[0]}/>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
					
					<SearchableDropdown
				        dataSource={productsList}
				        placeHolderText={'Select Product'}
				        selectedValue={form.product_interested}
				        onChange={(value) => changeForm({ edited_field: 'product_interested', edited_value: value })}
				        placeholder={'Type or Select Product'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Product Interested'}
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
			                	let value = form.mode_of_purchase == 'Cash' ? 'Finance' : 'Cash';
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
			                	let value = form.existing_two_wheeler == 'Yes' ? 'No' : 'Yes';
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
			                	let value = form.exchange_required == 'Yes' ? 'No' : 'Yes';
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
                        value={form.expected_purchase_date}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            this.props.changeForm({ edited_field: 'expected_purchase_date', edited_value: value })
                        }}
                        error={validation.invalid && validation.invalid_field == 'expected_purchase_date'}
                        label={'Expected Purchase Date'}
                    />


                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Was Test Drive Offered?</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={form.was_test_drive_offered == 'Yes'}
							onPress={(event)=>{
			                	let value = form.was_test_drive_offered == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'was_test_drive_offered', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginHorizontal: '5%'}} 
							label={'No'}
							checked={form.was_test_drive_offered == 'No'}
							onPress={(event)=>{
			                	let value = form.was_test_drive_offered == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'was_test_drive_offered', edited_value: value });
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
  	productsList 				: state.common.productsList,
  	visitorData 				: state.visitor.visitorSearchSuccessData
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(VisitorActions.changeRegisterCustomerForm(params)),
	submitForm: (params) => dispatch(VisitorActions.registerCustomer(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerRegistrationForm)