import React from 'react'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Style from './FooterIconStyle'

const FooterIcon = ({ icon, iconText, active=false, disabled = false, onPress}) => (
  	<Button 
  		vertical={true}
  		disabled={disabled}
  		active={active}
  		onPress={onPress}
  		style={active ? {...Style.iconButton, ...Style.iconActiveButton} : {...Style.iconButton}}
  	>
		<Icon 
      name={`ios-${icon}`} 
      ios={`ios-${icon}`} 
      android={`md-${icon}`} 
      style={active ? {...Style.icon, ...Style.iconActive} : {...Style.icon}}
    />
		<Text style={active ? {...Style.iconText, ...Style.iconActive} : {...Style.iconText}}>{iconText} </Text>
	</Button>
)

export default FooterIcon
