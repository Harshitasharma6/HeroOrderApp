import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3.5%'),
    textTransform: 'capitalize'
  }
})
