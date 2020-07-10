import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    width: Dimensions.get('window').width,
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 30,
    position: 'relative',
    alignItems: 'center'
  },
  btmBox: {
    flexDirection: 'column'
  },
  desc: {
    color: Colors.primary,
    fontSize: 12,
    fontFamily: ApplicationStyles.textFont,
  },
  detail: {
    // fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.clr66,
    fontWeight: '700',
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.primary,
    fontSize: wp('4.5%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  ttl: {
    color: Colors.clr66,
    fontSize: 14,
  },
  tuple: {
    borderBottomColor: Colors.clrF1F9FF,
    borderRadius: 1,
    flexDirection: 'row',
  },
  userCircle: {
    // marginTop: 80,
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
     borderWidth: 1,
     borderColor: Colors.primary,
    borderRadius: 50,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  userDtl: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    overflow: 'hidden',
    width: Dimensions.get('window').width - 120
  },
  userIcon: {
    height: 16,
    width: 16,
  }
})
