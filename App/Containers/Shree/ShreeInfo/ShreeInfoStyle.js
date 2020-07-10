import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  parentContainer: {
    flex: 1
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    alignItems: 'center',
    height: hp('12%')
  },
  actionButton: {
    borderWidth: 1.5,
    alignSelf: 'center',
    height: hp('6%'),
    width: wp('94%'),
    margin: 12
  },
  actionButtonText: {
    fontSize: wp('4%'),
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    fontFamily: ApplicationStyles.textMediumFont
  },
  actionButtonIcon: {
    color: Colors.button,
    fontSize: 20,
    marginRight: 0,
    marginLeft: 12
  },
  callAction: {
    width: wp('20%')
  },
  locationAction: {
    width: wp('38%')
  },
  directionAction: {
    width: wp('45%')
  },
  editInputField: {
    borderWidth: 0, 
    borderBottomWidth: 1, 
    borderRadius: 0,
    fontSize: wp('3.4%'),
    paddingBottom: 0,
    height: hp('6%'), 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center', 
    color: Colors.grey,
    marginBottom: 5
  },
  editInputFieldContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    width: '100%'
  },
  editInputFieldChildContainer: {
    width: '30%'
  },
  editIcons: {
    color: Colors.primary, 
    fontSize: wp('7%'),
    paddingHorizontal: wp('4%')
  },
  editIconContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around'
  }
});
