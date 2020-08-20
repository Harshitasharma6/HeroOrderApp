import React from 'react'
import { View } from 'react-native'
import { Item, Textarea, Label } from 'native-base'
import Style from './TextAreaStyles'

const TextArea = ({ placeholder = '', row = 1, column = 1, onChange = () => { }, style = {}, value = '', error = false, label = '', numberOfLines, disable = false }) => (
	<View>
		{label ? <Label style={{ ...Style.label }}>{label}</Label> : []}
		<Item style={{ ...Style.item }}>
			<Textarea value={String(value || '')} placeholder={placeholder} style={error ? { ...Style.input, ...Style.inputError, ...style } : { ...Style.input, ...style }} onChangeText={(event) => onChange(event)} placeholderTextColor={Style.placeholder.color} rowSpan={numberOfLines} disabled={disable} blurOnSubmit={true}/>
		</Item>
	</View>
)

export default TextArea
