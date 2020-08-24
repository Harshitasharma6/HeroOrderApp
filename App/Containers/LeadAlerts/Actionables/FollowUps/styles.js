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
  	}
});



