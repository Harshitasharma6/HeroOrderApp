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
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
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


class GenerateInvoiceformScreen extends Component {
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
			data,
			cart, 
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

					
                        
<View style={{marginTop:'0%'}}>             
<BlueButton title={"ADD DEALER INVOCE DETAILS"} style={{width: '48%', marginHorizontal: '52%', }} textStyle={{fontSize: 10, }} onPress={() => NavigationService.navigate('InvoiceDetailformScreen') }>
	            	<GenericIcon name={'pencil'} style={{color: Colors.white, fontSize: 15,}}/>
	            </BlueButton>
					</View>
				<GenericDisplayCard dark={false}
	              style={{ width: '98%', elevation: 0, marginTop: '7%' }}
	            
	              content={[
	                <GenericDisplayCardStrip key={'Invoice Date' } label={'Invoice Date:'}  value={`${HelperService.dateReadableFormatWithHyphen('')}`}/>,
	                <GenericDisplayCardStrip key={'Invoice Value'} label={'Invoice Value:'} value={`${HelperService.currencyValue(cart.totalAmount)}`}/>,
	                  <GenericDisplayCardStrip key={'Invoice No. '} label={'Invoice No. :'} value={`IN-00090`}/>,
	                <GenericDisplayCardStrip key={'Tally Invoice No. '} label={'Tally Invoice No.:'}  value={`TIN-00090`}/>,
					<GenericDisplayCardStrip key={'Customer Name'} label={'Customer Name:'} value={`${data.first_name__c} ${data.last_name__c}`}/>,
					<GenericDisplayCardStrip key={'Customer Address'} label={'Customer Address:'}  value={`${data.address_line_1__c}`}/>,
	                <GenericDisplayCardStrip key={'Customer Phone No.'} label={'Customer Phone No.:'}  value={`${data.contact_number__c}`}/>,
	                  <GenericDisplayCardStrip key={'Customer Email Id '} label={'Customer Email Id :'} value={`${data.email_id__c}`}/>,
	                <GenericDisplayCardStrip key={'Customer Chassis No.'} label={'Customer Chassis No.:'} />,
	                <GenericDisplayCardStrip key={'Customer GSTIN'} label={'Customer GSTIN:'} />,
	                <GenericDisplayCardStrip key={'Motor No.'} label={'Motor No.:'}  />,
					<GenericDisplayCardStrip key={'Controller No.'} label={'Controller No.:'} />,
					<GenericDisplayCardStrip key={' Battery Nos'} label={'Battery Nos:'} />,
					<GenericDisplayCardStrip key={'Charger No.'} label={'Charger No.:'} />,
					
					<GenericDisplayCardStrip key={'Make of Battery'} label={'Make of Battery:'} />,
					<GenericDisplayCardStrip key={'Capacity of each Battery'} label={'Capacity of each Battery:'} />,
					<GenericDisplayCardStrip key={'Type of Battery'} label={'Type of Battery:'} />,
					<GenericDisplayCardStrip key={'Owners HAndbook No.'} label={'Owners Handbook No.:'} />,
					<GenericDisplayCardStrip key={'Model Color'} label={'Model Color:'} />,
					
					
	                

	            ]}
            />

                 
				<View style={{marginTop:'10%'}}>
				<BlueButton title={"GENERATE INVOCE"} style={{width: '40%', marginHorizontal: '32%', }} textStyle={{fontSize: 12,}} >
	            	
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
  	contact_number              : state.visitor.searchCustomerForm.contact_number,
  	cart     					: state.products.cart,
  	data: state.visitor.currentVisitorData,
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.registerCustomer(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearRegistrationForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GenerateInvoiceformScreen)