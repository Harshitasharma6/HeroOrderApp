import React from 'react'
import { View, Text } from 'react-native'
import { Item, Input, InputGroup, Icon, Container} from 'native-base'
import Style from './Style';
import { Colors, ApplicationStyles } from 'App/Theme'


const HeadingBox = ({style, value}) => (
	<View style={Style.headingContainer}>
		<Text style={Style.heading}>
			{value}
		</Text>
	</View>
)

export default HeadingBox