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

// accountid: "0019D000009zum3QAA"
// age__c: null
// createddate: "2020-06-25T06:29:18.000Z"
// department: null
// email: null
// emailbounceddate: null
// emailbouncedreason: null
// fax: null
// firstname: "Dinesh"
// gender__c: null
// id: 1
// individualid: null
// isdeleted: false
// isemailbounced: false
// lastname: "Kaushik"
// mailingcity: null
// mailingcountry: null
// mailinggeocodeaccuracy: null
// mailinglatitude: null
// mailinglongitude: null
// mailingpostalcode: null
// mailingstate: null
// mailingstreet: null
// masterrecordid: null
// middlename: null
// mobilephone: "9971710994"
// name: "Dinesh Kaushik"
// occupation__c: null
// pg_id__c: null
// phone: null
// photourl: "/services/images/photo/0039D000007KJE2QAO"
// reportstoid: null
// salutation: "Mr."
// sfid: "0039D000007KJE2QAO"
// suffix: null
// systemmodstamp: "2020-08-06T06:17:13.000Z"
// title: null
// _hc_err: null
// _hc_lastop: "SYNCED"

const CustomerInfoCard = ({ onPress, data, id, showEditButton=true}) => (
    <View style={Styles.box}>
    <View style={{flexDirection: 'row'}}>
        <GenericIcon
          name={'user-circle'}
          style={{ color: Colors.primary, fontSize:  wp('9%')}}
        />
      <View style={Styles.userDtl}>
        <Text style={Styles.title}>{data.name}</Text>
      </View>
      </View>
      <View style={Styles.btmBox}>
      	{data.age__c ? <GenericDisplayCardStrip key={'Age'} label={'Age'} value={data.age} /> : []}
	      {data.gender__c ? <GenericDisplayCardStrip key={'Gender'} label={'Gender'} value={data.gender__c} /> : [] }
	      <GenericDisplayCardStrip key={'Phone'} label={'Phone'} value={data.mobilephone} />
        {data.email ? <GenericDisplayCardStrip key={'Email'} label={'Email'} value={data.email} /> : []}
        {data.address ? <GenericDisplayCardStrip key={'Address'} label={'Address'} value={data.address} /> : []}
        {data.occupation__c ? <GenericDisplayCardStrip key={'Occupation'} label={'Occupation'} value={data.occupation__c} /> : []}
      
    </View>
      {showEditButton ?
      <View style={{position: 'absolute', right: wp('2%'), top: hp('2%')}}>
       	<GenericIcon name="edit" style={{fontSize: wp('7%'), color: Colors.primary}}/>
      </View> : []
    }
      <BlueButton title={'Call'} style={{width: wp('27%'), alignSelf: 'flex-end' }} textStyle={{fontSize: wp('3.8%')}} onPress={() => HelperService.callNumber(data.mobilephone)}><GenericIcon name="phone" style={{fontSize: wp('5%'), color: Colors.white}}/></BlueButton>
     </View>
)

export default CustomerInfoCard


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