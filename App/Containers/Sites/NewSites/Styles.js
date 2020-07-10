import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from '../../../Theme'
import { Left } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    // marginTop: 80,
    width: wp('88%'),
  },
  button: {
    ...ApplicationStyles.formButton
  },
  container: {
    ...Metrics.tinyHorizontalPadding,
    ...Metrics.tinyVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
  },
  heading: {
    ...ApplicationStyles.formHeading
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
  pickerStyle: {
    borderRadius: 10,
    width: wp('88%'),
    height: hp('5.5%'),
    marginTop: 5,
    paddingHorizontal: 10,
    marginBottom: hp('2%'),
    fontSize: wp('2%'),
    justifyContent: 'center'
  },
  picker: {
    borderRadius: 10,
    width: wp('88%'),
    height: hp('5.5%'),
    marginTop: 5,
    marginBottom: hp('2%'),
    fontSize: wp('2%'),
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  pickerLabel: {
    color: Colors.placeHolder,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  bottomMargin: {
    marginBottom: hp('2%'),
    width: '100%'
  },
  inputText: {
    borderRadius: 10,
    fontSize: wp('3.5%')
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3.5%'),
  },
  label: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4%'),
    paddingLeft: wp('2%'),
    ...Metrics.tinyVerticalMargin
  },
})
