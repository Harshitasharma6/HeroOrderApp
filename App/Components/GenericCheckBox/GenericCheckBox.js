import React from 'react'
import Style from './Style'
import { ScrollView, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import {  Label, Icon, CheckBox } from 'native-base'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

const GenericCheckBox = ({ style={}, label, onPress, title, disabled = false, checked ,style1={}, labelStyles={}, disabledOnCheck = true}) => {
	return (
	  	<View style={{...Style.bottomMargin, ...Style.checkboxContainer, ...style, }} onPress={(event)=> {Keyboard.dismiss(); onPress(event)}}>
			<TouchableOpacity onPress={(event)=> {Keyboard.dismiss();onPress(event)}} disabled={disabledOnCheck ? checked : false}>
				<Label  style={{...Style.label, ...labelStyles}} >{label}</Label>
			</TouchableOpacity>
		    <View style={style1}>
			    <CheckBox 
			        style={Style.checkbox} 
			        checked={checked} 
			        color={Colors.grey}
			        onPress={(event)=> {Keyboard.dismiss(); onPress(event)}}
			        disabled={disabledOnCheck ? checked : false}
			    />
		    </View>
		</View>
	);
}

export default GenericCheckBox