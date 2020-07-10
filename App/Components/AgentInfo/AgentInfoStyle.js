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
  	color: Colors.primary
  },
  container: {
  	flexDirection: 'column',
  	marginVertical: 10
  },
  textContainer: {
  	width: '100%',
  	backgroundColor: Colors.lightGrey,
  	padding: 10,
  	alignItems: 'flex-start',
  	justifyContent: 'center',
  	borderRadius: 5,
  	marginTop: 7 
  }
})
