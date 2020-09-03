import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  select: {
    borderColor: Colors.lightGrey,
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 2,
    color: Colors.primary,
    height: hp('6%'),
    textAlignVertical: 'center',
    marginBottom:15,
    fontFamily: ApplicationStyles.textMsgFont,
    
  },
  labelStyle: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    marginBottom: 2,
    marginLeft: 3,
    fontSize: wp('4.2%'),
    marginBottom:3
  }
})
