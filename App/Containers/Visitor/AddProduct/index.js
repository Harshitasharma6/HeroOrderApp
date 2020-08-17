import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Badge } from 'native-base';
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors, ApplicationStyles } from 'App/Theme';
import ProductCard from 'App/Components/ProductCard'
import ProductsActions from 'App/Stores/Products/Actions';
import BlueButton from 'App/Components/BlueButton';
import GenericIcon from 'App/Components/GenericIcon';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavigationService from 'App/Services/NavigationService'

class AddProductScreen extends Component {
  componentDidMount() {
    this.fetchCall()
  }

  fetchCall() {
    const {
      state_id,
      fetchData
    } = this.props

    fetchData({
      state_id 
    });
  }

  isAddedInCart(item) {
    const {
      cart
    } = this.props;

    let isPresent = false;

    cart.products.map((obj) => {
      if (obj.id == item.id) {
        isPresent = true;
      }
    });

    return isPresent
  }


  onPressAddToCart(item) {
    this.props.addItemToCart({...item, quantity: 1});
  }


  getProductCard(item) {
    const {
      cart,
      addItemToCart,
      removeItemFromCart,
      editCart,
      editCartSuccess,
      openDealerDiscountEdit,
      closeDealerDiscountEdit,
      changeDealerDiscount
    } = this.props;

    return (
      <ProductCard 
        data={item}
        showEditQuantity={false}
        showSingleAddToCartAction={true}
        onPressInfo={() => NavigationService.navigate('AddProductInfoScreen', {data: item})}
        onPressAddToCart={() => this.onPressAddToCart(item)}
        isAddedInCart={this.isAddedInCart(item)}
        disableAddCart={this.isAddedInCart(item)}
      />
    );
  }



  getDataNode() {
    const {
      enquiry,
      loader,
      data
    } = this.props;
    let visibleNode = [];

    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <FlatList
            data={data}
            renderItem={({ item }) => this.getProductCard(item)}
            keyExtractor={item => item.id}
            onRefresh={() => this.fetchCall()}
            refreshing={loader}
          />
        );
      } else {
        visibleNode =  (
          <NoDataFound text={'No Products Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={{color: Colors.button, fontSize: 35, alignSelf: 'center', padding: 10}}
            />
          </NoDataFound>
        );
      }
    } else if (loader) {
      visibleNode = <Loading />
    } else if (data && !data.length && !loader) {
      visibleNode =  (
          <NoDataFound text={'No Products Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={ApplicationStyles.refreshIcon}
            />
          </NoDataFound>
        );
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
          <BlueButton title={"   Cart "} onPress={() => NavigationService.navigate('OrderCartScreen')}>
            <GenericIcon 
              name={'cart-plus'}
              style={{color: Colors.white, fontSize: wp('6%')}}
            />
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
  state_id : state.user.state_c,
  data     : state.products.productsData,
  cart     : state.products.cart,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params)                 => dispatch(ProductsActions.getAllProducts(params)),
  addItemToCart:(params)             => dispatch(ProductsActions.addItemToCart(params)),
  removeItemFromCart:(params)        => dispatch(ProductsActions.removeItemFromCart(params)),
  editCart:(params)                  => dispatch(ProductsActions.editCart(params)),
  editCartSuccess:(params)           => dispatch(ProductsActions.editCartSuccess(params)),
  openDealerDiscountEdit:(params)    => dispatch(ProductsActions.openDealerDiscountEdit(params)),
  closeDealerDiscountEdit:(params)   => dispatch(ProductsActions.closeDealerDiscountEdit(params)),
  changeDealerDiscount:(params)      => dispatch(ProductsActions.changeDealerDiscount(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductScreen)



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
  }
});



