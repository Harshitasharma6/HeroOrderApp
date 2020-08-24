import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard, Label, Item} from 'react-native';
import Style from './styles'
import InputText from 'App/Components/FormInput/InputText';
import InputMobile from 'App/Components/FormInput/InputMobile';
import InputNumber from 'App/Components/FormInput/InputNumber';
import BlueButton from 'App/Components/BlueButton';
import WhiteButton from 'App/Components/WhiteButton';
import Select from 'App/Components/Select';
import TextArea from 'App/Components/FormInput/TextArea';
import { connect } from 'react-redux';
import GenericIcon from 'App/Components/GenericIcon'
import ShreeActions from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import InputDate from 'App/Components/FormInput/InputDate';

import {ApplicationStyles} from 'App/Theme'
import {Colors} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import DealersActions from 'App/Stores/Dealers/Actions'
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


class SchemeClaimformScreen extends Component {
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
			status__c: 'Submitted',
			dealer_name__c:"0019D000009zum3QAA",
			scheme_claim_submission_date__c:  HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp()),
			
		});
	}


	saveasdraft() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();
		submitForm({
			...form,
			status__c: 'Draft',
			dealer_name__c:"0019D000009zum3QAA",
			
			scheme_claim_submission_date__c: HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp()),
			
		});
	}

    render() {
		const { 
			form,
			loader,
			changeForm,
			productSchemes,
			submitForm,
			validation,
			schemeApplicableList,
            sourceEnquiryList,
			productsList,
			draftloader	,
		} = this.props;
		
		return (
			<View style={Style.container}>
					<Text style={Style.heading}>{'SCHEME CLAIM FORM'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>

                        <SearchableDropdown
						
						dataSource={schemeApplicableList}
				        placeHolderText={'Select Scheme'}
				        selectedValue={form.scheme_applicable__c}
				        onChange={(value) => changeForm({ edited_field: 'scheme_applicable__c', edited_value: value })}
				        placeholder={'Select Scheme'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Scheme Applicable*'}
					/>

                    <InputNumber
						styles={Style.mb10}
						placeholder={'Online Order No.'}
						value={form.online_order_no__c}
						onChange={(value) => changeForm({ edited_field: 'online_order_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'online_order_no__c'}
						label={'Online Order No.* (For Online Schemes only)'}
					/>

                    <InputNumber
						styles={Style.mb10}
						placeholder={'Refrence  No.'}
						value={form.ref_no_for_reference_schemes_only__c}
						onChange={(value) => changeForm({ edited_field: 'ref_no_for_reference_schemes_only__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ref_no_for_reference_schemes_only__c'}
						label={'Reference No.* (For Refrence Schemes only)'}
					/>
               
				 	<InputText
						style={Style.mb10}
						placeholder={'Customer Name'}
						value={form.customer_name__c}
						onChange={(value) => changeForm({ edited_field: 'customer_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'customer_name__c'}
						label={'Customer  Name*'}
					/>

					
					
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Customer Mobile'}
						value={form.customer_phone__c}
						onChange={(value) => changeForm({ edited_field: 'customer_phone__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'customer_phone__c'}
						label={'Customer Mobile*'}
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

                    <InputDate
                        style={Style.mb10}
                        placeholder={' Date of Invoice' }
                        value={HelperService.removeFieldsAndDateReadableFormat(form.date_of_invoice__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            this.props.changeForm({ edited_field: 'date_of_invoice__c', edited_value: formattedDate })
                        }}
                        error={validation.invalid && validation.invalid_field == 'date_of_invoice__c'}
						label={' Date of Invoice* '}
						mindate={moment.now()}
                    />

                    
                    <View style={{width: '100%', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection:'row'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%', marginRight:'4%'}}>Registered For Warranty*</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
                            style={{marginRight: '10%', }}
                            style1={{marginRight:'4%'}}
							label={'Yes'}
							checked={form.registered_for_warranty__c == 'true'}
							onPress={(event)=>{
			                	let value = form.registered_for_warranty__c == 'ture' ? 'false' : 'true';
				                changeForm({ edited_field: 'registered_for_warranty__c', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%'}} 
							label={'No'}
							checked={form.registered_for_warranty__c == 'false'}
							onPress={(event)=>{
			                	let value = form.registered_for_warranty__c == 'false' ? 'true' : 'false';
				                changeForm({ edited_field: 'registered_for_warranty__c', edited_value: value });
			                }}
						/>
						</View>
					</View>
					<Text style={Style.middleheading}>{'If Not Registered Please Register Before Submission of Claim.'}</Text>
                    
                    <View style={{marginTop: '0%', marginBottom:'1%'}}>
					<BlueButton title={"Register"} style={{width: '40%', marginHorizontal: '59%',}} textStyle={{fontSize: 12}}   onPress={() => {
          NavigationService.navigate('WarrantyRegistrationformScreen');
        
        }}>
	            	
	            </BlueButton>
               
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'4%'}}>
                    <Text style={Style.middletext}>{'Invoice Copy*'}</Text>
                    <WhiteButton
                     title={'Choose File'}
                    style={Style.actionButton}
                     textStyle={Style.actionButtonText}
             
                     />
                     </View>

                     <InputNumber
						styles={Style.mb10}
						placeholder={'Invoice No.'}
						value={form.invoice_no__c}
						onChange={(value) => changeForm({ edited_field: 'invoice_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'invoice_no__c'}
						label={'Invoice No.*'}
					/>

                     <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'0%', marginBottom:'2%'}}>
                    <View>
                    <Text style={Style.middletext}>{'Customer'}</Text>
                    <Text style={Style.middletext1}>{'Acknowledgement'}</Text>
                    </View>
                    <WhiteButton
                     title={'Choose File'}
                    style={Style.actionButton}
                     textStyle={Style.actionButtonText}
             
                     />
                     </View>
                     <Text style={Style.middletext}>{'Customer Id*(Any two)'}</Text>
                     <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                     <WhiteButton
                     title={'Choose File'}
                    style={Style.actionButton}
                     textStyle={Style.actionButtonText}
             
                     />  
                     <WhiteButton
                     title={'Choose File'}
                    style={Style.actionButton}
                     textStyle={Style.actionButtonText}
             
                     />   

                     </View>

                     <InputNumber
						styles={Style.mb10}
						placeholder={'Id No.'}
						value={form.id_no_mentioned_as_per_id_card_1__c}
						onChange={(value) => changeForm({ edited_field: 'id_no_mentioned_as_per_id_card_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'id_no_mentioned_as_per_id_card_1__c'}
						label={'Id No. Mentioned as per ID Card 1*'}
					/>
                    <InputNumber
						styles={Style.mb10}
						placeholder={'Id No.'}
						value={form.id_no_mentioned_as_per_id_card_2__c}
						onChange={(value) => changeForm({ edited_field: 'id_no_mentioned_as_per_id_card_2__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'id_no_mentioned_as_per_id_card_2__c'}
						label={'Id No. Mentioned as per ID Card 2*'}
					/>
                    <InputNumber
						styles={Style.mb10}
						placeholder={'Claim Amount'}
						value={form.expected_claim_amount_by_dealer__c}
						onChange={(value) => changeForm({ edited_field: 'expected_claim_amount_by_dealer__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'expected_claim_amount_by_dealer__c'}
						label={'Claim Amount*'}
					/>
                    <View style={{flexDirection:'row'}}>
                    <GenericCheckBox
							style={{marginRight: '5%'}} 
							
							checked={form.declaration__c == 'true'}
							onPress={(event)=>{
			                	let value = form.declaration__c == 'true' ? 'false' : 'true';
				                changeForm({ edited_field: 'declaration__c', edited_value: value });
			                }}
						/>
                <View style={{maxWidth:'90%'}}>
                <Text style={Style.middleheading1}>{'I/We hereby confirm that the information Provided here is accurate, correct and complete and the documents submitted along with this claim form are genuine'}</Text>    
                </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:'5%'}}>
                <WhiteButton
                     title={'SAVE AS DRAFT'}
                     style={Style.actionButton1}
					 textStyle={Style.actionButtonText1}
					 
					 onPress={() => this.saveasdraft()}
                     />  
                     <WhiteButton
                     title={'SUBMIT'}
                     style={Style.actionButton1}
					 textStyle={Style.actionButtonText1}
					
					
					onPress={() => this.submit()}
                     />   


                </View>
                   
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.dealers.createDealerClaimValidation,
	form 					 	: state.dealers.createDealerClaimForm,
	loader 			            : state.dealers.loaders.createDealerClaimLoader,
	draftloader					: state.dealers.loaders.createDealerDraftLoader,
	schemeApplicableList		: state.common.schemeApplicableList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
	productsList 				: state.common.productsList,
	productSchemes              : state.products.productSchemes,  
  
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(DealersActions.changeDealerClaimForm(params)),
	submitForm: (params)       => dispatch(DealersActions.createDealerClaim(params)),
	clearRegistrationForm: ()  => dispatch(DealersActions.clearRegistrationForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchemeClaimformScreen)