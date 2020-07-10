import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React, {PureComponent} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Style from './ShreeTupleStyle';



export default class ShreeTuple extends PureComponent {
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
              <Icon
                name={'ios-business'}
                ios={'ios-business'}
                android={'md-business'}
                style={ Style.userIcon}
              />
            </View>
            <View style={Style.userDtl}>
              <Text style={Style.title}>{data.Name}</Text>
              <Text style={Style.desc}>{data.Address__c}</Text>
            </View>
          </View>


          
            <View style={Style.btmBox} onPress={onPress}>
              {
                data.City__c  ? 
                  <View style={Style.strip}>
                    <Text style={Style.ttl}>{'City'}</Text>
                    <Text style={Style.detail}>{data.City__c}</Text>
                  </View> : []
              }
              {
                data.Contact_Person__c  ? 
                  <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Contact Person'}</Text>
                    <Text style={Style.detail}>{data.Contact_Person__c}</Text>
                  </View> : []
              }

              {
                data.Contact_Person_No__c  ? 
                <View style={Style.strip}>
                  <Text style={Style.ttl}>{'Phone'}</Text>
                  <Text style={Style.detail}>{data.Contact_Person_No__c}</Text>
                </View> : []
              }

            </View> 
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// const ShreeTuple = ({ onPress, id, data }) => (
//   <TouchableOpacity onPress={onPress}>
//     <View style={Style.box} onPress={onPress}>
//       <View style={Style.tuple}>
//         <View style={Style.userCircle}>
//           <Icon
//             name={'ios-business'}
//             ios={'ios-business'}
//             android={'md-business'}
//             style={ Style.userIcon}
//           />
//         </View>
//         <View style={Style.userDtl}>
//           <Text style={Style.title}>{data.Name}</Text>
//           <Text style={Style.desc}>{data.Address__c}</Text>
//         </View>
//       </View>

//       <View style={Style.btmBox} onPress={onPress}>
//         <View style={Style.strip}>
//           <Text style={Style.ttl}>{'State '}</Text>
//           <Text style={Style.detail}>{data.State__c || ''}</Text>
//         </View>
//       </View>
//     </View>
//   </TouchableOpacity>
// )

// export default ShreeTuple