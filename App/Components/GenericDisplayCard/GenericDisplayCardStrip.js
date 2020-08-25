import React, {PureComponent} from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Style from './GenericDisplayCardStyles'
import { ORDER_DATE, ORDER_VALUE, ORDER_NUM } from '../../Constants'
import {HelperService} from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'


export default class GenericDisplayCardStrip extends PureComponent { 
  render() {
    const {
      label,
	  value,
	  dark,
	  labelStyle,
	  valueStyle
    } = this.props;

    return(
      <View style={Style.strip}>
      	<Text style={dark ? {...Style.darkTtl, ...labelStyle} : {...Style.ttl, ...labelStyle}}>{label}</Text>
      	<Text style={dark ? {...Style.darkDetail, ...valueStyle} : {...Style.detail, ...valueStyle}}>{value}</Text>
    </View>
    )
  }
} 
