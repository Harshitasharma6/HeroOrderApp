import AgentInfo from 'App/Components/AgentInfo';
import Loading from 'App/Components/Loading';
import ProfileCard from 'App/Components/ProfileCard';
import { HelperService } from 'App/Services/Utils/HelperService';
import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import Style from './ProfileStyles';
import StartDayAction from 'App/Stores/StartDay/Actions'
import GenericIcon from 'App/Components/GenericIcon'
import BlueButton from 'App/Components/BlueButton'

class ProfileScreen extends Component {
  async submit(){
    const {
      checkOutAction,
      feedBackForm,
      checkIn_id,
      access_token,
      finalObservationList
    } = this.props;


    if (!finalObservationList.length) {
      HelperService.showToast({
        message: 'Please fill Final Observations before CheckOut',
        duration: 3000
      });
      return;
    }


    let location = await HelperService.requestLocation();
    if (location == 'DENIED'){
      Alert.alert("Location permission is required to proceed.", 
        "Go App Permissions and Turn on Location Permission for ShreeCementApp."
      );
      return;
    }else if (!location) {
      return;
    }


    checkOutAction({
			...feedBackForm, 
        ...{
          access_token: access_token,
          recordId: checkIn_id,
          dateNtime: String(HelperService.getCurrentTimestamp()),
          checkoutBox: true,
          geoLatitude: String(location.latitude),
          geoLongitude: String(location.longitude)
  			}
      });
    }
    

  render() {
    const {
      data,
      status,
      checkIn_id,
      checkout,
      fetchCheckOutLoader
    } = this.props

    let visibleNode = [];
    if (!data) {
      visibleNode = <Loading />
    } else {
      visibleNode = (
        <ScrollView style={Style.box}>
          <AgentInfo heading={'Contact No.'}  value={'8839592379'} />
          <AgentInfo heading={'Employee ID'}  value={'100'} />
          <AgentInfo heading={'Username'}  value={'Lav Agrawal'}/>
          <AgentInfo heading={'State'}  value={'U.P'} />
        </ScrollView>
      );
    }

    return (
      <View style={Style.header }>
        <View style={{ flex: 1, paddingBottom: 10 }}>
            <ProfileCard data={data} /> 
            {visibleNode}
        </View>
        
       
          <BlueButton
             style={{ ...Style.button }}
             loading={fetchCheckOutLoader}
             onPress={() => this.submit()}
             title={'CheckOut'}
             disabled ={fetchCheckOutLoader} 
          >
          </BlueButton> 
       
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  fetchCheckOutList:      state.startDay.fetchCheckOutList,
  fetchCheckOutLoader:    state.startDay.fetchCheckOutLoader,
  access_token:           state.startDay.access_token,
  checkIn_id:             state.user.checkIn_id,
  status:                 state.user.status,
  checkout:               state.user.checkout,
  data:                   state.startDay.userDetailList,
  finalObservationList:   state.dashboard.finalObservationList


});


const mapDispatchToProps = (dispatch) => ({
  checkOutAction: (param) => dispatch(StartDayAction.checkOutAction(param))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)