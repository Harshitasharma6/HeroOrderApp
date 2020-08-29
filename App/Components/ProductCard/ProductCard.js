import React, {PureComponent} from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback} from 'react-native'
import Style from './ProductCardStyles'
import { Icon, Input, Button } from 'native-base'
import { AREA, PREV_ORDER_VAL, VISIT_THIS_WEEK, MAIN_COMPETETOR } from 'App/Constants'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import Ratings from 'App/Components/Ratings';
import WhiteButton from 'App/Components/WhiteButton'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import EditQuantity from 'App/Components/EditQuantity'
import Price from './Price'
import AvailableStock from './AvailableStock'
import _ from 'lodash'

// export default class ProductCard extends PureComponent { 
//   render() {
//     const {
//       content,
//       heading,
//       subheading,
//       dark,
//       style,
//       onPress,
//       showTextAvatar
//     } = this.props;

//     return(
//       <TouchableWithoutFeedback onPress={onPress}>
//         <View style={dark ? { ...Style.darkCard, ...style } : { ...Style.card, ...style }}>
//           {
//             heading ?
//               (<View style={Style.titleContainer}>
//                 {showTextAvatar ? <TextAvatar value={heading} /> : []}
//                 <Text style={dark ? Style.darkTitle : Style.title}>{heading}</Text>
//               </View>) : []
//           }
//           {
//             subheading ? <Text style={Style.desc}>{subheading}</Text> : []
//           }
//           <View>
//             {content}
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     )
//   }
// } 

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

export default class ProductCard extends PureComponent { 
  render() {
    const {
      data, 
      onPressInfo, 
      onPress,
      quantityInCart, 
      onChangeQuantity, 
      showEditQuantity, 
      showSingleAddToCartAction, 
      onPressAddToCart, 
      isAddedInCart, 
      disableAddCart, 
      hideInfoAction, 
      showRemoveAction, 
      onPressRemoveAction
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
      <View style={Style.box}>
        <View style={Style.tuple}>
          <View style={{flexDirection: 'row'}}>
            { data.product_images && data.product_images.length ? 
              <Image
                style={{ width: 110, height: 120, resizeMode: 'contain', borderRadius: 3 }}
                source={{uri: data.product_images[0]['product_url__c']}}
              /> : <Image
                style={{ width: 115, height: 120, resizeMode: 'contain', borderRadius: 3 }}
                source={require('App/Assets/Images/no_image_available.png')}
              />
            }
            <View style={{paddingLeft: '4%'}}>
              <Text style={Style.title}>{data.name}</Text>
              {<Price price={data.price__c} discountPrice={data.discounted_price__c} />}
              {data.available_stock__c != null ? <AvailableStock stock={data.available_stock__c}/> : []}
            </View>
          </View>
        </View>
        {
          showRemoveAction ?
            <View style={Style.removeActionContainer}>
              <GenericIcon 
                  name="trash" 
                  style={Style.removeButtonIcon}
                  onPress={onPressRemoveAction}
                />
            </View>
           : []
        }
        
        
        <View style={Style.actionButtonContainer}>
        {
          !hideInfoAction ? 
            <WhiteButton 
              selected={false} 
              title={'Info'} 
              disabled={false}  
              style={Style.actionButton} 
              onPress={onPressInfo}
              textStyle={Style.actionButtonText}>
                <GenericIcon 
                  name="info-circle" 
                  style={Style.actionButtonIcon}
                />
            </WhiteButton> : []
        }
         
          {
            showEditQuantity ? 
            <View style={Style.quantityContainer}>
              <EditQuantity  value={quantityInCart} onChange={(value) => onChangeQuantity(value)} key={quantityInCart}/>
            </View> : []
          }
          {
            !showEditQuantity && showSingleAddToCartAction ? 
              <View style={Style.addToCartContainer} >
                <BlueButton  
                  title={isAddedInCart ? 'ADDED TO CART' : 'ADD TO CART'}
                  disabled={disableAddCart} 
                  textStyle={Style.addToCartButtonText} 
                  onPress={onPressAddToCart}
                />
              </View> : []
          }
        </View>
         
    </View>
    </TouchableWithoutFeedback>
    );
  }
}

ProductCard.defaultProps = {
  showEditQuantity: true, 
  showSingleAddToCartAction: false, 
  hideInfoAction: false, 
  showRemoveAction: false
};
// const ProductCard = ({data, onPressInfo, onPress,quantityInCart, onChangeQuantity, showEditQuantity=true, showSingleAddToCartAction=false, onPressAddToCart, isAddedInCart, disableAddCart, hideInfoAction=false, showRemoveAction=false, onPressRemoveAction}) => (
//   <TouchableWithoutFeedback onPress={onPress}>
//     <View style={Style.box}>
//         <View style={Style.tuple}>
//           <View style={{flexDirection: 'row'}}>
//             { data.product_images && data.product_images.length ? 
//               <Image
//                 style={{ width: 110, height: 120, resizeMode: 'contain', borderRadius: 3 }}
//                 source={{uri: data.product_images[0]['product_url__c']}}
//               /> : <Image
//                 style={{ width: 115, height: 120, resizeMode: 'contain', borderRadius: 3 }}
//                 source={require('App/Assets/Images/no_image_available.png')}
//               />
//             }
//             <View style={{paddingLeft: '4%'}}>
//               <Text style={Style.title}>{data.name}</Text>
//               {<Price price={data.price__c} discountPrice={data.discounted_price__c} />}
//               {data.available_stock__c != null ? <AvailableStock stock={data.available_stock__c}/> : []}
//             </View>
//           </View>
//         </View>
//         {
//           showRemoveAction ?
//             <View style={Style.removeActionContainer}>
//               <GenericIcon 
//                   name="trash" 
//                   style={Style.removeButtonIcon}
//                   onPress={onPressRemoveAction}
//                 />
//             </View>
//            : []
//         }
        
        
//         <View style={Style.actionButtonContainer}>
//         {
//           !hideInfoAction ? 
//             <WhiteButton 
//               selected={false} 
//               title={'Info'} 
//               disabled={false}  
//               style={Style.actionButton} 
//               onPress={onPressInfo}
//               textStyle={Style.actionButtonText}>
//                 <GenericIcon 
//                   name="info-circle" 
//                   style={Style.actionButtonIcon}
//                 />
//             </WhiteButton> : []
//         }
         
//           {
//             showEditQuantity ? 
//             <View style={Style.quantityContainer}>
//               <EditQuantity  value={quantityInCart} onChange={(value) => onChangeQuantity(value)} key={quantityInCart}/>
//             </View> : []
//           }
//           {
//             !showEditQuantity && showSingleAddToCartAction ? 
//               <View style={Style.addToCartContainer} >
//                 <BlueButton  
//                   title={isAddedInCart ? 'ADDED TO CART' : 'ADD TO CART'}
//                   disabled={disableAddCart} 
//                   textStyle={Style.addToCartButtonText} 
//                   onPress={onPressAddToCart}
//                 />
//               </View> : []
//           }
//         </View>
         
//     </View>
//     </TouchableWithoutFeedback>
// )

// export default ProductCard
