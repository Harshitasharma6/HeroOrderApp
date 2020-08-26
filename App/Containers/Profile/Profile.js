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

      logoutUser()
  }

  render() {
    const {
      data,
      firstName,
      LastName,
      contactNo,
      state,
      loading,
      login
    } = this.props

    let visibleNode = [];
      {
      visibleNode = (
        <ScrollView style={Style.box}>
          <AgentInfo heading={'Contact No.'}  value={contactNo} />
          <AgentInfo heading={'Employee ID'}  value={''} />
          <AgentInfo heading={'Username'}  value={ login ?firstName+  "  "  +LastName :null}/>
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
 }} textStyle={{fontSize: wp('5%'),marginRight: wp('7%'),color: Colors.primary}}  
           onPress={() => this.submit()}
           disabled={loading}
           loading={loading}
           
           >
              <Icon name="logout" style={{fontSize: wp('6%'), color: Colors.primary}}/></BlueButton>
       
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  data:                   state.user.name,
  finalObservationList:   state.dashboard.finalObservationList,
  firstName:              state.user.first_name__c,
  LastName:               state.user.last_name__c,
  contactNo:              state.user.mobile,
  state:                  state.user.state,
  loading:          state.user.userLoginIsLoading,
  login:           state.user.is_logged_in,
});


const mapDispatchToProps = (dispatch) => ({
logoutUser: () => dispatch(UserActions.logoutUser()),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)