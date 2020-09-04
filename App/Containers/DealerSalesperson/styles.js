import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    width: wp('88%'),
    flex:1,
    marginTop:'5.5%',
   
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
  heading: {
    
	    alignSelf: 'center',
	    color: Colors.primary,
	    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
	    fontSize: wp('5.5%'),
	   
	    marginTop: hp('1%'),
        textTransform: 'uppercase',
      
        
	

  },
  heading1: {
    
    alignSelf: 'flex-start',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('5.0%'),
   
    marginTop: hp('5%'),
    textTransform: 'uppercase',
    marginLeft: '5%',
    
   

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
})
