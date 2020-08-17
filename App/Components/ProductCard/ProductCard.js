import React from 'react'
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



const ProductCard = ({data, onPressInfo, onPress,quantityInCart, onChangeQuantity, showEditQuantity=true, showSingleAddToCartAction=false, onPressAddToCart, isAddedInCart, disableAddCart, hideInfoAction=false, showRemoveAction=false, onPressRemoveAction}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={Style.box}>
        <View style={Style.tuple}>
          <View style={{flexDirection: 'row'}}>
             <Image
                style={{ width: 110, height: 120 }}
                source={require('App/Assets/Images/product.png')}
            />
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
)

export default ProductCard
