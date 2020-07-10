import React, {PureComponent} from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Style from './InfuencersTupleStyle'
import { Colors } from 'App/Theme'
import GenericIcon from 'App/Components/GenericIcon';

export default class InfluencersTuple extends PureComponent {
  render() {
    const {
      onPress, 
      id, 
      data 
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={Style.box} onPress={onPress}>
          <View style={Style.tuple}>
            <View style={Style.userCircle}>
              <GenericIcon
                  name={'person'}
                  style={{ color: Colors.primary }}
              />
            </View>
            <View style={Style.userDtl}>
                <Text style={Style.title}>{data.LastName}</Text>
                <Text style={Style.desc}>{`${data.Address__c}`}</Text>
            </View>
         </View>
        <View style={Style.btmBox}>
          <View style={Style.strip}>
            <Text style={Style.ttl}>{'Phone'}</Text>
            <Text style={Style.detail}>{data.Phone || ''}</Text>
          </View>
          <View style={Style.strip}>
            <Text style={Style.ttl}>{'Type'}</Text>
            <Text style={Style.detail}>{data.Influencer_Type__c || ''}</Text>
          </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}





