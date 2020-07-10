import React from 'react'
import Style from './Style'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import {  Label, Icon, CheckBox } from 'native-base'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

const GenericCheckBox = ({ style={}, label, onPress, title, disabled = false, checked}) => {
	return (
	  	<View style={{...Style.bottomMargin, ...Style.checkboxContainer, ...style}} onPress={(event)=> onPress(event)}>
			<TouchableOpacity onPress={(event)=> onPress(event)}>
				<Label  style={{...Style.label}} onPress={(event)=> onPress(event)}>{label}</Label>
			</TouchableOpacity>
		    <View>
			    <CheckBox 
			        style={Style.checkbox} 
			        checked={checked} 
			        color={Colors.primary}
			        onPress={(event)=> onPress(event)}
			    />
		    </View>
		</View>
	);
}

export default GenericCheckBox