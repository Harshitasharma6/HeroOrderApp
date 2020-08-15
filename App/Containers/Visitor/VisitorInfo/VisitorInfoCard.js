import GenericIcon from 'App/Components/GenericIcon';
import BlueButton from 'App/Components/BlueButton'
import NavigationService from 'App/Services/NavigationService';
import { Colors, ApplicationStyles } from 'App/Theme';
import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { HelperService } from 'App/Services/Utils/HelperService';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';


// "first_name__c": "test 12",  (*mandatory)
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
// "usage__c": "Nothing",
// "expected_close_date__c": "2020-08-19",
//  "dealers_sales_person__c": "a0O9D000001hLV9UAM",
//   "email_id__c": "abc@gmail.com",
//   "occupation__c" : "Business",
//   "test_drive_offered__c": "Yes",    (*mandatory)
//   "customer__c": "0039D000008BMX2QAO",
//   "address_line_1__c" : “test address”

const VisitorInfoCard = ({ onPress, data, id }) => (
    <View style={Styles.box}>
    <View style={{flexDirection: 'row'}}>
        <GenericIcon
          name={'user-circle'}
          style={{ color: Colors.primary, fontSize:  wp('9%')}}
        />
      <View style={Styles.userDtl}>
        <Text style={Styles.title}>{`${data.first_name__c} ${data.last_name__c}`}</Text>
      </View>
      </View>
      <View style={Styles.btmBox}>
      	<GenericDisplayCardStrip key={'Age'} label={'Age'} value={data.age__c} />
	     <GenericDisplayCardStrip key={'Gender'} label={'Gender'} value={data.genders__c} />
	     <GenericDisplayCardStrip key={'Phone'} label={'Phone'} value={data.contact_number__c} />
      
    </View>
     <View style={{position: 'absolute', right: wp('2%'), top: hp('2%')}}>
       	<GenericIcon name="edit" style={{fontSize: wp('7%'), color: Colors.primary}} onPress={onPress}/>
       </View>
       <BlueButton title={'Call'} style={{width: wp('27%'), alignSelf: 'flex-end' }} textStyle={{fontSize: wp('3.8%')}} onPress={() => HelperService.callNumber(data.contact_number__c)}><GenericIcon name="phone" style={{fontSize: wp('5%'), color: Colors.white}}/></BlueButton>
     </View>
)

export default VisitorInfoCard


const Styles = StyleSheet.create({
  box: {
    width: wp('88%'),
    backgroundColor: Colors.lightGrey,
    flexDirection: 'column',
    padding: 15,
    paddingLeft: 15,
    position: 'relative',
    borderRadius: 10,
    marginHorizontal: wp('6%'),
    marginBottom: hp('2%')
  },
  btmBox: {
    flexDirection: 'column',
    marginBottom: hp('2%')

  },
  desc: {
    color: Colors.primary,
    fontSize: 12,
    fontFamily: ApplicationStyles.textFont,
  },
  detail: {
    // fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
    fontWeight: '700',
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.primary,
    fontSize: wp('4.5%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  ttl: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3%'),
    marginTop: hp('.5%')
  },
  tuple: {
    borderBottomColor: Colors.clrF1F9FF,
    borderRadius: 1,
    flexDirection: 'row',
  },
  userCircle: {
  //   // marginTop: 80,
  //   alignItems: 'center',
  //   backgroundColor: Colors.lightGrey,
  //    borderWidth: 1,
  //    borderColor: Colors.primary,
  //   borderRadius: 50,
  //   flexDirection: 'row',
  //   height: 30,
  //   justifyContent: 'center',
  //   width: 30,
   },
  userDtl: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    overflow: 'hidden',
    width: wp('50%')
  },
  userIcon: {
    height: 16,
    width: 16,
  }
});