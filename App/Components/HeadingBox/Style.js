import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  heading: {
  	color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.white,
    fontSize:wp('3.5%')
    
  },
  headingContainer: {
  	backgroundColor: Colors.primary,
  	alignItems: 'center',
  	paddingHorizontal: wp('3%'),
  	paddingVertical: hp('1.5%'),
  	marginTop: hp('4%'),
  	marginBottom: hp('2%'),
  	borderTopRightRadius: 8,
  	borderBottomRightRadius: 8,
  	width: wp('46%')
  }
})
