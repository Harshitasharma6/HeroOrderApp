import React from 'react'
import { View, Text } from 'react-native'
import { Item, Input, InputGroup, Icon, Container} from 'native-base'
import Style from './AddressStyles';
import { Colors, ApplicationStyles } from 'App/Theme'

const Address = ({ style, value}) => (
	<Text style={{...Style.address, ...style}}>
		{value}
	</Text>
)

export default Address