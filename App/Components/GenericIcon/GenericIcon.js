import React from 'react'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {View} from 'react-native'
const GenericIcon = ({  name, style, active=false, disabled = false, onPress}) => (
	<Icon 
	    name={`ios-${name}`} 
	    ios={`ios-${name}`} 
	    android={`md-${name}`} 
	    style={style}
	    onPress={onPress}
	    active={!disabled}
    />
)

export default GenericIcon
