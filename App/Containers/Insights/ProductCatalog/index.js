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

class ProductCatalogScreen extends Component {
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
  //          "id": 23,
  //          "sfid": "a029D000002ZYRrQAO",
  //          "name": "Optima E2",
  //          "product_category__c": null,
  //          "bldc_hub_motor_watt__c": null,
  //          "range_in_kmph__c": null,
  //          "top_speed__c": null,
  //          "battery_capacity_in_v_ah__c": null,
  //          "kerb_weight__c": null,
  //          "ground_clearance_in_mm__c": null,
  //          "charging_time__c": null,
  //          "wheel_size_in_inch__c": null,
  //          "color__c": null,
  //          "licence_registration__c": null,
  //          "battery__c": "Li",
  //          "subsidy_amount__c": null,
  //          "price__c": 61990,
  //          "state": "Tamil Nadu",
  //          "product_images": [
  //              {
  //                  "product_url__c": "https://heroelectric.in/wp-content/uploads/2018/10/Optima-hs500_blue_3-4-right-view-1.png"
  //              },
  //              {
  //                  "product_url__c": "https://heroelectric.in/wp-content/uploads/2018/10/100x.png"
  //              }
  //          ]
  //      }


  getProductCard(item) {
    return (
      <ProductCard 
        data={item} 
        quantityInCart={0}
        showEditQuantity={false}
        onChangeQuantity={(quantity) => {}}
        onPressInfo={() => NavigationService.navigate('ProductInfoScreen', {data: item})}
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
         <Text style={ApplicationStyles.formHeading}>{'Product Catalog'}</Text>
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
)(ProductCatalogScreen)




