import React from 'react'
import { View, Text } from 'react-native'
import { Item, Input, InputGroup, Icon, Container} from 'native-base'
import Style from './ItemDetailStyles';
import { Colors, ApplicationStyles } from 'App/Theme'

const ItemDetail = ({ style, label, value, highlight}) => (
	<View style={{...Style.container}}>
		<View style={{...Style.textContainerLabel}}><Text style={{...Style.label}}>{label}</Text></View>
		<View style={{...Style.textContainerValue}}><Text style={{...Style.value}}>{value}</Text></View>
	</View>
)

export default ItemDetail