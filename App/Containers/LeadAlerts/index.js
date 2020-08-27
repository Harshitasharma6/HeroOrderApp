import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
import NavigationService from 'App/Services/NavigationService'
import CheckInAction from 'App/Stores/CheckIn/Actions';
import SelectionButton from 'App/Components/SelectionButton'
import {ApplicationStyles, Colors} from 'App/Theme'
import { HelperService } from 'App/Services/Utils/HelperService'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
    //<Text style={ApplicationStyles.formHeading}>Today, July 15, Saturday</Text>

class LeadAlertsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{width: wp('90%'), marginHorizontal: wp('5%'), height: hp('21%'), backgroundColor: Colors.primary, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <View>
                        <Text style={{...ApplicationStyles.screenHeading, fontSize: wp('9%') }}>Today, {HelperService.getCurrentDate()} {HelperService.getMonthMappingName(HelperService.getCurrentMonth())}</Text>
                    </View>
               
                <View>
                   <Text style={ApplicationStyles.screenHeading}>{HelperService.getDayMappingName(HelperService.getCurrentDay())}</Text>
                </View>
            </View>
        
            <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: hp('8%')}}>
                <SelectionButton
                    icon={require('App/Assets/Images/phone/phone.png')}
                    title="Actionables" 
                    onPress={() => NavigationService.navigate('ActionablesScreen')}
                    style={{height: hp('18%'), width: wp('40%')}}
                />

                
                <SelectionButton
                    icon={require('App/Assets/Images/key/key.png')}
                    title="Booking Confirmed" 
                    onPress={() => NavigationService.navigate('BookingConfirmed')}
                    style={{height: hp('18%'), width: wp('40%')}}
                />

               
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
   // showHideCounter: state.checkIn.showHideCounter

})

const mapDispatchToProps = (dispatch) => ({
    //counterVisitAction: () => dispatch(CheckInAction.counterVisitAction()),
   
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeadAlertsScreen)  


