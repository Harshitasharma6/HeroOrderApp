import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    width: wp('94%'),
    marginVertical: 8,
    padding: 14,
    borderRadius: 10,
    position: 'relative',
    borderColor: Colors.lightGrey,
    borderWidth: 1
  },
  btmBox: {
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10
  },
  desc: {
    color: Colors.primary,
    fontSize: wp('2.5%'),
    fontFamily: ApplicationStyles.textMsgFont,
    width: '80%',
  },
  detail: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.clr66,
    fontSize: wp('3%'),
    textTransform: 'uppercase'
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  title: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3.6%'),
    width: '95%',
    textTransform: 'uppercase'
  },
  ttl: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3%')
  },
  tuple: {
    borderBottomColor: Colors.primary,
    flexDirection: 'row'
  },
  userCircle: {
    // marginTop: 80,
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: Colors.primary,
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  userDtl: {
    paddingHorizontal: 10,
    width: '100%',
  },
  userIcon: {
   color: Colors.primary
  }
})
