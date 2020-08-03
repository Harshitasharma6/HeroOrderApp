import React from 'react'
import { View, Text } from 'react-native'
import styles from './TextAvatarStyles'
import PropTypes from 'prop-types'
import { HelperService } from 'App/Services/Utils/HelperService';

class TextAvatar extends React.PureComponent {
  render() {
    let data = HelperService.getAvatarTextAndBgColorForVisitType(this.props.value)
    return (
      <View style={{...styles.container, backgroundColor: data.bgColor}}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    )
  }
}


export default TextAvatar
