import React from 'react'
import { Text, View, TouchableOpacity, Dimensions} from 'react-native'
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
import _ from 'lodash'




const ProductCard = ({data, onPressInfo, quantityInCart, onChangeQuantity}) => (
    <View style={Style.box}>
        <View style={Style.tuple}>
          <View style={Style.userDtl}>
            <Text style={Style.title}>{data.product_name__c}</Text>
           <Text style={Style.desc}>{data.description__c}</Text>
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
                name="information-circle-outline" 
                style={Style.actionButtonIcon}
              />
          </WhiteButton>
         
          {
          //   <WhiteButton 
          //   selected={false} 
          //   title={'Image'} 
          //   disabled={false} 
          //   style={Style.actionButton} 
          //   textStyle={Style.actionButtonText}
          // >
          //   <GenericIcon 
          //     name="image" 
          //     style={Style.actionButtonIcon}
          //   />
          // </WhiteButton>
        }
          <View style={Style.quantityContainer}>
            <EditQuantity  value={quantityInCart} onChange={(value) => onChangeQuantity(value)} />
          </View>
        </View>
         
    </View>
)

export default ProductCard
