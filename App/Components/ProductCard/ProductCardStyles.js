import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
 box: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    width: wp('92%'),
    marginVertical: 8,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    borderRadius: 10,
    position: 'relative'
  },
  desc: {
    color: Colors.clr66,
    fontSize: wp('3%'),
    fontFamily: ApplicationStyles.textFont,
    width: wp('92%')*.9,
    overflow:'hidden'
  },
 title: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('5%'),
    marginBottom: 4,
    width: wp('80%')
  },
  actionButtonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: hp('3%'),
    width: '100%'
  },
  actionButton: {
    borderWidth: 1.5, 
    alignSelf: 'center', 
    backgroundColor: Colors.lightGrey, 
    height: hp('4.5%'),
    width: wp('92%')*.25
  },
  actionButtonText: {
    fontSize: wp('3%'),
    fontFamily: ApplicationStyles.textFont,
    color: Colors.clr66
  },
  actionButtonIcon: {
    color: Colors.primary, 
    fontSize: wp('5%'),
    marginRight: 0
  },
  quantityContainer: {
    alignSelf: 'flex-end',
    width: wp('92%')*.40,
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('.5%')
  },
  price: {
    color: '#000000',
    fontSize: wp('4%'),
    marginHorizontal: wp('1%'),
    marginLeft: 0
  },
  discountedPrice: {
    color: Colors.clr66,
    fontSize: wp('3%'),
    textDecorationLine: 'line-through',
    marginHorizontal: wp('1%'),
  },
   discountedPriceOff: {
    color: Colors.green,
    fontSize: wp('3%'),
    marginHorizontal: wp('1%'),
    fontWeight: 'bold'
  },
  availableStock: {
    color: '#EF6331',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1%'),
    fontWeight: 'bold',
    marginLeft: 0
  }
})
