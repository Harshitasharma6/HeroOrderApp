import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from 'App/Components/Loading'
import {Content } from 'native-base';
import { View } from 'react-native';
import { HelperService } from 'App/Services/Utils/HelperService';

class SplashScreen extends Component {
  	render() {
	    return (
	    	<View style={{justifyContent: 'center', alignItems: 'center', paddingTop: HelperService.hasNotch() ? 30 : 0}}>
	    		<Loading />
	    	</View>
	    );
	}
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  id: state.user.id
});


export default connect(
  mapStateToProps
)(SplashScreen)