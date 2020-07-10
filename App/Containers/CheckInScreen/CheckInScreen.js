import React, { Component } from 'react';
import { View } from 'react-native';
import Style from './CheckInScreenStyle'
import NavigationService from 'App/Services/NavigationService'
import CheckInAction from 'App/Stores/CheckIn/Actions';
import { connect } from 'react-redux'
import SelectionButton from 'App/Components/SelectionButton'
import AddOptionFab from 'App/Components/AddOptionFab'


class CheckInScreen extends Component {
    render() {
        return (
            <View style={Style.container}>
                <SelectionButton 
                    icon="business" 
                    title="Counters" 
                    onPress={() => NavigationService.navigate('CounterSelectionScreen')}
                />

                <SelectionButton 
                    icon="people" 
                    title="Influencers" 
                    onPress={() => NavigationService.navigate('InfluencersListScreen')}
                />

                <SelectionButton 
                    icon="map" 
                    title="Sites" 
                    onPress={() => NavigationService.navigate('SiteListScreen')}
                />

                <SelectionButton 
                    icon="search" 
                    title="Final Observation"
                    onPress={() => NavigationService.navigate('FinalObservationFormScreen')}
                />
                
                <AddOptionFab />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    showHideCounter: state.checkIn.showHideCounter

})

const mapDispatchToProps = (dispatch) => ({
    counterVisitAction: () => dispatch(CheckInAction.counterVisitAction()),
   
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckInScreen)  


