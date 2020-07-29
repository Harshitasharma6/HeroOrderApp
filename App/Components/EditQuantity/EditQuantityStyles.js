import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
	},
  	actionButtonIcon: {
	    color: Colors.primary, 
	    fontSize: wp('9%'),
	    marginRight: 0, 
	    alignSelf: 'center',
	    paddingHorizontal: wp('1%')
  	},
  	quantityText: {
  		color: Colors.clr66,
  		fontFamily: ApplicationStyles.textMediumFont,
  		fontSize: wp('4%'),
  		paddingLeft: 0,
  		paddingRight: 0,
  		paddingTop: 0,
  		paddingBottom: 0,
  		height: hp('4%'),
  		borderWidth: 1,
  		borderColor: '#BCE0FD',
  		borderRadius: 3,
  		alignSelf: 'center',
  		textAlign: 'center'
  	}
})
