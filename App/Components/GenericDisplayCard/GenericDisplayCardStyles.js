import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  card: {
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
  darkCard: {
    ...Metrics.normalPadding,
    width: wp('92%'),
    backgroundColor: Colors.label,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
    alignSelf: 'center'
  },
   desc: {
    color: Colors.primary,
    fontSize: wp('3%'),
    fontFamily: ApplicationStyles.textMsgFont,
    width: '80%',
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  darkDetail: {
    fontSize: wp('3.5%'),
    color: Colors.clrF1F9FF,
    fontFamily: ApplicationStyles.textMsgFont
  },
  darkTitle: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4.5%'),
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  darkTtl: {
    color: Colors.clrF1F9FF,
    fontSize: wp('3.5%'),
    fontFamily: ApplicationStyles.textFont
  },
  detail: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
    fontSize: wp('3.5%'),
    flexWrap: 'wrap',
    flexShrink: 1,
    width: '50%',
    textAlign: 'right',
    marginTop: hp('.5%')
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4.5%'),
    textTransform: 'uppercase'
  },
  ttl: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3.5%'),
    marginTop: hp('.5%'),
    marginBottom: hp('.5%')
  },
})
