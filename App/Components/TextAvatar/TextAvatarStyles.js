import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    height: wp('7.4%'),
    width: wp('7.4%'),
    borderRadius: wp('7.2%'),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('1%')
  },
  text: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: wp('3.5%'),
    textTransform: 'uppercase'
  },
})
