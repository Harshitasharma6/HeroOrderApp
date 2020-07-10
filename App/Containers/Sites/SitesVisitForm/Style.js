import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { Left } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    // marginTop: 80,
    width: wp('88%'),
  },
  button: {
    ...Metrics.smallBottomMargin,
    width: 120
  },
  container: {
    ...Metrics.tinyHorizontalPadding,
    ...Metrics.tinyVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
  },
  heading: {
    ...ApplicationStyles.formHeading,
    marginTop: 15
  },
  link: {
    color: Colors.label,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'flex-end',
  },
  linkText: {
    ...Fonts.input,
    color: Colors.label,
  },
  mb10: {
    marginBottom: hp('2%'),
    height: hp('5.5%'),
    fontSize: wp('3.7%'),
    justifyContent: 'center',
    padding: 0
  },
  text: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 18,
  },
  picker: {
    borderRadius: 100, 
    width: wp('88%'),
    height: hp('5.7%'),
    marginBottom: hp('2%')
  },
  pickerLabel: {
    color: Colors.placeHolder,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  }
})
