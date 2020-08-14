import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    marginTop: hp('5%'),
    width: wp('80%'),
    justifyContent: 'center'
  },
  button: {
    ...ApplicationStyles.formButton,
    alignSelf: 'center',
    marginTop: hp('2.5%')
  },
  buttonBox: {
    ...Helpers.textCenter,
  },
  container: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    marginHorizontal: 30,
    marginVertical: hp('4%'),
    paddingBottom: 60,
    shadowColor: Colors.white,
    shadowOffset: { width: 20, height: 30 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: 'relative',
    height: hp('100%')
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
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 18,
  },
  mb10: {
    marginBottom: 10
  },
  logoContainer:{
    width: 250, 
    height: 150, 
    resizeMode: 'contain'
  },
  buttonIcon: {
  	color: Colors.white,
  	fontSize: wp('5%')
  },
  bottomSection: {
      position: 'absolute',
      bottom: hp('1%'),
      width: wp('90%')
  },
  proceedAction: {
    alignSelf: 'flex-end', 
    marginTop: hp('1%')
  },
  proceedActionText: {
    fontSize: wp('3.8%')
  },
  logo: {
    width: wp('70%'), 
    height: hp('18%'), 
    resizeMode: 'contain' 
  },
  labelStyles: {
    fontSize: wp('4%')
  }
});
