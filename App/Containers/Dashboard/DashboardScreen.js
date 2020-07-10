import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Style from './DashboardScreenStyle'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import NavigationService from 'App/Services/NavigationService';



class DashboardScreen extends Component {
  componentDidMount() {
    NavigationService.navigate('CommunicationScreen');
  }


  render() {
    return (

      <View style={Style.container}>

			</View> 
    )
  }
}

const mapStateToProps = (state) => ({
  token:            state.user.token,
  agentid:          state.user.id,
  loaders:          state.dashboard.loaders,
  feedBackForm:     state.dashboard.feedBackForm,
  access_token:     state.startDay.access_token,
  validation:       state.dashboard.feedBackFormValidation,
  changeFeedBackForm: state.dashboard.changeFeedBackForm,
  feedBackLoader:   state.dashboard.feedBackLoader,
  
});

const mapDispatchToProps = (dispatch) => ({
  feedBackAction: (params) =>     dispatch(DashboardActions.feedBackAction(params)),
  changeFeedBackForm: (params) => dispatch(DashboardActions.changeFeedBackForm(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen)