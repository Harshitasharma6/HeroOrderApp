// import React, { Component } from 'react'
// import { View, Text, Image, Keyboard, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
// import { Item, Input, Button, Spinner } from 'native-base'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import BlueButton from 'App/Components/BlueButton'
// import GenericIcon from 'App/Components/GenericIcon'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import InputMobile from 'App/Components/FormInput/InputMobile'
// import InputPassword from 'App/Components/FormInput/InputPassword'
// import InputText from 'App/Components/FormInput/InputText'
// import { SEND_OTP } from 'App/Constants'
// import NavigationService from 'App/Services/NavigationService'
// import UserActions from 'App/Stores/User/Actions'
// import { Colors, ApplicationStyles } from 'App/Theme';
// import ProductCard from 'App/Components/ProductCard'

// class ProductCatalogScreen extends Component {
//     render() {
//         return (
//         	<View style={{padding: '1%', flex: 1}}>
// 	            <Text style={ApplicationStyles.formHeading}>{'Product Catalog'}</Text>
// 	            <ScrollView>
// 	            	<ProductCard 
// 						data={{}} 
// 						quantityInCart={1}
// 						showEditQuantity={false}
// 						onPress={() => NavigationService.navigate('ProductInfoScreen')}
// 						onChangeQuantity={(quantity) => {}}
// 						onPressInfo={() => NavigationService.navigate('ProductInfoScreen')}
// 					/>
// 					<ProductCard 
// 						data={{}} 
// 						quantityInCart={1}
// 						showEditQuantity={false}
// 						onChangeQuantity={(quantity) => {}}
// 						onPress={() => NavigationService.navigate('ProductInfoScreen')}
// 						onPressInfo={() => NavigationService.navigate('ProductInfoScreen')}
// 					/>
// 					<ProductCard 
// 						data={{}} 
// 						quantityInCart={1}
// 						showEditQuantity={false}
// 						onChangeQuantity={(quantity) => {}}
// 						onPress={() => NavigationService.navigate('ProductInfoScreen')}
// 						onPressInfo={() => NavigationService.navigate('ProductInfoScreen')}
// 					/><ProductCard 
// 						data={{}} 
// 						quantityInCart={1}
// 						showEditQuantity={false}
// 						onChangeQuantity={(quantity) => {}}
// 						onPress={() => NavigationService.navigate('ProductInfoScreen')}
// 						onPressInfo={() => NavigationService.navigate('ProductInfoScreen')}
// 					/>
// 					<ProductCard 
// 						data={{}} 
// 						quantityInCart={1}
// 						showEditQuantity={false}
// 						onChangeQuantity={(quantity) => {}}
// 						onPress={() => NavigationService.navigate('ProductInfoScreen')}
// 						onPressInfo={() => NavigationService.navigate('ProductInfoScreen')}
// 					/>
// 	            </ScrollView>
//             </View>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//   username: state.user.username,
//   password: state.user.password,
//   userLoginIsLoading: state.user.userLoginIsLoading,
//   validation: state.user.validation
// })

// const mapDispatchToProps = (dispatch) => ({
//   loginUser: (data) => dispatch(UserActions.loginUser(data)),
//   changeLoginForm: (data) => dispatch(UserActions.changeLoginForm(data))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductCatalogScreen)



// const Styles = StyleSheet.create({
//   box: {
//     width: wp('88%'),
//     backgroundColor: Colors.lightGrey,
//     flexDirection: 'column',
//     padding: 15,
//     paddingLeft: 15,
//     position: 'relative',
//     borderRadius: 10,
//     marginHorizontal: wp('6%'),
//     marginBottom: hp('2%')
//   },
//   btmBox: {
//     flexDirection: 'column',
//     marginBottom: hp('2%')

//   },
//   desc: {
//     color: Colors.primary,
//     fontSize: 12,
//     fontFamily: ApplicationStyles.textFont,
//   },
//   detail: {
//     // fontFamily: ApplicationStyles.textMsgFont,
//     color: Colors.primary,
//     fontWeight: '700',
//   },
//   strip: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   title: {
//     color: Colors.primary,
//     fontSize: wp('4.5%'),
//     fontFamily: ApplicationStyles.textMsgFont
//   },
//   ttl: {
//     color: Colors.grey,
//     fontFamily: ApplicationStyles.textMsgFont,
//     fontSize: wp('3%'),
//     marginTop: hp('.5%')
//   },
//   tuple: {
//     borderBottomColor: Colors.clrF1F9FF,
//     borderRadius: 1,
//     flexDirection: 'row',
//   },
//   userCircle: {
//   //   // marginTop: 80,
//   //   alignItems: 'center',
//   //   backgroundColor: Colors.lightGrey,
//   //    borderWidth: 1,
//   //    borderColor: Colors.primary,
//   //   borderRadius: 50,
//   //   flexDirection: 'row',
//   //   height: 30,
//   //   justifyContent: 'center',
//   //   width: 30,
//    },
//   userDtl: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     paddingTop: 3,
//     overflow: 'hidden',
//     width: wp('50%')
//   },
//   userIcon: {
//     height: 16,
//     width: 16,
//   }
// });




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




