import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native'
import Style from './ProductInfoCardStyles'
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
import Price from 'App/Components/ProductCard/Price'
import AvailableStock from 'App/Components/ProductCard/AvailableStock'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import _ from 'lodash'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';




const ProductInfoCard = ({data, onPressInfo, onPress,quantityInCart, onChangeQuantity, showEditQuantity=true}) => (
	<View style={Style.box}>
		<View style={Style.imageContainer}>
			<Image
                style={Style.image}
                resizeMode={'cover'}
                source={require('App/Assets/Images/product.png')}
            />
		</View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <Text style={Style.title}>{data.product_name__c || 'Optima'}</Text>
          <Text style={Style.description}>{HelperService.currencyValue(41312)}</Text>
        </View>
        <View style={ApplicationStyles.divider}></View>
        <View>
        	<Text style={Style.heading}>{(data.product_name__c || 'Optima') + ' Key Highlights'}</Text>
        </View>
        <View>
        	<GenericDisplayCardStrip key={'Range'} label={'Range'} value={'50 Km'}/>
            <GenericDisplayCardStrip key={'Top Speed'} label={'Top Speed'} value={'25 Kmph'}/>
            <GenericDisplayCardStrip key={'Charging Time'} label={'Charging Time'} value={'8 hours'}/>
            <GenericDisplayCardStrip key={'Motor Power'} label={'Motor Power'} value={'250W'}/>
        </View>
    </View>
          
        
      

        
)

export default ProductInfoCard
