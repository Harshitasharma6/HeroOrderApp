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
import GenericIcon from 'App/Components/GenericIcon'
import ShreeActions from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import InputDate from 'App/Components/FormInput/InputDate';
import WhiteButton from 'App/Components/WhiteButton';
import {ApplicationStyles} from 'App/Theme'
import {Colors} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import VisitorActions from 'App/Stores/Visitor/Actions'
import moment from 'moment';

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


class GenerateRecieptformScreen extends Component {
	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	submit() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();
		submitForm({
			...form,
			dealers_sales_person__c: 'a0O9D000001hLV9UAM'
		});
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
				
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
               
				 	<InputText
						style={Style.mb10}
						placeholder={'Customer Name'}
						value={form.first_name__c}
						onChange={(value) => changeForm({ edited_field: 'first_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name__c'}
						label={'Customer  Name*'}
					/>

					
					<View style={{flexDirection:'row',}}>
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Contact Number'}
						value={form.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Customer Contact No*'}
					/>
					<View style={{marginLeft:'7%', width:'40%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Enter OTP'}
						value={form.age__c}
						onChange={(value) => changeForm({ edited_field: 'age__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'age__c'}
						label={' Enter OTP'}
					/>
					</View>
                    </View>         

					<InputText
						style={Style.mb10}
						placeholder={'Customer Email'}
						value={form.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={' Customer Email'}
					/>

						<InputText
						style={Style.mb10}
						placeholder={'Customer Address'}
						value={form.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={'Customer Address'}
					/>

					

                	<InputNumber
						styles={Style.mb10}
						placeholder={'Recieved Advance'}
						value={form.age__c}
						onChange={(value) => changeForm({ edited_field: 'age__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'age__c'}
						label={'Recieved Advance'}
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

					<View style={{width: '100%',   flexDirection: 'row', marginBottom:'4%' }}>
						<View>
                        <Text style={{...ApplicationStyles.label, marginBottom: '2%'}}>Payment Mode</Text>
						
						<GenericCheckBox 
							style={{marginRight: '5%', marginBottom:'0%'}}
							style1={{marginLeft:'7%'}}
							label={'Digital'}
							checked={form.genders__c == 'Male'}
							onPress={(event)=>{
			                	let value = form.genders__c == 'Male' ? 'Female' : 'Male';
				                changeForm({ edited_field: 'genders__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%', marginBottom:'0%'}} 
							style1={{marginLeft:'14%'}}
							label={'Cash'}
							checked={form.genders__c == 'Female'}
							onPress={(event)=>{
			                	let value = form.genders__c == 'Female' ? 'Male' : 'Female';
				                changeForm({ edited_field: 'genders__c', edited_value: value });
			                }}
						/>
                        <GenericCheckBox
							style={{marginRight: '5%',marginBottom:'0%' }} 
							label={'Cheque'}
							checked={form.genders__c == 'Female'}
							onPress={(event)=>{
			                	let value = form.genders__c == 'Female' ? 'Male' : 'Female';
				                changeForm({ edited_field: 'genders__c', edited_value: value });
			                }}
						/>
						
                        </View>
                        <View style={{marginRight:'10%', marginLeft: '18%', width:'45%'}}>
                        <InputNumber
						styles={Style.mb10}
						placeholder={'Ref. No.'}
						value={form.age__c}
						onChange={(value) => changeForm({ edited_field: 'age__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'age__c'}
						label={'Ref. No.'}
					        />


                        </View>
					</View>
                    <InputDate
                        style={Style.mb10}
                        placeholder={'Expected Delievery Date'}
                        value={HelperService.removeFieldsAndDateReadableFormat(form.expected_close_date__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            this.props.changeForm({ edited_field: 'expected_close_date__c', edited_value: formattedDate })
                        }}
                        error={validation.invalid && validation.invalid_field == 'expected_close_date__c'}
						label={'Expected Delievery Date*'}
						mindate={moment.now()}
                    />

<BlueButton title={"ATTACH DOCUMENTS"} style={{width: '53%', marginHorizontal: '46%',}} textStyle={{fontSize: 12}} >
	            	<GenericIcon name={'photo'} style={{color: Colors.white, fontSize: 15}}/>
	            </BlueButton>



                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:'4%'}}>
						
						<View style={{flexDirection: 'row',  }}>
						<GenericCheckBox 
							style={{marginRight: '5%', marginBottom:'0%'}}
							style1={{marginLeft:'12%'}}
							label={'Driving License'}
							checked={form.test_drive_offered__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginHorizontal: '0%', marginBottom:'0%'}} 
							label={'Aadhar Card'}
							checked={form.test_drive_offered__c == 'No'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>
						</View>
                        <View style={{flexDirection: 'row',  }}>
						<GenericCheckBox 
							style={{marginRight: '5%',marginBottom:'0%'}}
							style1={{marginLeft:'20%'}}
							label={'Voter Id Card'}
							checked={form.test_drive_offered__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginHorizontal: '-3.5%', marginBottom:'0%'}} 
							style1={{marginLeft:'38%'}}
							label={'RC'}
							checked={form.test_drive_offered__c == 'No'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>
						</View>
                        <View style={{flexDirection: 'row', }}>
						<GenericCheckBox 
							style={{marginRight: '5%',marginBottom:'0%'}}
							label={'Acknowledgement'}
							checked={form.test_drive_offered__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginHorizontal: '4%', marginBottom:'0%'}} 
							style1={{marginLeft:'13%'}}
							label={'Insurance '}
							checked={form.test_drive_offered__c == 'No'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>
						</View>
                        <View style={{flexDirection: 'row', }}>
						<GenericCheckBox 
							style={{marginRight: '5%', }}
							style1={{marginLeft:'42%'}}
							label={'others'}
							checked={form.test_drive_offered__c == 'Yes'}
							onPress={(event)=>{
			                	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			                }}
						/>

						
						</View>
					</View>
					<View style={{marginTop: '5%'}}>
					<BlueButton title={"GENERATE BOOKING RECIEPT"} style={{width: '60%', marginHorizontal: '22%',}} textStyle={{fontSize: 12}} >
	            	
	            </BlueButton>
                    </View>
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
  	contact_number              : state.visitor.searchCustomerForm.contact_number
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.registerCustomer(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearRegistrationForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GenerateRecieptformScreen)