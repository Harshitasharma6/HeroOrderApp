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


const NotConnectedReasons = ({data, onChange, loading, onSubmit, reasons_for_not_Connected}) => {
	let optionsNode = [];
	optionsNode = reasons_for_not_Connected.map((obj) => {
		return (
			<ListItem 
				selected={data.reasons_for_not_connected__c == obj.id} 
				selectedColor={Colors.primary}
				key={obj.id} 
				onPress={() => onChange({edited_field: 'reasons_for_not_connected__c', edited_value: obj.id})}
				style={{borderColor: Colors.grey, paddingBottom: 2}}
			>
	            <Left>
	              {data.reasons_for_not_connected__c == obj.id ? <Text style={{...{color: Colors.black, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4.2%')}}}>{obj.name}</Text>: <Text style={{...{color: Colors.grey, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4%')}}}>{obj.name}</Text>}
	            </Left>
	            <Right>
	              <Radio
	                selectedColor={Colors.primary}
	                color= {Colors.grey}
	                selected={data.reasons_for_not_connected__c == obj.id} 
	                style={{borderColor: Colors.grey, padding: 0}}
	                onPress={() => onChange({edited_field: 'reasons_for_not_connected__c', edited_value: obj.id})}
	              />
	            </Right>
	        </ListItem>
	)});

	return (
	   <View style={{flex: 1, width: wp('88%'), backgroundColor: Colors.lightGrey}}>
	    		<ScrollView style={{flex: 1}}>
	    			<View style={{marginTop: hp('3%'), paddingHorizontal: wp('3.4%')}}><Text style={{color: Colors.primary, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('5%')}}>Reason for not Connected</Text></View>
		       		{optionsNode}
		       		
		       		<View style={{marginTop: hp('3%'), paddingHorizontal: wp('3.4%')}}>
		       			<GenericCheckBox 
							label={'Follow up required ?'}
							labelStyles={{color: Colors.primary, fontSize: wp('4%')}}
							checked={data.follow_up__c == 'yes'}
							disabledOnCheck={false}
							onPress={(event)=>{
								let updated_value = data.follow_up__c == 'yes'?  'no' : 'yes';
			                	onChange({edited_field: 'follow_up__c', edited_value: updated_value})
			                	if(updated_value == 'no') {
			                		onChange({ edited_field: 'follow_up_date__c', edited_value: "" })
			                	}
			                }}
						/>
					</View>
		       		
		       		{ data.follow_up__c == 'yes' ? 
			       		<View style={{marginTop: hp('0%'), paddingHorizontal: wp('3.8%')}}><Text style={{color: Colors.primary, fontFamily: ApplicationStyles.textMsgFont, fontSize: wp('4%')}}>Follow up Date</Text></View>
			       	: []}

			       	{ data.follow_up__c == 'yes' ? 
			       		<View style={{paddingHorizontal: wp('3.5%')}}>
		       			<InputDate
                        placeholder={'Select date'}
                        value={HelperService.dateReadableFormat(data.follow_up_date__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            onChange({ edited_field: 'follow_up_date__c', edited_value: formattedDate })
                        }}
                        error={false}
						label={''}
						mindate={moment.now()}
                    />
                    </View> : []
                }
                    <BlueButton style={{...ApplicationStyles.formButton, height: hp('4.8%')}} title={'Submit'} onPress={onSubmit} loading={loading}/>
		       	</ScrollView>
	    </View>
	)}

export default NotConnectedReasons