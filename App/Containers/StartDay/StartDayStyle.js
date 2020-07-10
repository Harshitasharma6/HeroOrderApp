import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from '../../Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    marginTop: 40,
    width: wp('90%')
  },
  button: {
    // ...Metrics.mediumVerticalMargin,
    // ...Metrics.smallBottomMargin,
    marginVertical: 12,
    marginHorizontal:10,
    backgroundColor: Colors.white,
    borderColor: Colors.lightGrey,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 2,
    height: hp('6%'),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: wp('60%'),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  buttonBox: {
    ...Metrics.bottomMargin,
    ...Helpers.textCenter,
  },
  container: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
    // marginHorizontal: 30,
    // marginVertical: 110,
    // paddingBottom: 60,
    shadowColor: Colors.white,
    shadowOffset: { width: 20, height: 30 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
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
  text: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4%'),
    textTransform: 'uppercase'
  },
  mb10: {
    marginBottom: 10
  },
  buttonIcon: {
    color: Colors.primary,
    fontSize: wp('5.5%'),
    marginHorizontal: wp('2%')
  }
});
