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
    width: wp('47.5%'), 
    elevation: 5,
    shadowColor: "#000",  
    alignSelf: 'center', 
    marginTop: hp('3%') , 
    marginBottom: hp('2.5%'),
    backgroundColor:Colors.lightGrey,
    shadowOffset: {
     width: 0,
          height: 2,
        },
  zIndex: 2,
  borderColor: Colors.lightGrey,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 10,
  },
  header: {
    flex: 1, 
    paddingBottom: 10, 
    paddingTop: hp('1.5%'), 
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
