import React, { Component } from 'react'
import { View, Alert, ScrollView, TouchableHighlight, FlatList } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from 'App/Containers/StartDay/StartDayStyle'
import CustomStyle from'App/Containers/StartDay/StartDayStyle'
import BlueButton from 'App/Components/BlueButton'
import SearchableDropdown from 'App/Components/SearchableDropdown'
import WhiteButton from 'App/Components/WhiteButton'
import RetailerCard from '../UnplannedRetailerCard'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService'
import VisitCard from 'App/Containers/Visits/VisitCard'
import Loading from 'App/Components/Loading'
import NoDataFound from 'App/Components/NoDataFound'
import { Colors } from 'App/Theme'
import RetailerResultList from 'App/Containers/UnplannedVisits/RetailerResultList'
import { SEARCH_BY_AREA } from '../../../Constants'

class SearchByAreaScreen extends React.Component {
  componentDidMount() {
    this.fetchRetailersCall();
  }

  
  fetchRetailersCall(){
    const {
      token,
      agentid,
      offset,
      limit,
      fetchRetailers,
      searchByAreaFilters,
      location
    } =this.props;

    fetchRetailers({
    	token, 
    	agentid, 
    	offset, 
    	limit,
    	...location
    });
  }

  onSelect(params) {
  	 const {
      token,
      agentid,
      offset,
      limit,
      submitSelectedUnplannedVisit
    } = this.props;

    let data = [{
  		"retailer_dealer__c": params.sfid,
        "status__c": "unplanned",
        "visit_date__c": HelperService.getCurrentTimestamp(),
        "createddate": HelperService.getCurrentTimestamp(),
        "psm__c": agentid
  	}]

  	Alert.alert(
	  	'Start Visit',
	  	'Do you want to start the visit for this seller?',
	  [
	    {
	      text: 'Cancel',
	      onPress: () => console.log('Cancel Pressed'),
	      style: 'cancel',
	    },
	    {text: 'Confirm', onPress: () => submitSelectedUnplannedVisit({payload: data, token: token, agentid: agentid})},
	  ],
	  {cancelable: false},
	);
  }

  render() {
    const { 
    	retailersList, 
    	fetchRetailers,
    	fetchRetailersLoader,
    	submitPlannedVisitsLoader 
    } = this.props;

    return (
       <RetailerResultList 
	       	list={retailersList.map((obj) => obj.seller)} 
	       	loading={!!fetchRetailersLoader} 
	       	fetchCall={() => this.fetchRetailersCall()}
	       	noDataFoundCustomMsg={'No Retailers Found for this location.'}
	       	noDataFoundCustomNode={<WhiteButton style={CustomStyle.buttons} title={SEARCH_BY_AREA} onPress={() => NavigationService.navigate('SearchByAreaScreen')} />}
	       	actionLoader={!!submitPlannedVisitsLoader} 
	       	onSelect={(params) => this.onSelect(params)}
       	/>
    );
  }
}

const mapStateToProps = (state) => ({
  token						: state.user.token,
  agentid					: state.user.id,
  location					: state.visits.unplannedVisit.nearLocation,
  agentAreas				: [{id: '', name: 'All'}].concat(state.user.agentAreas),
  searchByAreaFilters		: state.visits.unplannedVisit.searchByAreaFilters,
  submitPlannedVisitsLoader : state.visits.planVisit.submitPlannedVisitsLoader 
});

const mapDispatchToProps = (dispatch) => ({
  submitSelectedUnplannedVisit: (params) => dispatch(VisitsActions.submitSelectedUnplannedVisit(params))
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(SearchByAreaScreen)
