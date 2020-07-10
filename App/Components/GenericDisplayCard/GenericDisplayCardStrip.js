import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Style from './GenericDisplayCardStyles'
import { ORDER_DATE, ORDER_VALUE, ORDER_NUM } from '../../Constants'
import {HelperService} from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'

const GenericDisplayCardStrip = ({
  label,
  value,
  dark
}) => (
    <View style={Style.strip}>
      	<Text style={dark ? Style.darkTtl : Style.ttl}>{label}</Text>
      	<Text style={dark ? Style.darkDetail : Style.detail}>{value}</Text>
    </View>
);

export default GenericDisplayCardStrip
