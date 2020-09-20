import React from 'react'
import { Container, Header, Content, Footer, FooterTab, Button, Text, TouchableOpacity } from 'native-base';
import Style from './FooterIconStyle'
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterIcon = ({ icon, iconText, active=false, disabled = false, onPress}) => (
    	<Button 
    		vertical={true}
    		disabled={disabled}
    		active={active}
    		onPress={onPress}
    		style={active ? {...Style.iconButton, ...Style.iconActiveButton} : {...Style.iconButton}}
    	>
  		<Icon 
        name={`${icon}`}
        style={active ? {...Style.icon, ...Style.iconActive} : {...Style.icon}}
      />
  		<Text style={active ? {...Style.iconText, ...Style.iconActive} : {...Style.iconText}}>{iconText} </Text>
  	</Button>
)

export default FooterIcon
