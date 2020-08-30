import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  icon: {
  	color: Colors.primary,
  	fontSize: wp('8%'),
  	padding: wp('1.5%')
  }
});
