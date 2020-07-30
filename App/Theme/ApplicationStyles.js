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
	      height: 0,
	    },
	},
	formButton: {
		width: wp('38%'),
		alignSelf: 'center',
		marginTop: hp('2%'),
		borderRadius: 10,
		height: hp('5.5%'),
		zIndex: 3
	},
	formHeading: {
	    alignSelf: 'center',
	    color: Colors.primary,
	    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat_b',
	    fontSize: wp('5.5%'),
	    marginBottom: hp('4%'),
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
    },
    container: {
	    backgroundColor: Colors.white,
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	    justifyContent: 'center',
	    alignItems: 'center',
	    flex: 1,
	    paddingTop: hp('15%')
  	},
  	label: {
	    color: Colors.primary,
	    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat_b',
	    fontSize: wp('4.5%'),
	    paddingLeft: wp('.5%'),
  	},
  	divider: {
  		borderBottomWidth: .5,
        borderColor:Colors.grey,
        marginVertical:10,
        width: '100%',
        alignSelf: 'center'
  	}
}
