import GenericIcon from 'App/Components/GenericIcon';
import NavigationService from 'App/Services/NavigationService';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { HelperService } from '../../../Services/Utils/HelperService';
import Style from './NonShreeInfoTupleStyle';

const NonShreeInfoTuple = ({ onPress, data, id }) => (
    <View style={Style.box} >
      <View style={Style.userCircle}>
        <Icon
          name={'ios-business'}
          ios={'ios-business'}
          android={'md-business'}
          style={{ color: Colors.primary }}
        />
      </View>
      <View style={Style.userDtl}>
        <Text style={Style.title}>{data.Name}</Text>
      </View>
    </View>
)

export default NonShreeInfoTuple
