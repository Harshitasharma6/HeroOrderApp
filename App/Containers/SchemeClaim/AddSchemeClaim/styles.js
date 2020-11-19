import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    width: wp('88%'),
  },

  action1:{

    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: hp('7%'),
  },

  upperformButton:{
     
		alignSelf: 'center',
		marginTop: hp('2%'),
		borderRadius: 10,
		height: hp('4%'),
		zIndex: 3,
		width: wp('40%')
	

  },
  heading: {
    alignSelf: 'center',
    color: Colors.black,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('5.5%'),
   
    marginTop: hp('0%'),
      textTransform: 'uppercase',
      marginBottom: hp('1%'),
  },
  

  lowerformButton:{
     
    alignSelf: 'center',
    marginTop: hp('2%'),
    borderRadius: 10,
    height: hp('6%'),
    zIndex: 3,
    width: wp('60%')


},

AttachDocButton:{
     
    alignSelf: 'center',
   
    borderRadius: 10,
    height: hp('5%'),
    zIndex: 3,
    width: wp('50%'),
    marginLeft: '40%'


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
  
  middleheading: {
    alignSelf: 'flex-start',
    color: Colors.grey,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('3.5%'),
   
    marginTop: hp('0%'),
     
      marginBottom: hp('0%'),

  },

  middleheading1: {
    alignSelf: 'flex-start',
    color: Colors.black,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('3%'),
   
    marginTop: hp('0%'),
    marginRight:wp('5%'),
     
      marginBottom: hp('0%'),

  },
  middletext: {
    alignSelf: 'flex-start',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('4.5%'),
   
    marginTop: hp('2%'),
     
      marginBottom: hp('0%'),
    marginLeft:wp('2%')

  },
  middletext1: {
    alignSelf: 'flex-start',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('4.5%'),
   
    marginTop: hp('0%'),
     
      marginBottom: hp('0%'),
    marginLeft:wp('2%')

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
    fontSize: 18
  },

  selectPickerStyle: {
    borderRadius: 100,
    width: wp('88%'),
    height: hp('5.5%'),
    marginTop: 5,
    marginBottom: hp('2%'),
    fontSize: wp('2%'),
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  picker: {
    borderRadius: 10,
    width: wp('88%'),
    height: hp('5.7%'),
    marginBottom: hp('3%'),
    paddingHorizontal: 8
  },
  pickerLabel: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  Compbutton: {
    marginVertical: 15,
    marginHorizontal:10,
    backgroundColor: Colors.white,
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
  Comptext: {
    color: Colors.button,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 18
  },
  actionButton: {
   
    paddingLeft: wp('6%'),
    paddingRight: wp('4%'),
    marginBottom: hp('2%'),
    marginTop: hp('2%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('4%'),
    minWidth: wp('30%'),
    backgroundColor: Colors.lightGrey,
    borderWidth: 1,
    borderColor: Colors.black
  },
  actionButtonText: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont,
    color:Colors.black
  },
  actionButton1: {
   
    paddingLeft: wp('6%'),
    paddingRight: wp('4%'),
    marginBottom: hp('2%'),
    marginTop: hp('2%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('6%'),
    minWidth: wp('30%'),
    
  },
  actionButtonText1: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont,
    
  },
  bottomMargin: {
    marginBottom: hp('2%'),
    width: '100%'
  },
  recurringActionButtonText: {
    color: Colors.primary,
    fontSize: wp('4%'),
    textTransform: 'capitalize',
    fontFamily: ApplicationStyles.textMediumFont
  },
  callButtonText: {
    fontSize: wp('3.3%')
  },
})
