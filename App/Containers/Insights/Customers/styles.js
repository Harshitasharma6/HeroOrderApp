import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    marginTop: 50,
    width: wp('80%'),
    justifyContent: 'center'
  },
  button: {
    ...ApplicationStyles.formButton,
    alignSelf: 'center',
    marginTop: 30
  },
  buttonBox: {
    ...Helpers.textCenter,
  },
  container: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 110,
    paddingBottom: 60,
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
  	fontSize: wp('5.5%')
  },

callButton: {
    width: wp('10%'), 
    alignSelf: 'flex-end', 
    marginTop: hp('1%'), 
    borderRadius:  wp('100%'),
    paddingRight: 2, 
    paddingLeft: 2, 
    position: 'absolute', 
    top: -hp('6%'), 
    right: -wp('2%'), 
    borderColor: Colors.primary, 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    zIndex: 3
  },
  callButtonText: {
    fontSize: wp('3.8%')
  },
  callButtonIcon: {
    fontSize: wp('5%'), 
    color: Colors.primary
  },
});
