import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Badge } from 'native-base';
import { connect } from 'react-redux';
import ItemDetail from 'App/Components/ItemDetail';
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading';
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors, ApplicationStyles } from 'App/Theme';
import ProductCard from 'App/Components/ProductCard';
import PriceDetails from 'App/Components/PriceDetails';
import TotalPriceCard from 'App/Components/TotalPriceCard';
import ProductsActions from 'App/Stores/Products/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import BlueButton from 'App/Components/BlueButton';
import GenericIcon from 'App/Components/GenericIcon';
import WhiteButton from 'App/Components/WhiteButton';
import AppliedOffer from 'App/Components/AppliedOffer';
import ApplyOffers from './ApplyOffers';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavigationService from 'App/Services/NavigationService';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



class OrderCartScreen extends Component {
	componentDidMount() {
		const {
			cart,
			state_id,
			fetchProductSchemes
		} = this.props;

		let data = cart.products[0] || {};

		fetchProductSchemes({
			state_id,
			product_id: data.sfid
		});

	}
  	getDataNode() {
	    const {
	      cart,
	      openModal,
	      addOffer,
	      removeOffer,
	      productSchemes,
	      editDealerDiscount,
	      removeItemFromCart,
	      openDealerDiscountEdit,
  		  closeDealerDiscountEdit,
  		  changeDealerDiscount
	    } = this.props;
    	let visibleNode = [];

    if (cart.products && cart.products.length) {
    	let data  = cart.products[0];
    	let product_id =  data.sfid;
	    visibleNode = (
	    	<ScrollView>
		    	<ProductCard 
			        data={data}
			        showEditQuantity={false}
			        showSingleAddToCartAction={false}
			        hideInfoAction={true}
			        showRemoveAction={true}
			        onPressRemoveAction={() => removeItemFromCart()}
		      	/>
		      	<View style={{flexDirection: 'row', justifyContent: 'flex-end', marginVertical: hp('2%'), paddingHorizontal: wp('2%')}}>
	                <WhiteButton
	                	title={"Apply Offers"}  
	                	style={{width: wp('45%'), height: hp('5.5%')}} 
	                	textStyle={{color: Colors.blue, fontSize: wp('4%')}}
	                	onPress={() => {
						return openModal({
								content: <ApplyOffers  selectedOffers={cart.offersApplied} availableOffers={productSchemes[product_id] || []} onPressSelect={(value) => addOffer(value)}/>, 
								heading: 'APPLY OFFERS', 
								bodyFlexHeight: 1
						})}}
	                >
		            	<Icon name={'brightness-percent'} style={{color: Colors.blue, fontSize:  wp('5.5%')}}/>
		            </WhiteButton>

	            </View>
	            {	
	            	cart.offersApplied && cart.offersApplied.length ?
	            	<>
	            	<Text style={Styles.heading}>{'Applied Offers'}</Text> 
	           		<View style={{flexDirection: 'row', marginVertical: hp('1%'), paddingHorizontal: wp('1%'), width: wp('100%'), flexWrap: 'wrap'}}>
	           		
	              	{cart.offersApplied.map((obj) => <AppliedOffer name={obj.scheme_name__c} key={obj.scheme_name__c} onPressRemove={() => removeOffer(obj.scheme_name__c)}/>)}
	            	</View></> : []
	            }
		      	<PriceDetails 
		      		basicPrice={cart.basicPrice} 
		      		taxes={cart.taxes} 
		      		offerAmount={cart.offerAmount}
		      		subsidy={cart.subsidy}
		      		totalAmount={cart.totalAmount}
		      		dealerDiscount={cart.dealerDiscount}
		      		openDealerDiscountEdit={() => openDealerDiscountEdit()}
  		  			closeDealerDiscountEdit={() => closeDealerDiscountEdit()}
  		  			changeDealerDiscount={(value) => changeDealerDiscount(value)}
  		  			editDealerDiscount={editDealerDiscount}
		      	/>
		      	
		      	<TotalPriceCard 
		      		totalAmount={cart.totalAmount}
		      		onPress={() => {HelperService.showToast({ 
						message: 'Booking Confirmed', 
						duration: 2000, 
						buttonText: 'Okay' 
          }) ;
          NavigationService.navigate('GenerateRecieptformScreen');
        
        }}
		      	/>
		    </ScrollView>
	    );
	}else {
		visibleNode = <NoDataFound text={'No item in cart'}/>
	}

    return visibleNode;
  }

