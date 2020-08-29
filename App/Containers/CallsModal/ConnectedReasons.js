import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Style from './styles'
import { Icon, Input, Button, ListItem, Radio, Left, Right } from 'native-base'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import Ratings from 'App/Components/Ratings';
import WhiteButton from 'App/Components/WhiteButton'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import DatePicker from 'App/Components/DatePicker'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
import InputDate from 'App/Components/FormInput/InputDate';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';

 // 	  "call_connected__c" : "",
 //       "reasons_for_not_connected__c" : "Call not picked",
 //       "purpose_of_call__c" : "For Test Drive",
 //       "outcome_of_the_call__c" : "Customer Not Interested",
 //       "dealer_id" : "",
 //       "dealers_sales_person_login_info_id" : "",
 //       "follow_up__c": "no",
 //       "follow_up_date__c" : ""

const ConnectedReasons = ({data, onChange, loading, onSubmit}) => {
	let options1 = [
	   "Follow Up",
       "Offer Discussion",
       "Loan Related",
       "For Test Drive"
	];


	let options2 = [
	    "Customer Interested",
        "Customer Not Interested",
        "May Buy Later"

	];

	let optionsNode1 = []
	let optionsNode2 = []

	
	optionsNode1 = options1.map((value) => {
		return (
			<ListItem 
				selected={data.purpose_of_call__c == value} 
				selectedColor={Colors.primary}
				key={value} 
				onPress={() => onChange({edited_field: 'purpose_of_call__c', edited_value: value})}
				style={{borderColor: Colors.grey, paddingBottom: 2}}
			>
	            <Left>
	              {data.purpose_of_call__c == value ? <Text style={{...{color: Colors.black, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4.2%')}}}>{value}</Text>: <Text style={{...{color: Colors.grey, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4%')}}}>{value}</Text>}
	            </Left>
	            <Right>
	              <Radio
	                selectedColor={Colors.primary}
	                color= {Colors.grey}
	                selected={data.purpose_of_call__c == value} 
	                style={{borderColor: Colors.grey, padding: 0}}
	                onPress={() => onChange({edited_field: 'purpose_of_call__c', edited_value: value})}
	              />
	            </Right>
	        </ListItem>
	)});


	optionsNode2 = options2.map((value) => {
		return (
			<ListItem 
				selected={data.outcome_of_the_call__c == value} 
				selectedColor={Colors.primary}
				key={value} 
				onPress={() => onChange({edited_field: 'outcome_of_the_call__c', edited_value: value})}
				style={{borderColor: Colors.grey, paddingBottom: 2}}
			>
	            <Left>
	              {data.outcome_of_the_call__c == value ? <Text style={{...{color: Colors.black, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4.2%')}}}>{value}</Text>: <Text style={{...{color: Colors.grey, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4%')}}}>{value}</Text>}
	            </Left>
	            <Right>
	              <Radio
	                selectedColor={Colors.primary}
	                color= {Colors.primary}
	                selected={data.outcome_of_the_call__c == value} 
	                style={{borderColor: Colors.grey, padding: 0}}
	                onPress={() => onChange({edited_field: 'outcome_of_the_call__c', edited_value: value})}
	              />
	            </Right>
	        </ListItem>
	)});


	return (
	    <View style={{flex: 1, width: wp('88%'), backgroundColor: Colors.lightGrey}}>
	    		<ScrollView style={{flex: 1}}>
	    			<View style={{marginTop: hp('3%'), paddingHorizontal: wp('3.4%')}}><Text style={{color: Colors.primary, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('5%')}}>Purpose of call?</Text></View>
		       		{optionsNode1}
		       		<View style={{marginTop: hp('3%'), paddingHorizontal: wp('3.4%')}}><Text style={{color: Colors.primary, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('5%')}}>Outcome of the call?</Text></View>
		       		{optionsNode2}
		       		<View style={{marginTop: hp('3%'), paddingHorizontal: wp('3.4%')}}>
		       			<GenericCheckBox 
							label={'Follow up required ?'}
							labelStyles={{color: Colors.primary, fontSize: wp('4%')}}
							checked={data.follow_up__c == 'yes'}
							disabledOnCheck={false}
							onPress={(event)=>{
			                	onChange({edited_field: 'follow_up__c', edited_value: (data.follow_up__c == 'yes'?  'no' : 'yes')})}
			                }
						/>
					</View>
		       		
		       		<View style={{marginTop: hp('0%'), paddingHorizontal: wp('3.8%')}}><Text style={{color: Colors.primary, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4%')}}>Follow up Date</Text></View>
		       		<View style={{paddingHorizontal: wp('3.5%')}}>
		       		
		       		<InputDate
                        placeholder={'Select date'}
                        value={HelperService.removeFieldsAndDateReadableFormat(data.follow_up_date__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            onChange({ edited_field: 'follow_up_date__c', edited_value: formattedDate })
                        }}
                        error={false}
						label={''}
						mindate={moment.now()}
                    />
                    </View>
                    <BlueButton style={{...ApplicationStyles.formButton, height: hp('4.8%')}} title={'Submit'} onPress={onSubmit} loading={loading}/>
		       	</ScrollView>

	    </View>
	)
}

export default ConnectedReasons
