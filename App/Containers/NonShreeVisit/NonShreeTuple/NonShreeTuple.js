import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Style from './NonShreeTupleStyle';

const SitesTuple = ({ onPress, id, data }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={Style.box} onPress={onPress}>
      <View style={Style.tuple}>
        <View style={Style.userCircle}>
          <Icon
            name={'ios-business'}
            ios={'ios-business'}
            android={'md-business'}
            style={{ color: Colors.button }}
          />
        </View>
        <View style={Style.userDtl}>
          <Text style={Style.title}>{data.Name}</Text>
          <Text style={Style.desc}>{data.Email__c}</Text>
        </View>
      </View>

      <View style={Style.btmBox}>
        <View style={Style.strip}>
          {/* <Text style={Style.ttl}>{'Company Name'}</Text> */}
          <Text style={Style.detail}>{data.Company_Name__c || ''}</Text>
        </View>
        <View style={Style.strip}>
          <Text style={Style.ttl}>{'Address'}</Text>
          <Text style={Style.detail}>{data.Address__c || ''}</Text>
        </View>
        <View style={Style.strip}>
          <Text style={Style.ttl}>{'City'}</Text>
          <Text style={Style.detail}>{data.City__c || ''}</Text>
        </View>

        <View style={Style.strip}>
          <Text style={Style.ttl}>{'District'}</Text>
          <Text style={Style.detail}>{data.District__c || ''}</Text>
        </View>

        <View style={Style.strip}>
          <Text style={Style.ttl}>{'Security Deposit'}</Text>
          <Text style={Style.detail}>{data.Security_Deposit__c || ''}</Text>
        </View>

        <View style={Style.strip}>
          <Text style={Style.ttl}>{'Type of Counter'}</Text>
          <Text style={Style.detail}>{data.Type_of_Counter__c || ''}</Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default SitesTuple

// Address__c : "6968-A, MULTANI DANDA,GALI NO. 11, PAHAR GANJ"
// City__c : "DELHI"
// Company_Name__c : null
// Contact__c : null
// Counter_Code__c : "1035"
// Customer_Category__c : null
// Customer_Sub_Category__c : null
// District__c : null
// Email__c : null
// GST_Registration_Number__c : "URP"
// Id : "0019D000008AAkWQAW"
// Latitude__c : null
// Longitude__c : null
// Name : "BALWENDER KAPOOR"
// Postal_Code__c : null
// Potential__c : null
// Security_Deposit__c : 1000000
// State__c : "Delhi"
// Taluka__c : "DELHI"
// Type_of_Counter__c : "Shree"
// Zone__c : null
