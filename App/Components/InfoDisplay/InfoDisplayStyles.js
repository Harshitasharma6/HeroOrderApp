import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
	loader: {
		color: Colors.primary
	},
	label: {
		fontFamily: ApplicationStyles.textMediumFont,
		color: Colors.grey,
		fontSize: 15,
		textAlign: 'left'
	},
	value: {
		fontFamily: ApplicationStyles.textMsgFont,
		color: Colors.clr66,
		textAlign: 'left',
		flexWrap: 'wrap',
		flexShrink: 1,
	    fontSize: wp('3.3%'),
	    width: '95%',
	    textTransform: 'uppercase'
	},
	container: {
		flexDirection: 'row',
		borderBottomWidth: 2,
		borderColor: Colors.lightGrey,
		paddingLeft: 30,
		paddingRight: 30,
		paddingVertical: 15,
		overflow: 'hidden'
	},
	textContainerLabel: {
		width: Dimensions.get('window').width / 2.2,
		justifyContent: 'center'
	},
	textContainerValue: {
		width: Dimensions.get('window').width / 2.1,
		overflow: 'hidden',
		justifyContent: 'flex-start',
		flexDirection: 'row'
	}
})
