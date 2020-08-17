import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
 box: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    width: wp('90%'),
    marginVertical: 8,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    borderRadius: 10,
    position: 'relative',
    elevation: 4
  },
  image: {
  	width: wp('70%'),
  	height: hp('37%'),
  	borderRadius: 5
  },
  imageContainer: {
  	alignItems: 'center', 
  	marginBottom: hp('5%'),
  	marginTop: hp('2%')
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
    textTransform: 'capitalize'
  },
  description: {
  	color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4%'),
    marginBottom: 4,
    textTransform: 'capitalize'
  },
  heading: {
  	color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4.4%'),
    marginVertical: 5,
    textTransform: 'uppercase'
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
  },
  labelStyle: {
  	fontSize: wp('4%')
  },
  valueStyle: {
  	fontSize: wp('4%'),
  	color: Colors.grey
  },
  blueLabelStyle: {
  	fontSize: wp('4%'),
  	color: Colors.blue
  },
  blackLabelStyle: {
  	fontSize: wp('4%'),
  	color: Colors.black
  },
  blackValueStyle: {
  	fontSize: wp('4%'),
  	color: Colors.black
  },
  editIcon: {
  	fontSize: wp('5.5%'),
  	color: Colors.primary,
  	paddingHorizontal: 10,
  	paddingTop: 3
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
    fontFamily: ApplicationStyles.textMediumFont,
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
   editInputField: {
    borderWidth: 0, 
    borderBottomWidth: 1, 
    borderRadius: 0,
    fontSize: wp('4%'),
    color: Colors.grey,
    width: 100,
    height: hp('2%'),
    textAlign: 'center',
    padding: 0
  },
  editInputFieldContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    width: '100%'
  },
  editInputFieldChildContainer: {
    width: '23%',
    marginLeft: '33%' 
  },
})
