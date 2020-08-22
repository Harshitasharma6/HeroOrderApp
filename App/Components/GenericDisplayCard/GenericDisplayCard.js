import React, {PureComponent} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Style from './GenericDisplayCardStyles';
import TextAvatar from 'App/Components/TextAvatar'
import { HelperService } from 'App/Services/Utils/HelperService';

export default class GenericDisplayCard extends PureComponent { 
  render() {
    const {
      content,
      heading,
      subheading,
      dark,
      style,
      onPress,
      showTextAvatar
    } = this.props;

    return(
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={dark ? { ...Style.darkCard, ...style } : { ...Style.card, ...style }}>
          {
            heading ?
              (<View style={Style.titleContainer}>
                {showTextAvatar ? <TextAvatar value={heading} /> : []}
                <Text style={dark ? Style.darkTitle : Style.title}>{heading}</Text>
              </View>) : []
          }
          {
            subheading ? <Text style={Style.desc}>{subheading}</Text> : []
          }
          <View>
            {content}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
} 

// const GenericDisplayCard = ({
//   content,
//   heading,
//   subheading,
//   dark = false,
//   style,
//   onPress
// }) => (
//     <TouchableWithoutFeedback onPress={onPress}>
//       <View style={dark ? { ...Style.darkCard, ...style } : { ...Style.card, ...style }}>
//         {
//           heading ?
//             (<View>
//               <Text style={dark ? Style.darkTitle : Style.title}>{heading}</Text>
//             </View>) : []
//         }
//         {
//           subheading ? <Text style={Style.desc}>{subheading}</Text> : []
//         }
//         <View>
//           {content}
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   )

// export default GenericDisplayCard
