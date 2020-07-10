import React, {PureComponent} from 'react'
import { View } from 'react-native'
import { Item, Input, InputGroup, Icon, Label} from 'native-base'
import Style from './InputStyles'

export default class InputMobile extends PureComponent { 
	constructor(props) {
		super(props);
	}

    static defaultProps = {
        placeholder:'', 
        onChange:( () => { }), 
        styles:{}, 
        value:'', 
        error:false, 
        label:'', 
        editable:true, 
        disabled: false
    }

	render() {
		const {
			placeholder, 
			onChange, 
			styles, 
			value, 
			error, 
			label, 
			editable, 
			disabled
		} = this.props;

    	return (
    		<View>
				{label ? <Label style={{ ...Style.label }}>{label}</Label> : []}
				<Item style={{ ...Style.item }}>
					<Input 
						value={String(value || '')} 
						placeholder={placeholder} 
						style={error ? { ...Style.input, ...Style.inputError, ...styles } : { ...Style.input, ...styles }}
						onChangeText={(event) => onChange(event)}
						keyboardType={'phone-pad'} 
						placeholderTextColor={Style.placeholder.color}
						editable={editable}
						disabled={disabled}
  					/>
				</Item>
			</View>
    	);
  	}
}



// const InputMobile =  ({ placeholder = '', onChange = ()=>{}, styles={}, value='' ,error=false, label=''}) => (
// 	<View>
// 		{label ? <Label style={{...Style.label}}>{label}</Label> : []}
// 	 	<Item style={{...Style.item}}>
// 		        <Input value={String(value || '')} placeholder={placeholder} style={error ? {...Style.input, ...Style.inputError ,...styles} : {...Style.input, ...styles}} onChangeText={(event) => onChange(event)} keyboardType={'phone-pad'} placeholderTextColor={Style.placeholder.color} />
// 	    </Item>
//     </View>
// )

// export default InputMobile