  render() {
    const {
      cart
    } = this.props;

    return (
      <View style={{ flex: 1, paddingTop: 15, paddingHorizontal: 15}}>
         <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: hp('1.5%'), position: 'relative'}}>
          <BlueButton title={"   Cart "}>
            <GenericIcon name={'cart-plus'} style={{color: Colors.white, fontSize: wp('6%')}}/>
          </BlueButton>
          <Badge style={Styles.countBadge}>
              <Text style={Styles.countBadgeText}>{cart.products ? cart.products.length : 0}</Text>
          </Badge>
        </View>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader   : state.products.loaders.getAllProductsLoader,
  enquiry  : state.visitor.currentEnquiryId,
  state_id : state.user.state__c,
  data     : state.products.productsData,
  cart     : state.products.cart,
  productSchemes: state.products.productSchemes,
  editDealerDiscount: state.products.editDealerDiscount
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params)                 => dispatch(ProductsActions.getAllProducts(params)),
  removeItemFromCart:(params)        => dispatch(ProductsActions.removeItemFromCart(params)),
  editCart:(params)                  => dispatch(ProductsActions.editCart(params)),
  editCartSuccess:(params)           => dispatch(ProductsActions.editCartSuccess(params)),
  openDealerDiscountEdit:(params)    => dispatch(ProductsActions.openDealerDiscountEdit(params)),
  closeDealerDiscountEdit:(params)   => dispatch(ProductsActions.closeDealerDiscountEdit(params)),
  changeDealerDiscount:(params)      => dispatch(ProductsActions.changeDealerDiscount(params)),
  addOffer:(params)      		     => dispatch(ProductsActions.addOffer(params)),
  removeOffer:(params)      		 => dispatch(ProductsActions.removeOffer(params)),
  openModal:(params)		 	     => dispatch(CommonActions.openModal(params)),
  fetchProductSchemes:(params)       => dispatch(ProductsActions.getProductSchemes(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCartScreen)



const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white, 
    borderBottomWidth: 0,
    height: hp('12%'), 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  datePicker:{
    alignSelf: 'center', 
    backgroundColor: Colors.button, 
    borderRadius: 100, 
    width: wp('55%'),
    flexDirection:'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 8
  },
  dateText: {
    fontFamily: ApplicationStyles.textMediumFont, 
    color: Colors.white, 
    fontSize: wp('4%'),
    textTransform: 'capitalize'
  },
  dateIcon: {
    color: Colors.white, 
    fontSize: wp('7%'),
    marginLeft: 0, 
    marginRight: 0,
    zIndex: 2,
    paddingLeft: wp('3%')
  },
  dateChangeIcon: {
     color: Colors.button, 
     fontSize: 60, 
     alignSelf: 'center', 
     paddingHorizontal: 20
  },
  psmPickerStyles: {
      borderRadius: 100, 
      width: wp('92%')
    },
  countBadge: {
      backgroundColor: Colors.white,
      padding: 0,
      borderWidth: 2,
      borderColor: Colors.primary,
      minWidth: wp('8%'),
      minHeight: wp('8%'),
      position: 'absolute',
      borderRadius: wp('10%'),
      top: -hp('1.65%'),
      left: '93.5%',
      alignItems: 'center',
      justifyContent: 'center'
    },
  countBadgeText: {
     color: Colors.primary,
     fontFamily: ApplicationStyles.textMsgFont,
     fontSize: wp('4%')
  },
  heading: {
  	color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4.4%'),
    marginVertical: hp('1.3%'),
    textTransform: 'uppercase',
    alignSelf: 'center'
  },
});



