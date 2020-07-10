import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WhiteButton from 'App/Components/WhiteButton';
import Style from './AbsentScreenStyle';
import BlueButton from 'App/Components/BlueButton'
import { CANCEL, SUBMIT } from 'App/Constants'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import {HelperService} from 'App/Services/Utils/HelperService';


class AbsentScreen extends Component {
    submit(){
        this.props.markUserAbsent({date: HelperService.getCurrentTimestamp(), token: this.props.token, agentid: this.props.agentid, absentReason: this.props.absentReason, leaveType: this.props.leaveType});
    }

    updateAbsentReason(reason){
        this.props.updateUserMarkedAbsentReason({absentReason: reason});
    }

    render() {
        return (
                <View style={Style.container}>
                    <Card style={Style.card}>
                        <View style={Style.buttonBox}>
                            <Text style={{ ...Style.title, textAlign: 'center' }}>
                                You will be marked Absent for today
                            </Text>
                            <WhiteButton style={{...Style.actionButton, ...Style.mv10}} selected={this.props.selectedAbsentReason == 'Planned'} title={'Planned'} onPress={() => this.updateAbsentReason('Planned')}/>
                             <WhiteButton style={{...Style.actionButton, ...Style.mv10}} selected={this.props.selectedAbsentReason == 'Ad-hoc'} title={'Ad-hoc'} onPress={() => this.updateAbsentReason('Ad-hoc')}/>
                        </View>
                        <View style={Style.action}>
                            <WhiteButton style={Style.button} rounded title={CANCEL} disabled={!!this.props.userMarkedAbsentLoader} onPress={() => { NavigationService.goback() }} />
                            <BlueButton style={Style.button} rounded large title={SUBMIT} disabled={!!this.props.userMarkedAbsentLoader} loading={!!this.props.userMarkedAbsentLoader} onPress={() => this.submit()} />
                        </View>
                    </Card>
                </View>
        )
    }
}

AbsentScreen.propTypes = {
  area:         PropTypes.string,
  validation:   PropTypes.object,
  agentAreas:   PropTypes.array, 
  token:        PropTypes.string,
  agentid:      PropTypes.string
}

const mapStateToProps = (state) => ({
  token:                    state.user.token,
  agentid:                  state.user.id,
  leaveType:                state.user.leaveType,
  absentReason:             state.user.absentReason,
  userMarkedAbsentLoader:   state.user.userMarkedAbsentLoading,
  selectedAbsentReason:     state.user.absentReason,
  absentReasons:            state.common.absentReasons
})

const mapDispatchToProps = (dispatch) => ({
  markUserAbsent: (params) =>               dispatch(UserActions.markUserAbsent(params)),
  userMarkedAbsentLoading: () =>            dispatch(UserActions.userMarkedAbsentLoading()),
  updateUserMarkedAbsentReason: (params) => dispatch(UserActions.updateUserMarkedAbsentReason(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AbsentScreen)