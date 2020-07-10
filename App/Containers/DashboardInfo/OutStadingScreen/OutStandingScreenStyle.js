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
    margin: 20,
    width: 120,
    marginLeft: 10,
    borderRadius: 10
  },
  container: {
    ...Metrics.tinyHorizontalPadding,
    ...Metrics.tinyVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
  },
  heading: {
    alignSelf: 'center',
    color: Colors.clr0094FF,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 24,
    marginBottom: 15
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
    borderRadius: 10, 
    width: wp('90%'),
    height: hp('5.7%'),
    marginBottom: hp('1%'),
    alignSelf: 'center',
    zIndex: 100
  },
  pickerLabel: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    flexDirection: "row",
    fontSize: wp('3.5%'),
    paddingLeft: wp('2%'),
  },
  searchFiltersContainer: {
    height: hp('9%')
  }
})
