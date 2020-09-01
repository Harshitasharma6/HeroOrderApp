import React, { Component } from 'react'
import { View, Text, Image, Keyboard, ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import InputMobile from 'App/Components/FormInput/InputMobile'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import Style from '../styles';
import {Colors} from 'App/Theme'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import VisitorInfoCard from './VisitorInfoCard';


//   "first_name__c": "test 12",  (*mandatory)
//   "last_name__c": "enquiry visit test",  (*mandatory)
//   "contact_number__c": "1646464944",   (*mandatory)
//   "age__c":  "28",
//   "genders__c": "Male",
//   "product__c": "a029D000002ZFPtQAO",   (*mandatory)
//   "mode_of_buying__c": "Cash",
//   "exchange_required__c":"No",
//   "lead_source__c": "Event",
//   "existing_two_wheelers__c": "Yes",
//   "purpose_of_buying__c" : "Nothing",
// 	 "usage__c": "Nothing",
//   "expected_close_date__c": "2020-08-19",
//   "dealers_sales_person__c": "a0O9D000001hLV9UAM",
//   "email_id__c": "abc@gmail.com",
//   "occupation__c" : "Business",
//   "test_drive_offered__c": "Yes",    (*mandatory)
//   "customer__c": "0039D000008BMX2QAO",
//   "address_line_1__c" : “test address”


class VisitorInfoScreen extends Component {
    render() {
    	const {
    		data,
    		productsList
		} = this.props
        return (
        	<ScrollView style={{marginTop: '4%'}}>
        		<VisitorInfoCard onPress={() => NavigationService.navigate('UpdateVisitorScreen')} data={data}/>
	            <BlueButton title={"Add test drive feedback"} style={{width: '88%', marginHorizontal: '6%'}} textStyle={{fontSize: 15}} onPress={() => NavigationService.navigate('TestDriveFeedBackScreen')}>
	            	<GenericIcon name={'plus-circle'} style={{color: Colors.white, fontSize: 20}}/>
	            </BlueButton>
	            <GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0, marginTop: '4%' }}
	              key={data.id}
	              content={[
	                <GenericDisplayCardStrip key={'Phone Number' + data.id} label={'Phone Number'} value={data.contact_number__c} />,
	                <GenericDisplayCardStrip key={'Email'+ data.id} label={'Email'} value={data.email_id__c} />,
	                  <GenericDisplayCardStrip key={'Address'+ data.id} label={'Address'} value={data.address_line_1__c || ''} />,
	                <GenericDisplayCardStrip key={'Occupation'+ data.id} label={'Occupation'} value={data.occupation__c} />,
	                <GenericDisplayCardStrip key={'Source of Enquiry'+ data.id} label={'Source of Enquiry'} value={data.lead_source__c} />,
	                <GenericDisplayCardStrip key={'Product Interested'+ data.id} label={'Product Interested'} value={HelperService.findMatchingKeyValueInList(productsList, 'id', data.product__c, 'name')} />,
	                  <GenericDisplayCardStrip key={'Existing Two Wheeler'+ data.id} label={'Existing Two Wheeler'} value={data.existing_two_wheelers__c} />,
	                <GenericDisplayCardStrip key={'Exchange Required'+ data.id} label={'Exchange Required'} value={data.exchange_required__c} />,
	                <GenericDisplayCardStrip key={'Expected Purchase Date'+ data.id} label={'Expected Purchase Date'} value={HelperService.dateReadableFormat(data.expected_close_date__c)} />,
	                <GenericDisplayCardStrip key={'Mode of Purchase'+ data.id} label={'Mode of Purchase'} value={data.mode_of_buying__c} />,
	                <GenericDisplayCardStrip key={'Test Drice Offered'+ data.id} label={'Test Drive Offered'} value={data.test_drive_offered__c} />,
	                data.customer_birthday__c ? <GenericDisplayCardStrip key={'Customer Birthday'+ data.id} label={'Customer Birthday'} value={HelperService.dateReadableFormat(data.customer_birthday__c)} /> : [],
	                data.customer_anniversary__c  ? <GenericDisplayCardStrip key={'Customer Anniversary'+ data.id} label={'Customer Anniversary'} value={HelperService.dateReadableFormat(data.customer_anniversary__c)} /> : [],

	            ]}
            />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  userLoginIsLoading: state.user.userLoginIsLoading,
  validation: state.user.validation,
  data: state.visitor.currentVisitorData,
  productsList: state.common.productsList,
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(UserActions.loginUser(data)),
  changeLoginForm: (data) => dispatch(UserActions.changeLoginForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitorInfoScreen)

//sample Data
// age__c: 28
// basic_amount__c: null
// battery_no__c: null
// capacity_of_each_battery__c: null
// cgst__c: null
// cgst_in_rs__c: null
// charger_no__c: null
// chassis_no__c: null
// city__c: null
// company_address__c: null
// company_name__c: null
// competitor__c: null
// contact_number__c: "9872365550"
// createddate: "2020-08-14T18:37:13.000Z"
// customer__c: ""
// dealer__c: "0019D000009zum3QAA"
// dealers_sales_person__c: "a0O9D000001hLV9UAM"
// designation__c: null
// discount_percent__c: null
// email_id__c: "saurabh.gupta@zoxima.com"
// exchange_required__c: "No"
// existing_two_wheelers__c: "Yes"
// expected_close_date__c: "2020-08-19T00:00:00.000Z"
// expected_revenue__c: null
// finance_required__c: null
// first_name__c: "Saurabh gupta"
// genders__c: "Male"
// id: 168
// igst__c: null
// igst_in_rs__c: null
// isdeleted: null
// last_name__c: "Gupta"
// lastmodifiedbyid: null
// lastmodifieddate: null
// lastvieweddate: "2020-08-14T18:37:13.000Z"
// lead_source__c: null
// lead_stage__c: null
// lead_status__c: null
// lead_status_reason__c: null
// make_of_battery__c: null
// mode_of_buying__c: "Cash"
// motor_no__c: null
// name: null
// number_of_employees__c: null
// occupation__c: "Student"
// pg_id__c: "e8b0ed61-3b46-4f67-b199-14bd218c7d83"
// pincode__c: null
// product__c: "a029D000002ZFPtQAO"
// product_type__c: null
// purchased_date__c: null
// purpose_of_buying__c: "tedt"
// sfid: null
// sgst__c: null
// sgst_in_rs__c: null
// source_of_enquiry__c: "Reference"
// state__c: null
// systemmodstamp: null
// test_drive_offered__c: "Yes"
// total_amount_payable__c: null
// total_discount__c: null
// total_subsidy__c: null
// total_tax__c: null
// type_of_battery__c: null
// usage__c: "test"
// visitor_type__c: null
// _hc_err: null
// _hc_lastop: "PENDING"
