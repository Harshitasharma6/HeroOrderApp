import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let windowWidth = wp('100%')
let containerWidth = wp('94%')

export default StyleSheet.create({
  box: {
    backgroundColor: Colors.clrF1F9FF,
    width: containerWidth,
    marginVertical: hp('.8%'),
    paddingVertical: hp('.7%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    position: 'relative'
  },
  title: {
    color: Colors.button,
    fontFamily: ApplicationStyles.textMediumFont,
    fontSize: wp('4%'),
    marginBottom: 0,
    overflow:'hidden'
  },
  titleContainer: {
  	alignSelf: 'center',
  	width: wp('40%')
  },
  quantityContainer: {
  	alignSelf: 'center',
  	alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  	width: wp('30%'),
  	overflow: 'visible'
  },
  removeContainer: {
  	alignItems: 'flex-end',
  	justifyContent: 'flex-end',
  	width: wp('10%')
  },
  actionButton: {
    borderWidth: 0, 
    alignSelf: 'center', 
    backgroundColor: Colors.clrF1F9FF, 
    borderColor: '#BCE0FD',
    elevation: 0
  },
  actionButtonText: {
    fontSize: wp('3%'),
    fontFamily: ApplicationStyles.textFont,
    color: Colors.clr66
  },
  actionButtonIcon: {
    color: Colors.button, 
    marginRight: 0
  }
})
