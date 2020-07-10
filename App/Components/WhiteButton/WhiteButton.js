import React from 'react'
import { Button, Text, Spinner } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Style from './WhiteButtonStyle'
import { Colors, ApplicationStyles } from 'App/Theme'

const WhiteButton = ({ style, textStyle,onPress, title, disabled = false, loading=false, selected=false, children=[]}) => {
	let textStyleNode = selected ? { ...Style.text, ...textStyle, ...Style.selectedText} : { ...Style.text, ...textStyle};
	let buttonStyleNode = selected ? { ...Style.button, ...style, ...Style.selectedButton } : { ...Style.button, ...style };
	let textNode = (<Text style={textStyleNode}>{title}</Text>);
	textNode = title ? textNode : [];

	return (
	  <TouchableOpacity disabled={disabled} block rounded style={buttonStyleNode}  onPress={onPress}>
	   {!loading ? children : []}
	   {loading ? (<Spinner color={Colors.primary} />) : textNode}
	  </TouchableOpacity>
	)
}

export default WhiteButton
