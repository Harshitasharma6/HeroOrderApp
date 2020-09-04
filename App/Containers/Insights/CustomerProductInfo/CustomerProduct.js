import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native'
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


const CustomerProductInfoCard = ({data}) => (
	<View style={Style.box}>
		
        
        <View>
        	<GenericDisplayCardStrip key={'Tally Invoice No. '} label={'Tally Invoice No.'} value={(data.tally_invoice_no__c|| '') }/>
            <GenericDisplayCardStrip key={'Chassis No.'} label={'Chassis No.'} value={(data.chassis_no__c|| '') }/>
            <GenericDisplayCardStrip key={'Motor No.'} label={'Motor No.'} value={(data.motor_no__c || '')}/>
            <GenericDisplayCardStrip key={'Battery No.'} label={'Battery No.'} value={(data.charger_no__c || '') }/>
            <GenericDisplayCardStrip key={'Make Of Battery'} label={'Make Of Battery'} value={(data.battery_no__c|| '') }/>
            <GenericDisplayCardStrip key={'Capacity of Each Battery'} label={'Capacity of Each Battery'} value={(data.make_of_battery__c || '') }/>
            <GenericDisplayCardStrip key={'Battery No.'} label={'Battery No.'} value={(data.capacity_of_each_battery__c || '') }/>
            <GenericDisplayCardStrip key={'Type of Battery'} label={'Type of Battery'} value={(data.type_of_battery__c || '') }/>
            <GenericDisplayCardStrip key={'Owmers Handbook No.'} label={'Owmers Handbook No.'} value={(data.owner_s_handbook_no__c || '') }/>
            <GenericDisplayCardStrip key={'Offer Applied'} label={'Offer Applied'} value={(data.Offer_Applied__c || '') }/>
            <GenericDisplayCardStrip key={'Aadhar Card'} label={'Aadhar Card'} value={(data.aadhar_card__c || '') }/>
            <GenericDisplayCardStrip key={'Ackmowlegment'} label={'Ackmowlegment'} value={(data.acknowledgement__c || '') }/>
            <GenericDisplayCardStrip key={'Driving Lincense'} label={'Driving Lincense'} value={(data.driving_license__c|| '') }/>
            <GenericDisplayCardStrip key={'Insurance'} label={'Insurance'} value={(data.insurance__c|| '') }/>
            <GenericDisplayCardStrip key={'RC'} label={'RC'} value={(data.rc__c|| '') }/>
            <GenericDisplayCardStrip key={'Voter Id'} label={'Voter Id'} value={(data.voter_id_card__c || '') }/>
            <GenericDisplayCardStrip key={'Others'} label={'Others'} value={(data.others__c|| '') }/>
        </View>
    </View>   
)

export default CustomerProductInfoCard


