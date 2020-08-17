import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
 box: {
 	alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    width: wp('90%'),
    marginVertical: 8,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    borderRadius: 10,
    position: 'relative',
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
  	fontSize: wp('3.4%')
  },
  buttonStyle: {
  	width: wp('41%')
  },
  heading :{
  	color: Colors.black,
  	fontSize: wp('5.8%'),
  	fontFamily: ApplicationStyles.textMsgFont
  }
})
