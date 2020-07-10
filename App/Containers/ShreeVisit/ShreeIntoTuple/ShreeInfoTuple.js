import GenericIcon from 'App/Components/GenericIcon';
import NavigationService from 'App/Services/NavigationService';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { HelperService } from '../../../Services/Utils/HelperService';
import Style from './ShreeInfoTupleStyle';

const ShreeInfoTuple = ({ onPress, areas, data, id }) => (
  <TouchableWithoutFeedback >
    <View style={Style.box} onPress={onPress}>
      <View style={Style.userCircle}>
        <Icon
          name={'ios-business'}
          ios={'ios-business'}
          android={'md-business'}
          style={{ color: Colors.button }}
        />
      </View>
      <View style={Style.userDtl}>
        <Text style={Style.title}>{data.name}</Text>
        <Text style={Style.desc}>{HelperService.getAreaName({ areas: areas, id: data.area__c })}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default ShreeInfoTuple
