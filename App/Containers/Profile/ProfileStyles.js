import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 30,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    position: 'relative'
  },
  button: {
    // ...Metrics.mediumVerticalMargin,
    // ...Metrics.smallBottomMargin,
    marginVertical: 12,
    marginHorizontal:10,
    backgroundColor: Colors.primary,
    borderColor: Colors.lightGrey,
    borderStyle: 'solid',
    borderWidth: 1,
    zIndex: 2,
    height: hp('6%'),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: wp('60%'),
   
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  header: {
    flex: 1, 
    paddingBottom: 10, 
    alignItems: 'center', 
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    color: Colors.primary,
    fontSize: wp('5.5%'),
    marginHorizontal: wp('2%')
  }
})
