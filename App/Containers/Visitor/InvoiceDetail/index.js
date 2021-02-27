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
import GenericCheckBox from 'App/Components/GenericCheckBox';
import VisitorActions from 'App/Stores/Visitor/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import moment from 'moment';
import GoogleAddress from 'App/Components/GoogleAddress';
import ImagePicker from 'App/Components/ImagePicker'
import MultipleImagePicker from 'App/Components/ImagePicker/MultipleImagePicker';
import DetailCard from 'App/Components/DetailCard'
import {Spinner } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';


// 	  "tally_invoice_no__c" : "",
//    "customer_gstin_no__c" : "sadasd",
//    "online_order_no__c":"wewewe",
//    "reference_no__c":"weqwewqe",
//    "amount_paid_at_booking__c":"amount paid at booking",
//    "first_name__c": "Rohit",
//    "last_name__c": "Shukla",
//    "contact_number__c": "09818512785",
//    "email_id__c":  "xyz@gmails.com",
//    "address_line_1__c": "delhi",
   
   
//    "chassis_no__c": "weweqwe",
//    "motor_no__c": "qwewqe",
//    "charger_no__c": "ewewqeq",
//    "battery_no__c": "asdasd",
//    "model_color__c":"Red",
//    "make_of_battery__c":"wewewe",
//    "capacity_of_each_battery__c":"xasasd",
//    "type_of_battery__c":"wwewe",
//    "owner_s_handbook_no__c":"wqewqewe",
//    "other_financier_name__c":"IDFC",
//    "financier_name__c":"eeeee"
   
   
//    "aadhar_card__c":"https://abc.com/a.png",
//    "acknowledgement__c": "https://abc.com/a.png",
//    "driving_license__c" : "https://abc.com/a.png",
//    "insurance__c" :"https://abc.com/a.png",
//    "rc__c" : "https://abc.com/a.png",
//    "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
//    "voter_id_card__c" :"https://abc.com/a.png",  
   
   
//    "product__c":"a029D000002ZFPtQAO",
   
//   
//   "amount_paid_at_booking__c":"amount paid at booking", [RENAME THIS FIELD ON PAGE ]
//   "total_amount_payable__c": "TOTAL AMOUNT OF BOOKING AT THE TIME CHECKOUT"
//   "basic_amount__c" = "BASIC PRICE "
//    "total_tax__c": "taxes",  
//    "total_subsidy__c": "FRAME SUBSODY",
//    "dealer_discount__c" : "DEALE DISCONT",
//    Offer_Applied__c = "true/false"
//    ,
   
   
//    MISSING , please add this. FOR BACKEND
//  


class InvoiceDetailformScreen extends Component {
	componentDidMount() {
		const { 
			form,
			changeForm
		} = this.props;

		if (form.outstanding_amount__c == 0) {
			changeForm({
				edited_field: 'amount_paid_at_booking__c', 
				edited_value: 0
			})
		}
	}

	componentWillUnmount() {
		const {
			clearRegistrationForm
		} = this.props;

		clearRegistrationForm();
	}

	submit() {
		Keyboard.dismiss();
		const { 
			submitForm, 
			submitNewBookingForm,
			form,
			newBookingForm,
			currentEnquiryId,
			dealerId,
			dealersalespersonId
		} = this.props;

		let showInfo= ''
		if (this.props.navigation.state.params) {
			showInfo = this.props.navigation.state.params.showInfo
		}

		submitForm({
			...form,
			newBookingForm: !showInfo ? newBookingForm : false,
			amount_paid_at_booking__c: form.outstanding_amount__c == 0 ? 0 : form.amount_paid_at_booking__c
		});
	}

	changeImage(url, params) {
		this.props.changeForm({...params, edited_value: url})
	}

