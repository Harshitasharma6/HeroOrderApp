import React, { Component } from 'react'
import { View, Alert, ScrollView, TouchableHighlight, FlatList } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from 'App/Containers/StartDay/StartDayStyle'
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
      searchByAreaFilters
    } =this.props;

    fetchRetailers({
    	token, 
    	agentid, 
    	offset, 
    	limit
    });
  }

  filterResults(list) {
  	const {
  		searchByAreaFilters
  	} = this.props;
   
    let filteredList = HelperService.searchTextListFilter(list, 'area__c', searchByAreaFilters['area']);
    return filteredList;
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
    	agentAreas,
    	retailersList,
    	fetchRetailers,  
    	fetchRetailersLoader,
    	submitPlannedVisitsLoader
    } = this.props;

    return (
       <RetailerResultList list={this.filterResults(retailersList.map((obj) => obj.seller))} loading={!!fetchRetailersLoader} fetchCall={() => this.fetchRetailersCall()} actionLoader={!!submitPlannedVisitsLoader} onSelect={(params) => this.onSelect(params)}/>
    )
  }
}

const mapStateToProps = (state) => ({
  agentAreas				: [{id: '', name: 'All'}].concat(state.user.agentAreas),
  token						: state.user.token,
  agentid					: state.user.id,

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(SearchByAreaScreen)
