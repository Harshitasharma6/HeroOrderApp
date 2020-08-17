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
import InputNumber from 'App/Components/FormInput/InputNumber'
// openDealerDiscountEdit={() => openDealerDiscountEdit()}
//   		  			closeDealerDiscountEdit={() => openDealerDiscountEdit()}
//   		  			changeDealerDiscount={(value) => changeDealerDiscount(value)}
//   		  			editDiscountEdit={editDiscountEdit}

const PriceDetailsCard = ({basicPrice, taxes, offerAmount, subsidy, totalAmount, dealerDiscount, openDealerDiscountEdit, closeDealerDiscountEdit, changeDealerDiscount, editDealerDiscount}) => (
	<View style={Style.box}>
    	<View>
        	<Text style={Style.heading}>{'PRICE DETAILS'}</Text>
        </View>
        <View style={ApplicationStyles.divider}></View>
        <View>
        	<GenericDisplayCardStrip 
        		label={'Basic Price'} 
        		value={HelperService.currencyValue(HelperService.numberWithCommas(basicPrice))}
        		labelStyle={Style.labelStyle}
  				valueStyle={Style.valueStyle}
        	/>
        	<GenericDisplayCardStrip 
        		label={'Taxes'} 
        		value={HelperService.currencyValue(HelperService.numberWithCommas(taxes))}
        		labelStyle={Style.blueLabelStyle}
  				valueStyle={Style.valueStyle}
        	/>

        	<GenericDisplayCardStrip 
        		label={'Offers Applied (-)'} 
        		value={HelperService.currencyValue(HelperService.numberWithCommas(offerAmount))}
        		labelStyle={Style.blueLabelStyle}
  				valueStyle={Style.valueStyle}
        	/>

        	<View style={Style.strip}>
		      	<View style={{flexDirection: 'row'}}>
			      		<Text 
			      			style={{...Style.ttl, ...Style.labelStyle}}>{'Dealer Discount'}
			      		</Text> 
			      		<TouchableOpacity 
			      			onPress={() => {editDealerDiscount ? closeDealerDiscountEdit() : openDealerDiscountEdit()}}>
			      			<GenericIcon 
			      				name={editDealerDiscount ? 'save' : 'pencil'} 
			      				style={Style.editIcon}
			      			/>
			      		</TouchableOpacity>
			      	</View>
			      	{
			      		editDealerDiscount ?
				            <View style={Style.editInputFieldContainer}>
				              <View style={Style.editInputFieldChildContainer}>
				              	<InputNumber
			                 		styles={Style.editInputField} 
			                 		value={dealerDiscount} 
			                 		onChange={(value) => changeDealerDiscount(value)}
				            	/>
				            	</View>
			      			</View>:
		      				<Text style={{...Style.detail, ...Style.valueStyle}}>{HelperService.currencyValue(HelperService.numberWithCommas(dealerDiscount))}</Text>
		      		}
    		</View>
    		{
      //   	<GenericDisplayCardStrip 
      //   		key={'Dealer Discount'} 
      //   		label={<Text>Dealer Discount  <GenericIcon name={editDiscountEdit ? 'save' : 'pencil'} style={Style.editIcon} onPress={() => {editDiscountEdit ? closeDealerDiscountEdit() : openDealerDiscountEdit()}} /> </Text>} 
      //   		value={HelperService.currencyValue(HelperService.numberWithCommas(dealerDiscount))}
      //   		labelStyle={Style.labelStyle}
  				// valueStyle={Style.valueStyle}
      //   	/>

      // <InputNumber
      //            styles={Style.editInputField} 
      //            value={selectShree.Potential__c} 
      //            onChange={(value) => changePotentialField({value: value})}
      //            editable={updatePotentialLoader ? false : true}
      //       />
        }

        	<GenericDisplayCardStrip 
        		label={'Frame || Subsidy'} 
        		value={HelperService.currencyValue(HelperService.numberWithCommas(subsidy))}
        		labelStyle={Style.labelStyle}
  				valueStyle={Style.valueStyle}
        	/>

        	<GenericDisplayCardStrip 
        		label={'Total Amount'} 
        		value={HelperService.currencyValue(HelperService.numberWithCommas(totalAmount))}
        		labelStyle={Style.blackLabelStyle}
  				valueStyle={Style.blackValueStyle}
        	/>
        </View>
    </View>   
)

export default PriceDetailsCard
