import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab, Text } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import GenericIcon from 'App/Components/GenericIcon';
import BlueButton from 'App/Components/BlueButton';
import Style from './Style'
export default class FABExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
  	let optionsNode = [];

  	if (this.state.active) {
  		optionsNode = (
			<View style={{left: '20%', bottom: '14%', position: 'relative'}}>
		        <BlueButton
	           		style={Style.button} 
	           		textStyle={Style.buttonText} 
	            	title={'Shree Retailer'} 
	            	onPress={() => {this.setState({ active: !this.state.active }); NavigationService.navigate('AddShreeRetailerForm');}}
	           	/>
	            <BlueButton 
	            	style={Style.button} 
	           		textStyle={Style.buttonText} 
	            	title={'Non Shree Dealer/Retailer'} 
	            	onPress={() => {this.setState({ active: !this.state.active }); NavigationService.navigate('AddNonShreeForm');}}
	           	/>
	            <BlueButton
	             	style={Style.button} 
	           		textStyle={Style.buttonText}  
	            	title={'Influencer'} 
	            	onPress={() => {this.setState({ active: !this.state.active }); NavigationService.navigate('NewInfluencers');}}
	           	/>
	  		</View>
	  	);
  	}	
    return (  
      <View style={{flex: 1, position: 'absolute', right: '0%', bottom: '2%'}}>
          <Fab
            active={this.state.active}
            direction="up"
            style={{ backgroundColor: Colors.primary, zIndex: 10 }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            {this.state.active ? (<GenericIcon name="remove" />) : (<GenericIcon name="person-add"/>)}
          </Fab>
          {optionsNode}
      </View>
    );
  }
}