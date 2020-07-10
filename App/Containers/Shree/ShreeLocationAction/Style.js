import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	    backgroundColor: Colors.white,
	    flex: 1
	},
	plus: {
        backgroundColor: Colors.white,
        borderRadius: 50,
        height: 50,
        width: 50,
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
    text: {
        fontSize:wp('4%'), 
        justifyContent:'center', 
        alignItems:'center',
        color: Colors.grey,
        fontFamily: ApplicationStyles.textMsgFont
    },
    buttonStyle: {
    	width: wp('48%'),
    	height: hp('6%')
    },
    buttonTextStyle: {
    	fontSize: wp('3.5%')
    },
    heading: {
    	...ApplicationStyles.formHeading
  	}
});