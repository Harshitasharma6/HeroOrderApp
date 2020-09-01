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
import DetailCard from 'App/Components/DetailCard'
import {Spinner } from 'native-base';


// {
//    "product__c":"a029D000002ZFPtQAO",
//    "first_name__c": "Rohit",
//    "last_name__c": "Shukla",
//    "contact_number__c": "09818512785",
//    "email_id__c":  "xyz@gmails.com",
//    "address_line_1__c": "delhi",
//    "recieved_advance__c": "1222",
//    "payment_mode__c": "Cash",
//    "booking_ref_no__c":"123",
//    "expected_delivery_date__c" :"2020-08-28",
//    "booking_date__c": "2020-08-30",
//    "aadhar_card__c":"https://abc.com/a.png",
//    "acknowledgement__c": "https://abc.com/a.png",
//    "driving_license__c" : "https://abc.com/a.png",
//    "insurance__c" :"https://abc.com/a.png",
//    "rc__c" : "https://abc.com/a.png",
//    "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
//    "voter_id_card__c" :"https://abc.com/a.png",   
//    "igst_in_rs__c":"",    
//    "total_tax__c": "50",  
//    "total_subsidy__c": "11",
//    "dealer_discount__c" : "",
//    "total_amount_payable__c": "22222",
//    "tally_invoice_no__c" : "",
//    "customer_gstin_no__c" : "sadasd",
//    "battery_no__c": "asdasd",
//    "charger_no__c": "ewewqeq",
//    "chassis_no__c": "weweqwe",
//    "motor_no__c": "qwewqe",
//    "address_line_2__c":"qwewe",
//    "online_order_no__c":"wewewe",
//    "reference_no__c":"weqwewqe",
//    "model_color__c":"Red",
//    "make_of_battery__c":"wewewe",
//    "capacity_of_each_battery__c":"xasasd",
//    "type_of_battery__c":"wwewe",
//    "owner_s_handbook_no__c":"wqewqewe",
//    "other_financier_name__c":"IDFC",
//    "amount_paid_at_booking__c":"222",
//    "outstanding_amount__c":"222",
//    "financier_name__c":"eeeee"
// }


