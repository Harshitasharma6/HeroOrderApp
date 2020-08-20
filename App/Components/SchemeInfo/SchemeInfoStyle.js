import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  heading: {
  	fontSize: wp('4%'),
  	fontFamily: ApplicationStyles.textMsgFont,
  	color: Colors.grey
  },
  value: {
  	fontSize: wp('4%'),
  	fontFamily: ApplicationStyles.textMsgFont,
	  color: Colors.primary,
	  minWidth: wp('20%') 
  },
  container: {
  	flexDirection: 'row',
	  marginVertical: 3, 
	  justifyContent: 'space-between'
  },
  textContainer: {
	minWidth: wp('35%') ,
  	backgroundColor: Colors.lightGrey,
  	padding: 0,
  	alignItems: 'flex-start',
  	justifyContent: 'center',
  	borderRadius: 5,
	  marginTop: "0%",
	  marginRight: '7%'
  }
})
