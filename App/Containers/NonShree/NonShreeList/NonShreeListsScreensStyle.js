import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    // marginTop: 80,
    width: 360,
  },
  button: {
    ...Metrics.mediumVerticalMargin,
    ...Metrics.smallBottomMargin,
    backgroundColor: Colors.button,
    borderColor: Colors.border,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  container: {
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1
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
    marginBottom: 10,
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
    height: wp('12%'), 
    width: wp('12%'), 
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...ApplicationStyles.buttonShadow
  },
  text: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 18,
  },
  addIcon: { 
    color: Colors.white, 
    fontSize: wp('7%'), 
    alignSelf: 'center' 
  }
})
