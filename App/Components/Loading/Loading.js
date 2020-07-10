import React from 'react'
import { Container, Content, Spinner } from 'native-base';
import { View } from 'react-native';
import Style from './LoadingStyles';
import { HelperService } from 'App/Services/Utils/HelperService';

const Loading = ({ style, onPress, title, disabled = false, children}) => (
	<View style={{justifyContent: 'center', alignItems: 'center', paddingTop: HelperService.hasNotch() ? 30 : 0}}>
		<Spinner color={Style.loader.color}/>
	</View>
)

export default Loading