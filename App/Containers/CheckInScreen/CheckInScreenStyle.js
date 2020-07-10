import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    marginTop: 0,
    width: wp('85%')
  },
  button: {
    marginVertical: 12,
    marginHorizontal:10,
    backgroundColor: Colors.button,
    borderColor: Colors.border,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 2,
    height: 45,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  buttonBox: {
    ...Metrics.bottomMargin,
    ...Helpers.textCenter,
  },
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: hp('13%')
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
  underaction: {
    marginTop: 30,
    width: wp('85%')
  },
  plus: {
    color: Colors.white, 
    fontSize: wp('6%'), 
    alignSelf: 'center'
  },
  plusIcon: {
    borderRadius: 50,
    bottom: 75,
    position: 'absolute',
    right: 25,
    borderRadius: 50,
    height: wp('12%'), 
    width: wp('12%'), 
    backgroundColor: Colors.theme,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
