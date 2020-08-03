import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View } from 'react-native';
import NavigationService from 'App/Services/NavigationService'
import CheckInAction from 'App/Stores/CheckIn/Actions';
import SelectionButton from 'App/Components/SelectionButton'
import {ApplicationStyles} from 'App/Theme'


class InsightsScreen extends Component {
    render() {
        return (
            <View style={ApplicationStyles.container}>
                <SelectionButton 
                    icon="bar-chart" 
                    title="Dashboard" 
                    onPress={() => NavigationService.navigate('DashboardSummaryScreen')}
                />

                <SelectionButton 
                    icon="credit-card" 
                    title="Schemes" 
                   	onPress={() => NavigationService.navigate('AvailableSchemesScreen')}
                />

                <SelectionButton 
                    icon="sitemap" 
                    title="Product Catalog" 
                    onPress={() => NavigationService.navigate('ProductCatalogScreen')}
                />

                <SelectionButton 
                    icon="users" 
                    title="Customers"
                    onPress={() => NavigationService.navigate('CustomersScreen')}
                />
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
)(InsightsScreen)  


