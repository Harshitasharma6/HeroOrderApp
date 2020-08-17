import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from 'native-base';
import Style from './styles';
import GenericIcon from 'App/Components/GenericIcon';

const AppliedOffer = ({name, onPressRemove}) => (
  	<View style={Style.container}>
	   	<Text style={Style.name}>{name}</Text>
	   	<TouchableOpacity style={Style.iconContainer} onPress={onPressRemove}><GenericIcon name={'times-circle'} style={Style.icon} /></TouchableOpacity>
  	</View>
);

export default AppliedOffer
