import React, { Component } from 'react'
import { View, TouchableOpacity, Text} from 'react-native'
import Style from './Style'

import NavigationService from 'App/Services/NavigationService'

export default class CounterSelectionScreen extends Component {
  	render() {
	    return (
	      	<View style={Style.container}>
	          	<View>
	              	<TouchableOpacity block rounded style={{ ...Style.button }} onPress={() => NavigationService.navigate('ShreeListsScreens')}>
	                  	<View style={{flexDirection: 'row'}}>
	                  		<Text style={Style.text}>{'Shree dealer'}</Text>
	                  	</View>
	              	</TouchableOpacity>

	              	<TouchableOpacity block rounded style={{ ...Style.button }} onPress={() => NavigationService.navigate('ShreeRetailersListScreen')}>
		              	<View style={{flexDirection: 'row'}}>
		              		<Text style={Style.text}>{'Shree retailer'}</Text>
		              	</View>
	              	</TouchableOpacity>

	              	<TouchableOpacity block rounded style={{ ...Style.button }} onPress={() => NavigationService.navigate('NonShreeListsScreens')}>
	              		<View style={{flexDirection: 'row'}}>
	              			<Text style={Style.text}>{'Non shree dealer/retailer'}</Text>
	              		</View>
	              </TouchableOpacity>
	      		</View>
	        </View>
	  	);
  	}
}
