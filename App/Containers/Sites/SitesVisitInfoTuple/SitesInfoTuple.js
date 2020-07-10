import GenericIcon from 'App/Components/GenericIcon';
import NavigationService from 'App/Services/NavigationService';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { HelperService } from 'App/Services/Utils/HelperService';
import Style from './SitesInfoTupleStyle';

const SiteInfoTuple = ({ onPress, data, id }) => (
  <TouchableWithoutFeedback >
    <View style={Style.box} onPress={onPress}>
      <View style={Style.userCircle}>
          <GenericIcon
              name={'person'}
              style={{ color: Colors.primary }}
          />
      </View>
      <View style={Style.userDtl}>
          <Text style={Style.title}>{data.Name}</Text>
        
      </View>
    </View>
  </TouchableWithoutFeedback>

   
)

export default SiteInfoTuple
