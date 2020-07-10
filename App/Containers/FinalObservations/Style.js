import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { Left } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    width: wp('88%'),
  },
  button: {
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
    width: wp('50%'),
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'center',
    height: hp('6%')
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
    height: hp('5.5%'),
    fontSize: wp('3.7%'),
    justifyContent: 'center',
    justifyContent: 'flex-end',
    padding: 0
  },
  text: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 18,
  },
  addButton: {
    marginTop: 20,
    width: wp('50%'),
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    textAlign: 'left',
    backgroundColor: Colors.primary
  },
  addButtonText: {
   fontSize: wp('4.5%'),
   textAlign: 'left',
   color: Colors.white
  },
  addButtonIcon: {
    color: Colors.white,
    fontSize: wp('7%'),
    alignSelf: 'center'
  },
  trashButtonIcon: {
    color: Colors.error,
    fontSize: wp('7%'),
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    right: 10,
    padding: 10
  },
  selectPickerStyle: {
    borderRadius: 10,
    width: wp('40%'),
    height: hp('4.5%'),
    marginTop: 5,
    marginBottom: hp('2%'),
    fontSize: wp('2%'),
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  picker: {
    borderRadius: 10,
    width:'100%',
    height: hp('4.5%'),
    paddingHorizontal: 8,
    marginBottom: hp('2%'),
    marginLeft: 0,
    backgroundColor: Colors.lightGrey

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
