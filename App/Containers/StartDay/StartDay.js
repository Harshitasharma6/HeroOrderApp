import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Alert} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from './StartDayStyle'
import BlueButton from 'App/Components/BlueButton'
import WhiteButton from 'App/Components/WhiteButton';
import LayoutScreen from 'App/Containers/Layout/LayoutScreen';
import { START, ABSENT, GOOD, MORNING, LEAVE, INOFFICE, PRESENT, ONLEAVE} from 'App/Constants';
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import StartDayAction from 'App/Stores/StartDay/Actions'
import UserActions from 'App/Stores/User/Actions'
import RemarksModal from 'App/Components/RemarksModal'
import Loading from 'App/Components/Loading'
import GenericIcon from 'App/Components/GenericIcon'


class StartDayScreen extends Component {
  async checkIn(){
    const {
      userName,
      access_token,
      checkInAction,
      userDetailList,
      fetchCheckInLoading,
      fetchCheckInLoadingStop,
      updateUserCheckInLocation
    } = this.props;

    fetchCheckInLoading();
    let location = await HelperService.requestLocation();
    fetchCheckInLoadingStop();

    if (location == 'DENIED'){
      Alert.alert("Location permission is required to proceed.", 
        "Go App Permissions and Turn on Location Permission for ShreeCementApp."
      );
      return;
    }else if (!location) {
      return;
    }

    updateUserCheckInLocation(location);

    checkInAction({
        access_token: access_token,
        user: userDetailList.Id,
        officerName: userDetailList.Name,
        dateNtime: String(HelperService.getCurrentTimestamp()),
        checkInBox: true,
        geoLatitude: String(location.latitude),
        geoLongitude: String(location.longitude),
        LoginUserId: userDetailList.Id,
        attendaceStatus: PRESENT
    });
  }

  onLeave = () => {
    const {
      userName,
      access_token,
      onLeaveAction,
      userDetailList
    } = this.props;

    onLeaveAction({
      access_token: access_token,
      user: userDetailList.Id,
      officerName: userDetailList.Name,
      dateNtime: HelperService.getCurrentTimestamp(),
      attendaceStatus: ONLEAVE,
      LoginUserId: userDetailList.Id
    });
  }

  onSubmitClick = () => {
    const { 
      remark,
      userName,
      access_token,
      inOfficeAction,
      userDetailList
    } = this.props;

    inOfficeAction({
      access_token: access_token,
      user: userDetailList.Id,
      officerName: userDetailList.Name,
      attendaceStatus: INOFFICE,
      dateNtime: HelperService.getCurrentTimestamp(),
      inOfficeRemark: remark,
      LoginUserId: userDetailList.Id
    });
  }


  render() {
    const { 
      hideRemarks,
      showRemarkModal,
      fetchCheckInLoader, 
      fetchInOfficeLoader, 
      fetchOnLeaveLoader 
    } = this.props;

    let visibleNode=[]; 
    let cuntainerNode=[];
        visibleNode = (
          <View>
            <RemarksModal
              isVisible={showRemarkModal}
              handleSubmit={this.onSubmitClick}
              handleCancel={hideRemarks}
              expenseForm={this.props.remark}
              loading={fetchInOfficeLoader}
              changeExpenseForm={this.props.changeRemarkForm}
            />
          </View>
        );

        cuntainerNode = (
            <View>
              <TouchableOpacity block rounded style={{ ...Style.button }} onPress={() => this.checkIn()}>
                  { !fetchCheckInLoader ?<View style={{flexDirection: 'row'}}><GenericIcon name="pin" style={Style.buttonIcon}/><Text style={Style.text}>{'Check In'}</Text></View>: <Loading /> }
              </TouchableOpacity>



              <TouchableOpacity block rounded style={{ ...Style.button }} onPress={() => this.onLeave()} disabled={fetchCheckInLoader}>
              { !fetchOnLeaveLoader ? <View style={{flexDirection: 'row'}}><GenericIcon name="airplane" style={Style.buttonIcon}/><Text style={Style.text}>{'On Leave'}</Text></View> : <Loading /> }
              </TouchableOpacity>



              <TouchableOpacity block rounded style={{ ...Style.button }} onPress={() => this.props.showRemarks()} disabled={fetchCheckInLoader}>
              { !fetchInOfficeLoader ? <View style={{flexDirection: 'row'}}><GenericIcon name="business" style={Style.buttonIcon}/><Text style={Style.text}>{'In Office'}</Text></View> : <Loading /> }            
              </TouchableOpacity>
              
              { visibleNode }
          </View>
      );

        return (
          <View style={Style.container}>
              
              {cuntainerNode}
              
              </View>
      );
  }
}




const mapStateToProps = (state) => ({
  showHideRemark: state.startDay.showHideRemark,
  remark: state.startDay.remark,
  startFrom: state.startDay.startFrom,
  validation: state.startDay.startFormValidation,
  globleList: state.startDay.globleList,
  fetchOnLeaveList: state.startDay.fetchOnLeaveList,
  access_token: state.startDay.access_token,
  fetchOnLeaveLoader: state.startDay.fetchOnLeaveLoader,
  fetchCheckInLoader: state.startDay.fetchCheckInLoader,
  fetchInOfficeLoader: state.startDay.fetchInOfficeLoader,
  userDetailList: state.startDay.userDetailList,
  userName: state.startDay.userName,
  startForm: state.startDay.startForm,
  nonShreeDealersList: state.startDay.nonShreeDealersList,
  shreeDealersList: state.startDay.nonShreeDealersList,
  showRemarkModal: state.startDay.showRemarkModal
});


const mapDispatchToProps = (dispatch) => ({
  checkInAction: (param)                 => dispatch(StartDayAction.checkInAction(param)),
  onLeaveAction: (param)                 => dispatch(StartDayAction.onLeaveAction(param)),
  inOfficeAction: (param)                => dispatch(StartDayAction.inOfficeAction(param)),
  changeRemarkForm: (param)              => dispatch(StartDayAction.changeRemarkForm(param)),
  fetchGlobleToken: ()                   => dispatch(StartDayAction.fetchGlobleToken()),
  clearRemarkForm: ()                    => dispatch(StartDayAction.clearRemarkForm()),
  fetchAllShreeDealersAction: (param)    => dispatch(StartDayAction.fetchAllShreeDealersAction(param)),
  fetchAllNonShreeDealersAction: (param) => dispatch(StartDayAction.fetchAllNonShreeDealersAction(param)),
  fetchGlobleUserDetail: (param)         => dispatch(StartDayAction.fetchGlobleUserDetail(param)),
  showRemarks: (param)                   => dispatch(StartDayAction.showRemarks()),
  hideRemarks: (param)                   => dispatch(StartDayAction.hideRemarks()),
  fetchCheckInLoading: (params)          => dispatch(StartDayAction.fetchCheckInLoading()),
  fetchCheckInLoadingStop: (params)      => dispatch(StartDayAction.fetchCheckInLoadingStop()),
  updateUserCheckInLocation: (params)    => dispatch(UserActions.updateUserCheckInLocation(params)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartDayScreen)
