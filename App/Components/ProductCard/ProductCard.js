import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native'
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




const ProductCard = ({data, onPressInfo, quantityInCart, onChangeQuantity}) => (
    <View style={Style.box}>
        <View style={Style.tuple}>
          <View style={{flexDirection: 'row'}}>
             <Image
                style={{ width: 110, height: 120 }}
                source={require('App/Assets/Images/product.png')}
            />
            <View style={{paddingLeft: '4%'}}>
              <Text style={Style.title}>{data.product_name__c || 'Optima'}</Text>
              <Price price={data.basic_price__c || 1000} discountPrice={data.discounted_price__c || 900} />
              {data.available_stock__c != null ? <AvailableStock stock={data.available_stock__c}/> : []}
            </View>
          </View>
          
        </View>
        
        
        <View style={Style.actionButtonContainer}>
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
          </WhiteButton>
         
          
          <View style={Style.quantityContainer}>
            <EditQuantity  value={quantityInCart} onChange={(value) => onChangeQuantity(value)} key={quantityInCart}/>
          </View>
        </View>
         
    </View>
)

export default ProductCard