class InvoiceDetailformScreen extends Component {
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
			currentEnquiryId ,
			dealerId,
			dealersalespersonId,
			
		} = this.props;

		Keyboard.dismiss();
		submitForm({
			...form,
			
			  
		});
	}

	changeImage(url, params) {
		this.props.changeForm({...params, edited_value: url})
	}

    render() {
		const { 
			data,
			form,
			loader,
			changeForm,
			submitForm,
			validation,
			occupationList,
            sourceEnquiryList,
            productsList,
            financier_name,
  			model_color,
  			payment_mode,
  			uploadImage,
  			uploadImageLoading
		} = this.props;
		
		let _this = this;	
		return (
			<View style={Style.container}>
				
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
    	  		<Text style={Style.heading}>{'Add Invoice Detail'}</Text> 
			      {
			      // 	<View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:'2%', }}>
			      // <DetailCard
			      //  title=" Booking Date "
			      //  value="30/08/20"
			      // />
			      //  <DetailCard
			      //  title=" Ex Showroom Price "
			      //  value="20000"
			      // />
			      // </View>
			      // <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:'2%'}}>
			      // <DetailCard
			      //  title=" Advance Recieved "
			      //  value="15000"
			      // />
			      //  <DetailCard
			      //  title=" Outstanding Amount "
			      //  value="5000"
			      // />
			      // </View> 
				}
			   <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Tally Invoice No.'}
						value={form.tally_invoice_no__c}
						onChange={(value) => changeForm({ edited_field: 'tally_invoice_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'tally_invoice_no__c'}
						label={'Tally Invoice No.'}
					/>
					<InputNumber
						styles={Style.mb10}
						placeholder={' GSTIN No.'}
						value={form.customer_gstin_no__c}
						onChange={(value) => changeForm({ edited_field: 'customer_gstin_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'customer_gstin_no__c'}
						label={'Customer GSTIN No.'}
					/>


                    </View>  

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
						value={form.reference_no__c}
						onChange={(value) => changeForm({ edited_field: 'reference_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'reference_no__c'}
						label={'Reference No.* (For Refrence Schemes only)'}
					/>	


					<InputNumber
						styles={Style.mb10}
						placeholder={'Amount Paid at Booking'}
						value={form.amount_paid_at_booking__c}
						onChange={(value) => changeForm({ edited_field: 'amount_paid_at_booking__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'amount_paid_at_booking__c'}
						label={'Amount Paid at Booking'}
					/>	



			   <InputText
						style={Style.mb10}
						placeholder={'First Name'}
						value={form.first_name__c || data.first_name__c}
						onChange={(value) => changeForm({ edited_field: 'first_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name__c'}
						label={'First Name*'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Last Name'}
						value={form.last_name__c || data.last_name__c}
						onChange={(value) => changeForm({ edited_field: 'last_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'last_name__c'}
						label={'Last  Name*'}
					/>					

			   
			   <InputMobile
						styles={Style.mb10}
						placeholder={'Customer Phone No'}
						value={form.contact_number__c  || data.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Customer Phone No*'}
					/>
					

			 	  <InputText
						style={Style.mb10}
						placeholder={'Customer Email'}
						value={form.email_id__c || data.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={'Customer  Email'}
					/>
				 	<GoogleAddress
						value={form.address_line_1__c || data.address_line_1__c}
						changeForm={(value) => changeForm({ edited_field: 'address_line_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address_line_1__c'}
					/>

					 <InputText
						style={Style.mb10}
						placeholder={'Customer Chassis No.'}
						value={form.chassis_no__c}
						onChange={(value) => changeForm({ edited_field: 'chassis_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'chassis_no__c'}
						label={'Customer Chassis No.'}
					/>

					
					<View style={{flexDirection:'row', }}>
						<View style={{width:'45%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Motor No.'}
						value={form.motor_no__c}
						onChange={(value) => changeForm({ edited_field: 'motor_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'motor_no__c'}
						label={'Motor No.'}
					/>
					</View>
					<View style={{width:'45%', marginLeft:'9%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Charger No.'}
						value={form.charger_no__c}
						onChange={(value) => changeForm({ edited_field: 'charger_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'charger_no__c'}
						label={'Charger No. '}
					/>

					</View>
                    </View>  

					<InputNumber
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

					

                	<InputNumber
						styles={Style.mb10}
						placeholder={'Capacity of Each Battery'}
						value={form.capacity_of_each_battery__c}
						onChange={(value) => changeForm({ edited_field: 'capacity_of_each_battery__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'capacity_of_each_battery__c'}
						label={'Capacity of Each Battery'}
					/>

					
				<InputNumber
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

					<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.aadhar_card__c} 
		              loading={uploadImageLoading}
		              onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'aadhar_card__c'}, callback: (_this.changeImage)})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                 <GenericIcon 
				                    name="camera" 
				                    style={Style.recurringActionButtonIcon}
				                  />
		                {' Aadhar Card'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

	        	<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.acknowledgement__c}
		              //loading={uploadImageLoading}
		              onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'acknowledgement__c'}, callback: (_this.changeImage)})}> 
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Acknowledgement'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.driving_license__c}
		              //loading={uploadImageLoading}
		              onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'driving_license__c'}, callback: (_this.changeImage)})}> 
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Driving License'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.insurance__c}
		              //loading={uploadImageLoading} 
		              onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'insurance__c'}, callback: (_this.changeImage)})}> 
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Insurance'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

	            


          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.rc__c} 
		              onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'rc__c'}, callback: (_this.changeImage)})}> 
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' RC'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>


          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.voter_id_card__c} 
		              //onImageSuccess={({image}) => changeForm({edited_field: 'voter_id_card__c', edited_value: image})}>
		               onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'voter_id_card__c'}, callback: (_this.changeImage)})}> 
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Voter Card'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>


          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.others__c} 
		              onImageSuccess={({image}) => uploadImage({image, params: {edited_field: 'others__c'}, callback: (_this.changeImage)})}> 
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Others'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

                    
				<View style={{marginTop:'4%'}}>
					<BlueButton title={"SAVE"} style={{width: '40%', marginHorizontal: '30.5%', height: 40}} textStyle={{fontSize: 12}}
					loading={loader}
					disabled={loader}
					onPress={() => this.submit()}
					>
	            </BlueButton>
			</View>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.updateBookingFormValidation,
	form 					 	: state.visitor.updateBookingForm,
	loader 			            : state.visitor.loaders.updateBookingLoader,
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList,
  	financier_name 				: state.common.financier_name,
  	model_color 				: state.common.model_color,
  	payment_mode 				: state.common.payment_mode,
	data 						: state.visitor.currentVisitorData,
	currentEnquiryId            : state.visitor.currentEnquiryId,
	uploadImageLoading			: state.common.loaders.uploadImageLoader
	  
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changeUpdateBookingForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.updateBooking(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearUpdateBookingForm()),
	uploadImage: (params)      => dispatch(CommonActions.uploadImage(params))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceDetailformScreen)