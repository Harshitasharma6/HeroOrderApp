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
import { Tab, Tabs, TabHeading } from 'native-base';


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
			submitNewBookingForm,
			form,
			newBookingForm,
			currentEnquiryId ,
			dealerId,
			dealersalespersonId
		} = this.props;

		let showInfo= ''

		if (this.props.navigation.state.params) {
			showInfo = this.props.navigation.state.params.showInfo
		}

		Keyboard.dismiss();

		if (!showInfo) {
			submitNewBookingForm(newBookingForm);
		}

		submitForm({
			...form,
			others__c: ["https://abc.com/a.png","https://abc.com/a1.png"]
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
    	  		<Text style={Style.heading}>{'Add Invoice Detail'}</Text>  
				<View style={{marginTop:'4%'}}>
					<Tabs tabBarUnderlineStyle={Style.tabUnderLine} style={Style.mainTabs} initialPage={'1'} >
				        <Tab selected={false} underlineStyle={Style.tabUnderLine} heading={<TabHeading style={Style.tabHeading} ><Text style={Style.tabText}>Targets</Text></TabHeading>}>
				        </Tab>
				        <Tab selected={false} underlineStyle={Style.tabUnderLine} heading={<TabHeading style={Style.tabHeading}><Text style={Style.tabText}>Summary</Text></TabHeading>}>
				        </Tab>
      				</Tabs>
					<BlueButton title={"SAVE"} style={ApplicationStyles.formButton}
						loading={loader || newLoader}
						disabled={loader || newLoader}
						onPress={() => this.submit()}
					>
	            	</BlueButton>
				</View>
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