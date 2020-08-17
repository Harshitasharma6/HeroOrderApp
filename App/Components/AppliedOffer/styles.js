import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
	name: {
		fontSize: wp('3.5%'),
		fontFamily: ApplicationStyles.textMsgFont,
		color: Colors.primary
	},
	container: {
		backgroundColor: Colors.white,
	    borderColor: Colors.lightGrey,
	    overflow: 'visible',
	    ...ApplicationStyles.buttonShadow,
		borderRadius: hp('4%'),
		height: hp('4%'),
		position: 'relative',
		justifyContent: 'center',
		padding: wp('3%'),
		margin: wp('1%'),
		marginBottom: hp('2%'),
		minWidth: wp('42%'),
		alignItems: 'center'
	},
	iconContainer: {
		position: 'absolute',
		right: -wp('4%'),
		top: -hp('3%'),
		padding: 5
	},
	icon: {
		fontSize: wp('7.5%'),
		color: Colors.grey,
		padding: wp('2%')
	}
})
