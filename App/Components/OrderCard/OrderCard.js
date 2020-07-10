import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { HelperService } from 'App/Services/Utils/HelperService';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ORDER_DATE, ORDER_NUM, ORDER_VALUE } from '../../Constants';
import Style from './OrderCardStyles';

const OrderCard = ({
  orderDate,
  orderValue,
  orderNumber,
  customerName,
  dark = false,
  onPress
}) => (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={dark ? Style.darkCard : Style.card}>
        {
          dark && customerName ?
            (<View>
              <Text style={dark ? Style.darkTitle : Style.title}>{customerName}</Text>
            </View>) : []
        }
        <View>
          {orderDate ? <GenericDisplayCardStrip label={ORDER_DATE} value={HelperService.dateReadableFormat(orderDate)} dark={dark} /> : []}

          {orderValue ? <GenericDisplayCardStrip label={ORDER_VALUE} value={HelperService.currencyValue(orderValue)} dark={dark} /> : []}
          {orderNumber ? <GenericDisplayCardStrip label={ORDER_NUM} value={orderNumber} dark={dark} /> : []}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )

export default OrderCard
