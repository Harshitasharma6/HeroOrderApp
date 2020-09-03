import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    width: wp('88%'),

    marginTop:'8.5%',
   
  },
  plusIcon: {
    borderRadius: 50,
   bottom:75,
  position: 'absolute',
  right: 25,
  borderRadius: 50,
  height: hp('7.5%'),
  width: wp('15%'),
  right:20,
  backgroundColor: Colors.primary,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
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
	    color: Colors.black,
	    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
	    fontSize: wp('6.5%'),
	   
	    marginTop: hp('0%'),
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
    borderRadius: 10,
    width: wp('42%'),
    height: hp('4.5%'),
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: Colors.lightGrey,
    color: Colors.primary,
  },
  customLabelStyle: {
    color: Colors.grey
  },
  containerStyle: {
    marginLeft: wp('46%'),
    marginTop: hp('2%')
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
