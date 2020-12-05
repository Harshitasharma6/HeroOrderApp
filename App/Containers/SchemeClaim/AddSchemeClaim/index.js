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
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {ApplicationStyles} from 'App/Theme'
import {Colors} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import DealersActions from 'App/Stores/Dealers/Actions'
import moment from 'moment';
import ImagePicker from 'App/Components/ImagePicker'
import MultipleImagePicker from 'App/Components/ImagePicker/MultipleImagePicker';
import CommonActions from 'App/Stores/Common/Actions';
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
		const {
			data
		  } = this.props.navigation.state.params;	

		Keyboard.dismiss();
		submitForm({
			...form,
			sfid : data.sfid
			
			
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
			uploadImageField,
			  uploadImageLoading,
			  uploadImage
		} = this.props;
	 const {
			data
		  } = this.props.navigation.state.params;
		return (
			<View style={Style.container}>
					<Text style={Style.heading}>{'SCHEME CLAIM '}</Text>

					<GenericDisplayCard dark={false}
                      style={{ width: '98%', elevation: 0 , backgroundColor: Colors.white, zIndex: 3,}}
                     
                     key={data.sfid}
                      //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                      content={[
                          
                          <GenericDisplayCardStrip key={'Claim Number' +  data.name} label={'Claim Number:'} value={data.name} />,
                         
                         
                          <GenericDisplayCardStrip key={'status' + data.name} label={'Status:'} value={data.status__c}  />,
                         
                            <GenericDisplayCardStrip key={'Claim Submission Date' +  data.name} label={'Claim Submission Date:'}   value={HelperService.dateReadableFormat(data.scheme_claim_submission_date__c)} />,
                            <GenericDisplayCardStrip key={'Expected Claim Amount' +  data.name} label={'Expected Claim Amount:'}  value={data.expected_claim_amount_by_dealer__c}  />,
                            <GenericDisplayCardStrip key={'Scheme Applicable' +  data.name} label={'Scheme Applicable:'}  value={data.scheme_applicable_name}  />,
                            <GenericDisplayCardStrip key={'Customer Name' +  data.name} label={'Customer Name:'}  value={data.customer_name__c}  />,
							<GenericDisplayCardStrip key={'Warranty Registered' +  data.name} label={'Warranty Registered:'}  value={data.registered_for_warranty__c  ? 'Yes' : 'No'}  />,
							<GenericDisplayCardStrip key={'Field Team Rejection Reason' +  data.name} label={'Field Team Rejection Reason:'}  value={data.rejection_re__c}  />,
                 
                        
                  ]}
                />
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
					 <InputText
						style={Style.mb10}
						placeholder={'Chassis No.'}
						value={form.chassis_no__c}
						onChange={(value) => changeForm({ edited_field: 'chassis_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'chassis_no__c'}
						label={'Chassis No.'}
					/>

<InputDate
                        style={Style.mb10}
                        placeholder={'Delivery Date'}
                        value={HelperService.dateReadableFormat(form.delivery_date__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            this.props.changeForm({ edited_field: 'delivery_date__c', edited_value: formattedDate })
                        }}
                        error={validation.invalid && validation.invalid_field == 'delivery_date__c'}
						label={'Delivery Date'}
						mindate={moment.now()}
                    />

<View style={{...Style.bottomMargin}}>
		            <MultipleImagePicker
		            	title={'Aadhar Card(front & back)/VoterId/ PAN Card/Driving License/GST Registration certificate(for B2B)*'}
		              	images={form.adhaar_card_front_and_back__c  || []} 
		              	loading={uploadImageLoading && uploadImageField == 'adhaar_card_front_and_back__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'adhaar_card_front_and_back__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'adhaar_card_front_and_back__c'}, multiple: true, previous_value: form.adhaar_card_front_and_back__c,edit:true})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                 <GenericIcon 
				                    name="camera" 
				                    style={Style.recurringActionButtonIcon}
				                  />
		                {'Aadhar Card(front & back)/VoterId/ PAN Card/Driving License/GST Registration certificate(for B2B)*'}
		                </Text>
		              </View>
		            </MultipleImagePicker>
          		</View>
                      
				  <View style={{...Style.bottomMargin}}>
		            <MultipleImagePicker
		            	title={'Insurance/Rc/Tax Token*'}
		              	images={form.insurance__c || []} 
		              	loading={uploadImageLoading && uploadImageField == 'insurance__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'insurance__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'insurance__c'}, multiple: true, previous_value: form.insurance__c,edit:true})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                 <GenericIcon 
				                    name="camera" 
				                    style={Style.recurringActionButtonIcon}
				                  />
		                {'Insurance/Rc/Tax Token'}
		                </Text>
		              </View>
		            </MultipleImagePicker>
          		</View>

				  <View style={{...Style.bottomMargin}}>
		            <MultipleImagePicker
		            	title={'Invoice*'}
		              	images={form.invoice__c || []} 
		              	loading={uploadImageLoading && uploadImageField == 'invoice__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'invoice__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'invoice__c'}, multiple: true, previous_value: form.invoice__c,edit:true})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                 <GenericIcon 
				                    name="camera" 
				                    style={Style.recurringActionButtonIcon}
				                  />
		                {'Invoice'}
		                </Text>
		              </View>
		            </MultipleImagePicker>
          		</View>

				  <View style={{...Style.bottomMargin}}>
		            <MultipleImagePicker
		            	title={'Customer Acknolegment* (in case of Subsidy)'}
		              	images={form.acknowledgement__c || []} 
		              	loading={uploadImageLoading && uploadImageField == 'acknowledgement__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'acknowledgement__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'acknowledgement__c'}, multiple: true, previous_value: form.acknowledgement__c,edit:true})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                 <GenericIcon 
				                    name="camera" 
				                    style={Style.recurringActionButtonIcon}
				                  />
		                {'Customer Acknolegment'}
		                </Text>
		              </View>
		            </MultipleImagePicker>
          		</View>
                      		  
				  <BlueButton title={'ReSubmit'}  style={{alignSelf: 'center', width: '36%' , zIndex: 3,height:'5%', }} textStyle={Style.callButtonText}
				  loading={loader }
				  disabled={loader }
				  onPress={() => this.submit()}
				  />   
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
	uploadImageLoading			: state.common.loaders.uploadImageLoader,
	uploadImageField            : state.common.uploadImageField,
  
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(DealersActions.changeDealerClaimForm(params)),
	submitForm: (params)       => dispatch(DealersActions.createDealerClaim(params)),
	clearRegistrationForm: ()  => dispatch(DealersActions.clearRegistrationForm()),
	uploadImage: (params)      		 => dispatch(CommonActions.uploadImage(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchemeClaimformScreen)