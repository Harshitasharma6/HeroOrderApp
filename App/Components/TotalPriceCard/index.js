import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native'
import Style from './styles'
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


const TotalPriceCard = ({totalAmount, onPress}) => (
	<View style={Style.box}>
    	<View>
        	<Text style={Style.heading}>{HelperService.currencyValue(HelperService.numberWithCommas(totalAmount))}</Text>
        </View>
        <BlueButton 
        	title={'Checkout'} 
        	textStyle={Style.textStyle} 
        	style={Style.buttonStyle}
        	onPress={onPress}
        />
    </View>   
)

export default TotalPriceCard
