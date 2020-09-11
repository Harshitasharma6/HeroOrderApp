import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image, Linking} from 'react-native'
import Style from './CustomerProductStyles'
import { Input, Button } from 'native-base'
import { AREA, PREV_ORDER_VAL, VISIT_THIS_WEEK, MAIN_COMPETETOR } from 'App/Constants'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import Ratings from 'App/Components/Ratings';
import WhiteButton from 'App/Components/WhiteButton'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import EditQuantity from 'App/Components/EditQuantity'
import Price from 'App/Components/ProductCard/Price'
import AvailableStock from 'App/Components/ProductCard/AvailableStock'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import _ from 'lodash'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import ImageSlider from 'App/Components/ImageSlider'


// aadhar_card__c: "https://cloud-cube.s3.amazonaws.com/g0ze5gjzv4jf/public/1599747201305_662099.png"
// acknowledgement__c: "https://cloud-cube.s3.amazonaws.com/g0ze5gjzv4jf/public/1599747206531_488595.png"
// address_line_1__c: "B6-1004, Eros Sampoornam, Sector 2, Greater Noida, Uttar Pradesh, India"
// address_line_2__c: null
// age__c: 28
// amount_paid_at_booking__c: 53090
// attach_documents__c: null
// basic_amount__c: 61990
// battery_no__c: "0101"
// billing_date__c: null
// billing_ref_no__c: null
// booking_date__c: null
// booking_ref_no__c: null
// capacity_of_each_battery__c: "124"
// cgst__c: null
// cgst_in_rs__c: 1550
// charger_no__c: "10101"
// chassis_no__c: "Ch-0101"
// city__c: null
// competitor__c: null
// contact_number__c: "9971710994"
// createddate: "2020-09-10T13:48:50.000Z"
// customer__c: "0039D000008Ct00QAC"
// customer_anniversary__c: "2020-09-11T00:00:00.000Z"
// customer_birthday__c: "2020-09-10T00:00:00.000Z"
// customer_gstin_no__c: "GSTIN"
// dealer__c: "0019D000009zum3QAA"
// dealer_discount__c: 10000
// dealers_sales_person__c: "a0O9D000001hLV9UAM"
// designation__c: null
// discount_percent__c: null
// driving_license__c: "https://cloud-cube.s3.amazonaws.com/g0ze5gjzv4jf/public/1599747214558_745826.png"
// email_id__c: "dineshkaushik27@yahoo.in"
// exchange_required__c: "No"
// existing_two_wheelers__c: "No"
// expected_close_date__c: "2020-09-15T00:00:00.000Z"
// expected_delivery_date__c: null
// expected_revenue__c: null
// finance_required__c: null
// financier_name__c: "Bajaj Finance"
// first_name__c: "Dinesh"
// follow_up_date__c: null
// genders__c: "Male"
// id: 764
// igst__c: null
// igst_in_rs__c: null
// insurance__c: "https://cloud-cube.s3.amazonaws.com/g0ze5gjzv4jf/public/1599747220458_778824.png"
// isdeleted: false
// last_name__c: "Kaushik"
// lastmodifiedbyid: "0052v00000g1xfXAAQ"
// lastmodifieddate: "2020-09-10T19:55:05.000Z"
// lastvieweddate: "2020-09-10T17:55:37.000Z"
// lead_from__c: "Non HO"
// lead_source__c: "Event updated"
// lead_stage__c: "Closure"
// lead_status__c: "Won"
// lead_status_reason__c: null
// make_of_battery__c: "1234"
// mode_of_buying__c: "Finance"
// model_color__c: "Red"
// motor_no__c: "10101"
// name: "Optima E2"
// number_of_employees__c: null
// occupation__c: "Business"
// offer_applied__c: true
// online_order_no__c: "123"
// other_financier_name__c: "123"
// others__c: "https://abc.com/a.png,https://abc.com/a1.png"
// outstanding_amount__c: 0
// owner_s_handbook_no__c: "Bk 10292"
// payment_mode__c: null
// pg_id__c: "c50c615b-5be6-4a07-b98c-c5d2953d5d80"
// pincode__c: null
// product__c: "a029D000002ZYRrQAO"
// product_type__c: null
// purchased_date__c: "2020-09-10T00:00:00.000Z"
// purpose_of_buying__c: null
// rc__c: "https://cloud-cube.s3.amazonaws.com/g0ze5gjzv4jf/public/1599747226608_863687.png"
// recieved_advance__c: null
// recordtypeid: null
// reference_no__c: "123"
// scheme_applied__c: null


const CustomerProductInfoCard = ({data}) => (
	<View style={Style.box}>
		
        
        <View>
        	<GenericDisplayCardStrip key={'Tally Invoice No. '} label={'Tally Invoice No.'} value={(data.tally_invoice_no__c|| '') }/>
            <GenericDisplayCardStrip key={'Chassis No.'} label={'Chassis No.'} value={(data.chassis_no__c|| '') }/>
            <GenericDisplayCardStrip key={'Motor No.'} label={'Motor No.'} value={(data.motor_no__c || '')}/>
            <GenericDisplayCardStrip key={'Model Color'} label={'Model Color'} value={(data.model_color__c || '')}/>
            <GenericDisplayCardStrip key={'Battery No.'} label={'Battery No.'} value={(data.charger_no__c || '') }/>
            <GenericDisplayCardStrip key={'Make Of Battery'} label={'Make Of Battery'} value={(data.battery_no__c|| '') }/>
            <GenericDisplayCardStrip key={'Capacity of Each Battery'} label={'Capacity of Each Battery'} value={(data.make_of_battery__c || '') }/>
            <GenericDisplayCardStrip key={'Battery No.'} label={'Battery No.'} value={(data.capacity_of_each_battery__c || '') }/>
            <GenericDisplayCardStrip key={'Type of Battery'} label={'Type of Battery'} value={(data.type_of_battery__c || '') }/>
            <GenericDisplayCardStrip key={'Owners Handbook No.'} label={'Owmers Handbook No.'} value={(data.owner_s_handbook_no__c || '') }/>
            <GenericDisplayCardStrip key={'Purchase Date'} label={'Purchase Date'} value={HelperService.dateReadableFormat(data.purchased_date__c) }/>
            <GenericDisplayCardStrip key={'Offer Applied'} label={'Offer Applied'} value={(data.Offer_Applied__c || '') }/>
            <GenericDisplayCardStrip key={'Aadhar Card'} label={'Aadhar Card'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.aadhar_card__c)}>View</Text>}/>
            <GenericDisplayCardStrip key={'Acknowlegment'} label={'Acknowlegment'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.acknowledgement__c)}>View</Text>}/>
            <GenericDisplayCardStrip key={'Driving Lincense'} label={'Driving Lincense'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.acknowledgement__c)}>View</Text>}/>
            <GenericDisplayCardStrip key={'Insurance'} label={'Insurance'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.insurance__c)}>View</Text>}/>
            <GenericDisplayCardStrip key={'RC'} label={'RC'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.rc__c)}>View</Text>}/>
            <GenericDisplayCardStrip key={'Voter Id'} label={'Voter Id'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.voter_id_card__c)}>View</Text>}/>
            {
                data.others__c && data.others__c.length  ? <GenericDisplayCardStrip key={'Others'} label={'Others'} value={<Text style={{textDecorationLine: 'underline', color: '#1890ff'}} onPress={() => Linking.openURL(data.others__c[0])}>View</Text>}/> : <GenericDisplayCardStrip key={'Others'} label={'Others'} value={'None'}/>
            }
        </View>
    </View>   
)

export default CustomerProductInfoCard


