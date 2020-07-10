import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    marginTop: 40,
    width: wp('90%')
  },
  button: {
    marginVertical: 12,
    marginHorizontal:10,
    backgroundColor: Colors.white,
    borderColor: Colors.lightGrey,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 2,
    height: hp('7%'),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: wp('80%'),
    elevation: 5,
    ...ApplicationStyles.buttonShadow,
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
