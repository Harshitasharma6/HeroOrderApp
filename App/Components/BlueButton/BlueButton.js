// import React from 'react'
// import { Button, Text, Spinner } from 'native-base'
// import Style from './BlueButtonStyle'
// import { Colors, ApplicationStyles } from 'App/Theme'
// import { TouchableOpacity } from 'react-native'

// const BlueButton = ({ style, textStyle,onPress, title, disabled = false, loading=false, selected=false, children=[]}) => {
// 	let textStyleNode = selected ? { ...Style.text, ...textStyle, ...Style.selectedText} : { ...Style.text, ...textStyle};
// 	let buttonStyleNode = selected ? { ...Style.button, ...style, ...Style.selectedButton } : { ...Style.button, ...style };
// 	let textNode = (<Text style={textStyleNode}>{title}</Text>);
// 	textNode = title ? textNode : [];

// 	return (
// 	  <TouchableOpacity disabled={disabled} style={buttonStyleNode}  onPress={onPress}>
// 	   {!loading ? children : []}
// 	   {loading ? (<Spinner color={Colors.white} />) : textNode}
// 	  </TouchableOpacity>
// 	)
// }

// export default BlueButton



import React, {PureComponent} from 'react';
import { Button, Text, Spinner } from 'native-base'
import Style from './BlueButtonStyle'
import { Colors, ApplicationStyles } from 'App/Theme'
import { TouchableOpacity } from 'react-native'


export default class BlueButton extends PureComponent { 
  render() {
    const {
      style, 
      textStyle,
      onPress, 
      title, 
      disabled, 
      loading, 
      selected, 
      children
    } = this.props;

    let textStyleNode = selected ? { ...Style.text, ...textStyle, ...Style.selectedText} : { ...Style.text, ...textStyle};
	let buttonStyleNode = selected ? { ...Style.button, ...style, ...Style.selectedButton } : { ...Style.button, ...style };
	let textNode = (<Text style={textStyleNode}>{title}</Text>);
	textNode = title ? textNode : [];

    return (
	  <TouchableOpacity disabled={disabled} style={buttonStyleNode}  onPress={onPress}>
	   {!loading ? children : []}
	   {loading ? (<Spinner color={Colors.white} />) : textNode}
	  </TouchableOpacity>
	)
  }
} 


BlueButton.defaultProps = {
  disabled: false, 
  loading: false, 
  selected: false, 
  children: []
};