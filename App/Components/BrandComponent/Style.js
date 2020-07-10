import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { Left } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  picker: {
    borderRadius: 10,
    width:'100%',
    height: hp('4.4%'),
    paddingHorizontal: 8,
    marginBottom: hp('2%'),
    marginLeft: 0,
    backgroundColor: 'transparent'

  },
  pickerLabel: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    textAlign: "left",
    width: "99%",
    fontSize: wp('3.5%'),
    alignSelf: 'center'
  }
})