    render() {
		const { 
			form,
			newBookingForm,
			loader,
			newLoader,
			changeForm,
			submitForm,
			validation,
			orderCheckout,
			occupationList,
            sourceEnquiryList,
            productsList,
            financier_name,
  			model_color,
  			payment_mode,
  			uploadImage,
  			bookingInfoForm,
  			uploadImageField,
  			uploadImageLoading,
  			submitNewBookingForm
		} = this.props;

		let showInfo= ''

		if (this.props.navigation.state.params) {
			showInfo = this.props.navigation.state.params.showInfo
		}
		
		let _this = this;

		return (
			<View style={Style.container}>
				
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
    	  		<Text style={Style.heading}>{'Add Dealer Invoice Detail'}</Text> 
			      {
			      	showInfo ? 
			      	<View>
			      	<View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:'2%', }}>
				      <DetailCard
				       title=" Booking Date "
				       value={HelperService.dateReadableFormat(bookingInfoForm.purchased_date__c)}
				      />
				       <DetailCard
				       title=" Ex Showroom Price "
				       value={bookingInfoForm.total_amount_payable__c}
				      />
			      </View>
			      <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:'2%'}}>
				      <DetailCard
				       title="Advance Recieved"
				       value={bookingInfoForm.amount_paid_at_booking__c}
				      />
				       <DetailCard
				       title=" Outstanding Amount "
				       value={bookingInfoForm.outstanding_amount__c}
				      />
			      </View></View> : []
				}

			{
				(showInfo && form.outstanding_amount__c == 0 && bookingInfoForm.chassis_no__c &&  bookingInfoForm.motor_no__c && bookingInfoForm.charger_no__c && bookingInfoForm.battery_no__c && bookingInfoForm.make_of_battery__c && bookingInfoForm.type_of_battery__c &&  bookingInfoForm.capacity_of_each_battery__c && bookingInfoForm.adhaar_card_front_and_back__c && bookingInfoForm.insurance__c && bookingInfoForm.invoice__c &&bookingInfoForm.acknowledgement__c) ? [] :  
				<>
			   <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
					<InputText
						styles={Style.mb10}
						placeholder={'Tally Invoice No.'}
						value={form.tally_invoice_no__c}
						onChange={(value) => changeForm({ edited_field: 'tally_invoice_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'tally_invoice_no__c'}
						label={'Tally Invoice No.'}
					/>
					<InputText
						styles={Style.mb10}
						placeholder={' GSTIN No.'}
						value={form.customer_gstin_no__c}
						onChange={(value) => changeForm({ edited_field: 'customer_gstin_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'customer_gstin_no__c'}
						label={'Customer GSTIN No.'}
					/>


                    </View>  

					<InputText
						styles={Style.mb10}
						placeholder={'Online Order No.'}
						value={form.online_order_no__c}
						onChange={(value) => changeForm({ edited_field: 'online_order_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'online_order_no__c'}
						label={'Online Order No.* (For Online Schemes only)'}
					/>

                    <InputText
						styles={Style.mb10}
						placeholder={'Refrence  No.'}
						value={form.reference_no__c}
						onChange={(value) => changeForm({ edited_field: 'reference_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'reference_no__c'}
						label={'Reference No.* (For Refrence Schemes only)'}
					/>	

					{
						form.outstanding_amount__c == 0 ? [] : 
							<InputNumber
								styles={Style.mb10}
								placeholder={`Total Amount Payable ${form.outstanding_amount__c ? HelperService.currencyValue(form.outstanding_amount__c) : HelperService.currencyValue(form.total_amount_payable__c)}`}
								value={form.amount_paid_at_booking__c}
								onChange={(value) => changeForm({ edited_field: 'amount_paid_at_booking__c', edited_value: value })}
								error={validation.invalid && validation.invalid_field == 'amount_paid_at_booking__c'}
								label={'Amount'}
							/>	
					}



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
						label={'Last  Name*'}
					/>					

			   
			   <InputMobile
						styles={Style.mb10}
						placeholder={'Customer Phone No'}
						value={form.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Customer Phone No*'}
					/>
					

			 	  <InputText
						style={Style.mb10}
						placeholder={'Customer Email'}
						value={form.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={'Customer  Email'}
					/>
				 	<GoogleAddress
						value={form.address_line_1__c}
						changeForm={(value) => changeForm({ edited_field: 'address_line_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address_line_1__c'}
					/>

					 <InputText
						style={Style.mb10}
						placeholder={'Chassis No.'}
						value={form.chassis_no__c}
						onChange={(value) => changeForm({ edited_field: 'chassis_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'chassis_no__c'}
						label={'Chassis No.'}
					/>

					
					<View style={{flexDirection:'row', }}>
						<View style={{width:'45%'}}>
					<InputText
						styles={Style.mb10}
						placeholder={'Motor No.'}
						value={form.motor_no__c}
						onChange={(value) => changeForm({ edited_field: 'motor_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'motor_no__c'}
						label={'Motor No.'}
					/>
					</View>
					<View style={{width:'45%', marginLeft:'9%'}}>
					<InputText
						styles={Style.mb10}
						placeholder={'Charger No.'}
						value={form.charger_no__c}
						onChange={(value) => changeForm({ edited_field: 'charger_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'charger_no__c'}
						label={'Charger No. '}
					/>

					</View>
                    </View>  

					<InputText
						styles={Style.mb10}
						placeholder={' Battery No. *'}
						value={form.battery_no__c}
						onChange={(value) => changeForm({ edited_field: 'battery_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'battery_no__c'}
						label={'Battery No. '}
					/>

					<SearchableDropdown
				        dataSource={model_color}
				        placeHolderText={'Select Color'}
				        selectedValue={form.model_color__c}
				        onChange={(value) => changeForm({ edited_field: 'model_color__c', edited_value: value })}
				        placeholder={'Type or Select Color'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Model Color'}
					 />


					<InputText
						style={Style.mb10}
						placeholder={'Make of Battery'}
						value={form.make_of_battery__c}
						onChange={(value) => changeForm({ edited_field: 'make_of_battery__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'make_of_battery__c'}
						label={'Make of Battery'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Type of Battery'}
						value={form.type_of_battery__c}
						onChange={(value) => changeForm({ edited_field: 'type_of_battery__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'type_of_battery__c'}
						label={'Type of Battery'}
					/>	

					

                	<InputText
						styles={Style.mb10}
						placeholder={'Capacity of Each Battery'}
						value={form.capacity_of_each_battery__c}
						onChange={(value) => changeForm({ edited_field: 'capacity_of_each_battery__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'capacity_of_each_battery__c'}
						label={'Capacity of Each Battery'}
					/>

					
				<InputText
						styles={Style.mb10, {marginBottom:'1%'}}
						placeholder={'Owners Handbook No.'}
						value={form.owner_s_handbook_no__c}
						onChange={(value) => changeForm({ edited_field: 'owner_s_handbook_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'owner_s_handbook_no__c'}
						label={'Owners Handbook No.'}
					/>
					
					<SearchableDropdown
				        dataSource={financier_name}
				        placeHolderText={'Select Financier'}
				        selectedValue={form.financier_name__c}
				        onChange={(value) => changeForm({ edited_field: 'financier_name__c', edited_value: value })}
				        placeholder={'Type or Select Financier'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Financier Name'}
					 /> 


					<InputText
						style={Style.mb10}
						placeholder={'Other Financier Name'}
						value={form.other_financier_name__c} 
						onChange={(value) => changeForm({ edited_field: 'other_financier_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'other_financier_name__c'}
						label={'Other Financier Name'}
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

                <TextArea
	                placeholder={'Remarks'}
	                label={'Remarks'}
	                numberOfLines={4}
	                style={{marginBottom: hp('2%'),width: wp('87.5%')}}
					value={form.remark__c}
					onChange={(value) => changeForm({ edited_field: 'remark__c', edited_value: value })}
					error={validation.invalid && validation.invalid_field == 'remark__c'}
	        	/>

<View style={{...Style.bottomMargin}}>
		            <MultipleImagePicker
		            	//key={form.adhaar_card_front_and_back__c }
		            	title={'Aadhar Card(front & back)/VoterId/ PAN Card/Driving License/GST Registration certificate(for B2B)*'}
		              	images={form.adhaar_card_front_and_back__c || []} 
		              	//loading={uploadImageLoading && uploadImageField == 'adhaar_card_front_and_back__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'adhaar_card_front_and_back__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'adhaar_card_front_and_back__c'}, multiple: true, previous_value: form.adhaar_card_front_and_back__c,})}>
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
		            	//key={form.insurance__c }
		            	title={'Insurance/Rc/Tax Token'}
		              	images={form.insurance__c || []} 
		              	//loading={uploadImageLoading && uploadImageField == 'insurance__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'insurance__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'insurance__c'}, multiple: true, previous_value: form.insurance__c,})}>
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
		            	//key={form.invoice__c }
		            	title={'Dealer Invoice'}
		              	images={form.invoice__c || []} 
		              	//loading={uploadImageLoading && uploadImageField == 'invoice__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'invoice__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'invoice__c'}, multiple: true, previous_value: form.invoice__c,})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                 <GenericIcon 
				                    name="camera" 
				                    style={Style.recurringActionButtonIcon}
				                  />
		                {'Dealer Invoice'}
		                </Text>
		              </View>
		            </MultipleImagePicker>
          		</View>

				  <View style={{...Style.bottomMargin}}>
		            <MultipleImagePicker
		            	//key={form.acknowledgement__c}
		            	title={'Customer Acknowlegment (in case of Subsidy)'}
		              	images={form.acknowledgement__c || []} 
		              	//loading={uploadImageLoading && uploadImageField == 'acknowledgement__c'}
		              	onClearImage={(value) => changeForm({ edited_field: 'acknowledgement__c', edited_value: '' })}
		              	onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'acknowledgement__c'}, multiple: true, previous_value: form.acknowledgement__c,})}>
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

                    
				<View style={{marginTop:'4%'}}>
					<BlueButton title={"SAVE"} style={ApplicationStyles.formButton}
					loading={loader || newLoader}
					disabled={loader || newLoader}
					onPress={() => this.submit()}
					>
	            </BlueButton>
			</View>
			</>
		}
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.updateBookingFormValidation,
	form 					 	: state.visitor.updateBookingForm,
	newBookingForm 				: state.visitor.newBookingForm,
	loader 			            : state.visitor.loaders.updateBookingLoader,
	newLoader					: state.visitor.loaders.newBookingLoader,
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList,
  	financier_name 				: state.common.financier_name,
  	model_color 				: state.common.model_color,
  	payment_mode 				: state.common.payment_mode,
	currentEnquiryId            : state.visitor.currentEnquiryId,
	uploadImageLoading			: state.common.loaders.uploadImageLoader,
	uploadImageField            : state.common.uploadImageField,
	bookingInfoForm             : state.visitor.bookingInfoForm
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       		 => dispatch(VisitorActions.changeUpdateBookingForm(params)),
	submitForm: (params)       		 => dispatch(VisitorActions.updateBooking(params)),
	submitNewBookingForm: (params)   => dispatch(VisitorActions.newBooking(params)),
	clearRegistrationForm: ()  		 => dispatch(VisitorActions.clearUpdateBookingForm()),
	uploadImage: (params)      		 => dispatch(CommonActions.uploadImage(params)),
	orderCheckout: (params)    		 => dispatch(VisitorActions.orderCheckout(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceDetailformScreen)