import React from 'react'
import { View } from 'react-native'
import { Picker, Label } from 'native-base'
import Style from './SelectStyle'
import GenericIcon from 'App/Components/GenericIcon'
import { Colors, ApplicationStyles } from 'App/Theme'

const Select = ({ selected = '', list = [], onChange = () => { }, style = {}, label = '', editable = true, placeholder = "" }) => (
  <View>
    {label ? <Label style={{ ...Style.labelStyle }}>{label}</Label> : []}
    <View style={{ ...Style.select, ...style }}>
      <Picker 
        note 
        mode={'dropdown'}
        
        selectedValue={selected} 
        onValueChange={onChange} 
        iosIcon={<GenericIcon name="arrow-down" />}
        placeholder={placeholder}
        placeholderStyle={{ color: Colors.grey, fontFamily: ApplicationStyles.textMsgFont}}
        placeholderIconColor={Colors.grey}
        enabled={editable}>
          {list.map(({ label, value }) => (
            <Picker.Item label={label} key={value} value={value}/>
          ))}
      </Picker>
    </View>
  </View>
)

export default Select
