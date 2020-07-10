import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
  button: {
    // backgroundColor: Colors.lightGrey,
    // borderColor: Colors.primary,
    // overflow: 'hidden',
    // ...ApplicationStyles.buttonShadow,
    // alignItems: 'center',
    // flexDirection: 'row',
    // paddingLeft: 15,
    // paddingRight: 15,
    // paddingTop: 10,
    // paddingBottom: 10,
    // justifyContent: 'space-around',
    // borderRadius: 10


    backgroundColor: Colors.lightGrey,
    borderColor: Colors.primary,
    borderWidth: 0,
    overflow: 'visible',
    ...ApplicationStyles.buttonShadow,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10

  },
  text: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('5%'),
    textTransform: 'uppercase',
    textAlign: 'center'
  },
})
