import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image} from 'react-native'
import Style from './ProductInfoCardStyles'
import { Input, Button } from 'native-base'
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
import ImageSlider from 'App/Components/ImageSlider'


const ProductInfoCard = ({data}) => (
	<View style={Style.box}>
		<View style={Style.imageContainer}>
			<ImageSlider 
                images={[
                    "https://heroelectric.in/wp-content/uploads/2018/10/Optima-hs500_blue_3-4-right-view-1.png",
                    "https://heroelectric.in/wp-content/uploads/2018/10/100x.png"
                ]}
            />
		</View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <Text style={Style.title}>{data.name}</Text>
          <Text style={Style.description}>{HelperService.currencyValue(data.price__c)}</Text>
        </View>
        <View style={ApplicationStyles.divider}></View>
        <View>
        	<Text style={Style.heading}>{(data.name) + ' Key Highlights'}</Text>
        </View>
        <View>
        	<GenericDisplayCardStrip key={'Range'} label={'Range'} value={(data.range_in_kmph__c || '') + ' Km'}/>
            <GenericDisplayCardStrip key={'Top Speed'} label={'Top Speed'} value={(data.top_speed__c || '') + ' Kmph'}/>
            <GenericDisplayCardStrip key={'Charging Time'} label={'Charging Time'} value={(data.charging_time__c || '')
                + ' Hours'}/>
            <GenericDisplayCardStrip key={'Motor Power'} label={'Motor Power'} value={(data.bldc_hub_motor_watt__c || '') + ' W'}/>
        </View>
    </View>   
)

export default ProductInfoCard
