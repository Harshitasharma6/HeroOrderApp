import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
	infoBoxPink: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightPink,
		borderColor: Colors.darkPink
	},
	infoSeaGreen: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightSeaGreen,
		borderColor: Colors.darkSeaGreen
	},
	infoRedPink: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightRedPink,
		borderColor: Colors.darkRedPink
	},
	infoBoxYellow: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightYellow,
		borderColor: Colors.darkYellow
	},
	infoBoxGreyWhite: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightGreyWhite,
		borderColor: Colors.darkGreyWhite
	},
	infoBoxCorpBlue: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightCorpBlue,
  		borderColor: Colors.darkCorpBlue
  	},
  	infoBoxCorpGreen: {
		...ApplicationStyles.infoBox,
		backgroundColor: Colors.lightCorpGreen,
  		borderColor: Colors.darkCorpGreen
  	},
  	callButton: {
  		width: wp('10%'), 
  		alignSelf: 'flex-end', 
  		marginTop: hp('1%'), 
  		borderRadius:  wp('100%'),
  		paddingRight: 2, 
  		paddingLeft: 2, 
  		position: 'absolute', 
  		top: -hp('6%'), 
  		right: -wp('2%'), 
  		borderColor: Colors.primary, 
  		backgroundColor: 'transparent', 
  		borderWidth: 1, 
  		zIndex: 3
  	},
  	callButtonText: {
  		fontSize: wp('3.8%')
  	},
  	callButtonIcon: {
  		fontSize: wp('5%'), 
  		color: Colors.primary
  	},
  	markLostButton: {
  		width: wp('36%'), 
  		alignSelf: 'flex-start', 
  		marginTop: hp('1%'), 
  		borderColor: Colors.primary, 
  		backgroundColor: 'transparent', 
  		borderWidth: 1
  	},
  	markLostButtonText: {
  		fontSize: wp('3.8%'), 
  		color: Colors.primary
  	},
  	markLostButtonIcon: {
  		fontSize: wp('5%'), 
  		color: Colors.primary
  	}
});



