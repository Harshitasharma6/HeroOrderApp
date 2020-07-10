import React from 'react'
import { Text, View, TouchableOpacity, Dimensions} from 'react-native'
import Style from './ProductCartCardStyles'
import { Icon, Input, Button } from 'native-base'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import Ratings from 'App/Components/Ratings';
import WhiteButton from 'App/Components/WhiteButton'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import EditQuantity from 'App/Components/EditQuantity'
import _ from 'lodash'


const ProductCartCard = ({data, onRemoveClick, onChangeQuantity, quantity}) => (
    <View style={Style.box}>
          <View style={Style.titleContainer}>
            <Text style={Style.title}>{data.product_name__c}</Text>
          </View>
       
        <View style={Style.quantityContainer}>
             <EditQuantity  value={quantity} onChange={(value) => onChangeQuantity(value)}/>
       	</View>
       	 <View style={Style.removeContainer}>
       		<WhiteButton 
	            selected={false} 
	            disabled={false}  
	            style={Style.actionButton}
	            onPress={onRemoveClick} 
	            textStyle={Style.actionButtonText}>
	              <GenericIcon 
	                name="trash" 
	                style={Style.actionButtonIcon}
	              />
          	</WhiteButton>
       	</View>
    </View>
)

export default ProductCartCard
