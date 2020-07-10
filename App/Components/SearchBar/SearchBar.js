import React, { Component } from "react";
import { Item, Input, Icon} from 'native-base'
import { Keyboard } from "react-native";
import Style from './SearchBarStyles'
import GenericIcon from 'App/Components/GenericIcon'

export default class SearchBar extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      focus: false
	    };
	}



  	handleClearInput() {
	  	// this.setState({
	  	// 	value: ''
	  	// });

	  	this.props.onInputClear('');
  	}

  	handleInputChange(value) {
	  	// this.setState({
	  	// 	value: value
	  	// });

	  	this.props.onInputChange(value);

  	}

  	handleInputSubmit(value) {
	  	this.setState({
	  		focus: false
	  	});

	  	this.props.onInputSubmit(value);
  	}

  	handleOnFocus() {
  		this.setState({
	  		focus: true
	  	});
  	}

  	handleBackClick() {
  		this.setState({
	  		focus: false,
	  	});
	  	this.props.onInputClear('');
  		Keyboard.dismiss();
  	}


  	render() {
  		return (
  			<Item style={{...Style.item, ...this.props.ContainerStyles}}>
  				{
  					this.state.focus ? 	
					    (<GenericIcon
						    name={'arrow-back'}
						    style={{...Style.placeHolderIcon, ...this.props.IconStyles}}
						    onPress={() => this.handleBackClick()}
					    />) :
					    (<GenericIcon
						    name={'search'}
						    style={{...Style.placeHolderIcon, ...this.props.IconStyles}}
					    />) 
				}
			  	<Input
				    onChangeText={(keyword) => {
				      this.handleInputChange(keyword)
				    }}
				    onSubmitEditing={({nativeEvent}) => this.handleInputSubmit(nativeEvent.text)}
				    placeholder={this.props.placeholder || "Search"}
				    value={this.props.value}
				    autoCorrect={false}
				    autoFocus={false}
				    onFocus={() => this.handleOnFocus()}
				    maxLength={140}
				    style={{...Style.input, ...this.props.inputStyles}}
				    placeholderTextColor={Style.placeholderStyle.color}
				    returnKeyType={'search'}
			  	/>
			  	{
  					(this.state.focus && this.props.value)? 	
					    (<GenericIcon
						    name={'close'}
						    style={{...Style.placeHolderIcon, ...this.props.IconStyles}}
						    onPress={() => this.handleClearInput()}
					    />) :
					    []
				}
			</Item>
  		);
  	}
}
