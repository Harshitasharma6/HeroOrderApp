import React, { Component } from 'react'
import { View, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Text } from 'native-base';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import WhiteButton from 'App/Components/WhiteButton';
import { START, ABSENT, GOOD, MORNING } from 'App/Constants';
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import UserActions from 'App/Stores/User/Actions'
import SingleInfo from 'App/Components/SingleInfo';
import Separator from 'App/Components/Separator';
import DashboardHeading from 'App/Components/DashboardHeading';
import CircularProgressBar from 'App/Components/CircularProgressBar';
import GroupedLineChart from 'App/Components/GroupedLineChart';
import { Colors, ApplicationStyles, Fonts, Metrics } from 'App/Theme'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import Style from './Style';



class ShreeCountersVisitsList extends React.Component {
  componentDidMount() {
   
  }

  render() {
    return (
    	<View style={Style.container}>
    		<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
          		<Text style={{fontSize:18, justifyContent:'center', alignItems:'center'}}>{'Site Visits'}</Text>
      		</View>
      		<TouchableOpacity
          		style={Style.plusIcon}
          		onPress={() => NavigationService.navigate('ShreeCounterVisitForm')}>
	         <GenericIcon
	            name={'add'}
	            style={{ color: Colors.white, fontSize: 45, alignSelf: 'center' }}
	          />
        </TouchableOpacity>
    	</View>
    )
  }
}


export default ShreeCountersVisitsList;
