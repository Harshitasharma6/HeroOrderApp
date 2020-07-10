import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Picker, Card } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WhiteButton from '../../Components/WhiteButton';
import SearchableDropdown from '../../Components/SearchableDropdown';
import Style from './PresentScreenStyle';
import BlueButton from '../../Components/BlueButton'
import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from '../../Constants'
import { smallBottomMargin } from '../../Theme/Metrics';
import NavigationService from 'App/Services/NavigationService'
import LayoutScreen from '../Layout/LayoutScreen';
import { HelperService } from 'App/Services/Utils/HelperService';
import UserActions from 'App/Stores/User/Actions'

class PresentScreen extends Component {
  async submit() {
    if (!this.props.area) {
      this.props.userStartDayValidationFailed({
        invalid_area: true,
        error_message: 'Area not selected.'
      });

      HelperService.showToast({
        message: 'Area not selected.',
        duration: 2000,
        buttonText: 'Okay'
      });

      return;
    }


    this.props.userStartDayLoading();

    let location = await HelperService.requestLocation();

    if (location == 'DENIED') {
      Alert.alert(
        "Location permission is required to proceed.",
        "Go App Permissions and Turn on Location Permission for CSReactNative."
      );
      this.props.userStartDayLoadingStop();
      return;
    } else if (!location) {
      this.props.userStartDayLoadingStop();
      return;
    }

    this.props.updateUserLocation(location);

    this.props.startUserDay({
      area: this.props.area,
      date: HelperService.getCurrentTimestamp(),
      latitude: location.latitude,
      longitude: location.longitude,
      token: this.props.token,
      agentid: this.props.agentid
    });
  }

  componentDidMount() {
    this.props.fetchAllAreas({
      token: this.props.token,
      agentid: this.props.agentid
    });
    console.log(this.props.agentAreas, "AGENT AREAS");
  }


  render() {
    const { area } = this.props
    return (
      <View style={Style.container}>
        <Card style={Style.card}>
          <View style={Style.buttonBox}>
            <Text style={{ ...Style.title, textAlign: 'center' }}>
              You will be marked Present for today
                </Text>
            <View style={Style.area}>
              <SearchableDropdown dataSource={this.props.agentAreas} placeHolderText={'Select Area'} selectedValue={area} onChange={(areaCode) => this.props.updateUserArea(areaCode)} placeholder={'Type or Select Area'} invalid={this.props.validation.invalid_area} />
            </View>
          </View>
          <View style={Style.action}>
            <WhiteButton style={Style.button} rounded title={CANCEL} onPress={() => { NavigationService.goback() }} disabled={!!this.props.userStartDayLoader} />
            <BlueButton loading={!!this.props.userStartDayLoader} style={Style.button} disabled={!!this.props.userStartDayLoader} rounded large title={SUBMIT} onPress={() => this.submit()} />
          </View>
        </Card>
      </View>
    )
  }
}

PresentScreen.propTypes = {
  area: PropTypes.string,
  validation: PropTypes.object,
  userStartDayLoader: PropTypes.bool,
  agentAreas: PropTypes.array,
  token: PropTypes.string,
  agentid: PropTypes.string
}

const mapStateToProps = (state) => ({
  area: state.user.area,
  agentAreas: state.user.agentAreas,
  validation: state.user.validation,
  userStartDayLoader: state.user.userStartDayLoading,
  token: state.user.token,
  agentid: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
  startUserDay: (params) => dispatch(UserActions.startUserDay(params)),
  userStartDayLoading: () => dispatch(UserActions.userStartDayLoading()),
  userStartDayLoadingStop: () => dispatch(UserActions.userStartDayLoadingStop()),
  updateUserLocation: (location) => dispatch(UserActions.updateUserLocation(location)),
  updateUserArea: (area) => dispatch(UserActions.updateUserArea(area)),
  updateUserStartDayTime: (time) => dispatch(UserActions.updateUserStartDayTime(area)),
  fetchAllAreas: (params) => dispatch(UserActions.fetchAllAreas(params)),
  userStartDayValidationFailed: (params) => dispatch(UserActions.userStartDayValidationFailed(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentScreen)

