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
import {ApplicationStyles} from 'App/Theme'
import SubDealersActions from 'App/Stores/SubDealers/Actions';
import Underline from 'App/Components/Underline';
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


class SubDealerFormScreen extends Component {
	componentDidMount() {
		
	}

	componentWillUnmount() {
		const {
			clearRegistrationForm
		} = this.props;

		clearRegistrationForm();
	}

	submit() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();
		submitForm({
			...form,
			sfid:'0129D000000ahCQQAW',
			parentId:'0019D000009zum3QAA',
			
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
				<Text style={Style.heading}>{'ADD SUB DEALERS'}</Text>
                <Underline/>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
                <Text style={Style.heading1}>{' SUB DEALERS INFO'}</Text>
                <Underline/>
                <View style={{ marginLeft: '5%', marginRight:'5%', marginTop:'5%'}}>
                     <InputText
						style={Style.mb10}
						placeholder={' Name'}
						value={form.name}
						onChange={(value) => changeForm({ edited_field: 'name', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'name'}
						label={' Name*'}
					/>
                </View>
               
                <View style={{ marginLeft: '5%', marginRight:'5%'}}>
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Phone No.'}
						value={form.phone}
						onChange={(value) => changeForm({ edited_field: 'phone', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'phone'}
						label={'Phone No.*'}
					/>
                </View>

                <View style={{ marginLeft: '5%', marginRight:'5%'}}>
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Alternate Phone No.'}
						value={form.phone2__c}
						onChange={(value) => changeForm({ edited_field: 'phone2__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'phone2__c'}
						label={'Alternate Phone No.'}
					/>
                </View>
                <View style={{flexDirection:'row', }}>
						<View style={{width:'40%', marginLeft: '5%'}}>
					<InputText
						styles={Style.mb10}
						placeholder={'City'}
						value={form.city__c}
						onChange={(value) => changeForm({ edited_field: 'city__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'city__c'}
						label={'City'}
					/>
					</View>
					<View style={{width:'40%', marginLeft:'7%'}}>
					<InputText
						styles={Style.mb10}
						placeholder={'State'}
						value={form.state__c}
						onChange={(value) => changeForm({ edited_field: 'state__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'state__c'}
						label={'State'}
					/>

					</View>
                    </View>  
                    <View style={{ marginLeft: '1%', marginRight:'1%', }}>
					<GoogleAddress
						value={form.address_line_1__c}
						changeForm={(value) => changeForm({ edited_field: 'address_line_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address_line_1__c'}
					/>
                    </View>  
                	

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
	validation      			: state.subdealers.createSubDealerValidation,
	form 					 	: state.subdealers.createSubDealerForm,
	loader 			            : state.subdealers.loaders.createSubDealerLoader,
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList,
  	
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(SubDealersActions.changeSubDealerForm(params)),
	submitForm: (params)       => dispatch(SubDealersActions.createSubDealer(params)),
	clearRegistrationForm: ()  => dispatch(SubDealersActions.clearRegistrationForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubDealerFormScreen)