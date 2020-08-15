import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
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
  // "id": 16,
  // "sfid": "a029D000002ZFPjQAO",
  // "name": "Optima ER",
  // "product_category__c": null,
  // "bldc_hub_motor_watt__c": null,
  // "range_in_kmph__c": null,
  // "top_speed__c": null,
  // "battery_capacity_in_v_ah__c": null,
  // "kerb_weight__c": null,
  // "ground_clearance_in_mm__c": null,
  // "charging_time__c": null,
  // "wheel_size_in_inch__c": null,
  // "color__c": null,
  // "licence_registration__c": null,
  // "battery__c": "LI",
  // "subsidy_amount__c": 17998,
  // "price__c": 71990,
  // "state": "Delhi"

  getProductCard(item) {
    return (
      <ProductCard 
        data={item} 
        quantityInCart={0}
        onChangeQuantity={(quantity) => {}}
        onPressInfo={() => NavigationService.navigate('AddProductInfoScreen', {data: item})}
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
    return (
      <View style={{ flex: 1, paddingTop: 15, paddingHorizontal: 15}}>
         <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: hp('1.5%')}}>
             <BlueButton title={"   Cart "}>
            <GenericIcon name={'cart-plus'} style={{color: Colors.white, fontSize: wp('6%')}}/>
          </BlueButton>
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
  data     : state.products.productsData
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params) => dispatch(ProductsActions.getAllProducts(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductScreen)



