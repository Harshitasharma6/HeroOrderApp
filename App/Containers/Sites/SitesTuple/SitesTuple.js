import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React, {PureComponent} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Style from './SitesTupleStyle';
import GenericIcon from 'App/Components/GenericIcon';



export default class SitesTuple extends PureComponent {
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
                name={'business'}
                style={{ color: Colors.primary }}
              />
            </View>
            <View style={Style.userDtl}>
              <Text style={Style.title}>{data.Name}</Text>
              <Text style={Style.desc}>{data.Address__c}</Text>
            </View>
          </View>

          <View style={Style.btmBox}>
            <View style={Style.strip}>
              <Text style={Style.ttl}>{'State'}</Text>
              <Text style={Style.detail}>{data.Site_State__c || ''}</Text>
            </View>
            <View style={Style.strip}>
              <Text style={Style.ttl}>{'Project'}</Text>
              <Text style={Style.detail}>{data.Site_Type__c || ''}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  } 
}
