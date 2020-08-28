import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'

const Separator = ({style={}}) => (
  <View style={{...Styles.view, ...style}}></View>
)

export default Separator;

const Styles = StyleSheet.create({
	view: {
		borderBottomWidth: 3,
        borderColor:Colors.primary,
        marginVertical:2,
        width: '90%',
        alignSelf: 'center'
	}
});
