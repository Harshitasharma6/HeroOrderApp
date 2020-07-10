import Colors from './Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Platform} from 'react-native'

export default {
	textFont: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat_b',
	textMsgFont: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat_b',
	textMediumFont: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat_b',
	button: {
		backgroundColor: Colors.primary
	},
	buttonShadow: {
		elevation: 5,
	    shadowColor: "#000",
	    shadowOffset: {
	      width: 0,
	      height: 2,
	    },
	    shadowOpacity: 0.25,
	    shadowRadius: 3.84
	},
	formButton: {
		width: wp('38%'),
		margin: 20,
		marginHorizontal: 10,
		borderRadius: 10,
		height: hp('5.5%'),
		zIndex: 3
	},
	formHeading: {
	    alignSelf: 'center',
	    color: Colors.primary,
	    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat_b',
	    fontSize: wp('4.5%'),
	    marginBottom: hp('3.5%'),
	    textTransform: 'uppercase'
	},
	plusIcon: {
        borderRadius: 50,
        bottom: 75,
        position: 'absolute',
        right: 25,
        borderRadius: 50,
        height: 45,
        width: 45,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backArrow: {
      color: Colors.primary,
      padding: 5
    },
    container: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center'
    },
    brandInput: {
	    fontSize: wp('3.2%'),
	    height: hp('4.4%'),
	    padding: 0
    },
    nearbyButton: {
    	alignSelf: 'flex-start',
    	height: hp('5.2%'),
    	width: wp('36%')
    }, 
    nearbyButtonIcon: {
    	color: Colors.primary, 
	    fontSize: wp('5%'),
	    marginRight: 0
    }
}
