import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  icon: {
    color: Colors.grey,
    fontSize: wp('4.2%')
  },
  iconText: {
  	color:  Colors.grey,
  	fontFamily: ApplicationStyles.textMsgFont,
  	fontSize: Fonts.iconText.fontSize,
    alignSelf: 'center',
    textAlign: 'center',
    overflow: 'hidden',
    paddingLeft: 3.5, 
    paddingRight: 0
  },
  iconActive: {
  	color: Colors.primary
  },
  iconButton: {
  	backgroundColor: Colors.white,
  	borderRadius: 0,
    height: '100%'
  },
  iconActiveButton: {
  	backgroundColor: Colors.lightGrey
  }
});
