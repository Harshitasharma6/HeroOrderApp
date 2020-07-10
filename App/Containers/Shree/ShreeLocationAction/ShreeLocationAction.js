import React, { Component } from 'react'
import { View, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Text } from 'native-base';
import { connect } from 'react-redux'
import BlueButton from 'App/Components/BlueButton'
import { HelperService } from 'App/Services/Utils/HelperService';
import Style from './Style';
import ShreeAction from 'App/Stores/Shree/Actions';
import CommonActions from 'App/Stores/Common/Actions'

class ShreeLocationAction extends React.Component {
	componentWillUnmount() {
		this.props.updateShreeLocationAction({isAtLocation: false})
	}

  	render() {
	  	const {
	  		onPress,
	  		closeModal,
	  		isAtLocation,
	  		updateLocationLoader,
	  		updateShreeLocationAction
	  	} = this.props;


  	if (isAtLocation) {
	    return (
	    	<View style={Style.container}>
	    		<Text style={Style.heading}>{'Update Dealer location'}</Text>
	    		<BlueButton 
	    			title={'Update Location'}
	    			onPress={onPress}
	    			loading={updateLocationLoader}
	    			style={Style.buttonStyle}
	    			textStyle={Style.buttonTextStyle}
	    		/>
	    	</View>
	    );
	}else {
		return (
	    	<View style={Style.container}>
	    		<Text style={Style.heading}>{'Are You at Dealer location?'}</Text>
	    		<View style={{flexDirection:'row', justifyContent: 'space-around', width: '50%', alignItems: 'center'}}>
		    		<BlueButton 
		    			title={'Yes'}
		    			onPress={() => updateShreeLocationAction({isAtLocation: true})}
		    			loading={updateLocationLoader}
		    		/>
		    		<BlueButton 
		    			title={'No'}
		    			onPress={() => {updateShreeLocationAction({isAtLocation: false}); closeModal()}}
		    			loading={updateLocationLoader}
		    		/>
	    		</View>
	    	</View>
	    )
	}
  }
}




const mapStateToProps = (state) => ({
  updateLocationLoader: state.shree.updateLocationLoader,
  isAtLocation: state.shree.shreeLocationAction.isAtLocation
});

const mapDispatchToProps = (dispatch) => ({
  openModal:(params)      			 => dispatch(CommonActions.openModal(params)),
  closeModal:()      	  			 => dispatch(CommonActions.closeModal()), 
  updateShreeLocationAction: (params)=> dispatch(ShreeAction.updateShreeLocationAction(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShreeLocationAction)
