import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Name from 'App/Components/Name'
import Address from 'App/Components/Address'
import Style from './RetailerCardStyles'
import { Colors, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'

const RetailerCard = ({data, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={Style.darkCard}>
      <View>
        <Name style={{ color: Colors.white }} value={data.name} />
        <Address style={{ color: Colors.white }} value={`${data.billingstreet || ''}, ${data.billingcity || ''} ${data.billingpostalcode || ''}`} />
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default RetailerCard
