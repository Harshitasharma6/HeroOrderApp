import AgentInfo from 'App/Components/AgentInfo';
import Loading from 'App/Components/Loading';
import ProfileCard from 'App/Components/ProfileCard';
import { HelperService } from 'App/Services/Utils/HelperService';
import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import Style from './ProfileStyles';
import StartDayAction from 'App/Stores/StartDay/Actions'
import { ApplicationStyles, Colors, Helpers } from 'App/Theme';
import GenericIcon from 'App/Components/GenericIcon'
import BlueButton from 'App/Components/BlueButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import UserActions from 'App/Stores/User/Actions'

class ProfileScreen extends Component {
  submit(){
    const {
      logoutUser
    } = this.props;

      logoutUser({
        user_logged_in: false,
      });
  }

  render() {
    const {
      data,
      firstName,
      LastName,
      contactNo,
      state,
      loading,
      login,
      email,
      dealer
    } = this.props

    let visibleNode = [];
      {
      visibleNode = (
        <ScrollView style={Style.box}>
          <AgentInfo heading={'Contact No.'}  value={contactNo} />
          <AgentInfo heading={'Email ID'}  value={email} />
          <AgentInfo heading={'Dealer'}  value={dealer || ''}/>
          <AgentInfo heading={'State'}  value={state} />
        </ScrollView>
      );
    }

    return (
      <View style={Style.header }>
        <View style={{ flex: 1, paddingBottom: 10 }}>
             <ProfileCard data={data} />          
          {visibleNode}
        </View>
        
       
          
        <BlueButton  title={'LOG OUT'}style={{ ...Style.button
 }} textStyle={{fontSize: wp('5%'),marginRight: wp('0%'),color: Colors.primary}}  
           onPress={() => this.submit()}
           disabled={loading}
           loading={loading}
           >
              </BlueButton>
       
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  data:           state.user.sales_person_name__c,
  finalObservationList:   state.dashboard.finalObservationList,
  firstName:              state.user.first_name__c,
  LastName:               state.user.last_name__c,
  contactNo:              state.user.mobile,
  state:                  state.user.state,
  loading:          state.user.userLogoutIsLoading,
  login:           state.user.is_logged_in,
  email:            state.user.email_id__c,
  dealer:   state.user.name 
});


const mapDispatchToProps = (dispatch) => ({
logoutUser: (data) => dispatch(UserActions.logoutUser(data)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)