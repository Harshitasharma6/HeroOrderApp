import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Style from './SitesTupleStyle';

const SitesTuple = ({ onPress, data }) => (


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
          <Text style={Style.title}>{data.Name || ''}</Text>
          <Text style={Style.desc}>{data.Contact_Type__c || ''}</Text>
        </View>
      </View>

      <View style={Style.btmBox}>
        <View style={Style.strip}>
          <Text style={Style.ttl}>{'Status'}</Text>
          <Text style={Style.detail}>{data.State__c || ''}</Text>
        </View>
        <View style={Style.strip}>
          <Text style={Style.ttl}>{'Contact Type'}</Text>
          <Text style={Style.detail}>{data.Contact_Type__c || ''}</Text>
        </View>
        <View style={Style.strip}>
          <Text style={Style.ttl}>{'Dealer Name'}</Text>
          <Text style={Style.detail}>{data.Dealer_Name__c || ''}</Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default SitesTuple;

