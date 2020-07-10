import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
	button: {
	    width: wp('40%'),

	    marginBottom: hp('2%'),
	    marginRight: wp('34%')
	},
	buttonText: {
	    color: Colors.primary,
	    fontFamily: ApplicationStyles.textMsgFont,
	    fontSize: wp('3%'),
	    textTransform: 'uppercase'
	},

})
