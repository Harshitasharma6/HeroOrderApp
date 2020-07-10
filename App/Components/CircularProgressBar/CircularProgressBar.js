//import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react'
import { View, Text } from 'react-native'
import { Picker } from 'native-base'
import Style from './CircularProgressBarStyles'
import { Colors, ApplicationStyles, Fonts, Metrics } from 'App/Theme'
//import { Circle } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const CircularProgressBar = ({style={}, target, value, color}) => (
	<View style={{alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
	  	{/* <AnimatedCircularProgress
		  size={wp('60%')}
		  width={wp('9%')}
		  fill={(value/target)*100}
		  arcSweepAngle={180}
		  rotation={-90}
		  tintColor={color ? color : Colors.green}
		  backgroundColor={Colors.user}
		  style={{position: 'relative', height: wp('40%')}}
		> */}
		{
		    (fill) => (
		      <Text style={Style.targetText} >
		        {value ? Math.round((value/target)*100) + '%' : '0%'}
		      </Text>
		    )
		  }
		  	

		{/* </AnimatedCircularProgress> */}
		<View style={{position: 'absolute', left: wp('16.5%'), bottom: wp('3%')}}>
		  	<Text style={Style.targetTextIndicator}>
		        {0}
		    </Text>
		</View>
		<View style={{position: 'absolute', right:  wp('16%'), bottom: wp('3%')}}>
		  	<Text style={Style.targetTextIndicator}>
		        {target}
		    </Text>
		</View>
	</View>

);

export default CircularProgressBar
