import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
	button: {
	    backgroundColor: Colors.lightGrey,
	    borderColor: Colors.primary,
	    overflow: 'hidden',
	    ...ApplicationStyles.buttonShadow
	},
	text: {
	    color: Colors.primary,
	    fontFamily: ApplicationStyles.textMsgFont,
	    fontSize: wp('5%'),
	    textTransform: 'uppercase'
	},
	checkbox: {
	  	borderRadius: 2, 
	  	borderColor: Colors.grey, 
	  	color: Colors.grey
	},
	bottomMargin: {
	    marginBottom: hp('2%')
  	},
	inputText: {
	    borderRadius: 10,
	    fontSize: wp('3.5%')
	},
  	checkboxContainer: {
	    flexDirection: 'row',
	    alignItems: 'center',
	    marginBottom: hp('2%'),
  	},
  	label: {
	    color: Colors.grey,
	    fontFamily: ApplicationStyles.textMsgFont,
	    fontSize: wp('4%'),
	    paddingLeft: wp('.5%'),
	    ...Metrics.tinyVerticalMargin
  	}
})
