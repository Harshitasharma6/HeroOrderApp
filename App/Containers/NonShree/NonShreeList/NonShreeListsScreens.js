import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';

import { Colors } from '../../../Theme';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import SitesTuple from '../../Sites/SitesTuple';
import Style from './NonShreeListsScreensStyle';
import NonShreeAction from 'App/Stores/NonShree/Actions';
import NonShreeTuple from '../NonShreeTuple';
import GenericIcon from 'App/Components/GenericIcon';
import StartDayActions from 'App/Stores/StartDay/Actions'


class NonShreeListsScreens extends Component {
  componentDidMount(){
    this.props.clearSelectNonShree();
    this.fetchShreeNonCall();
    this.props.fetchCurrentLocation({});
  }


  fetchShreeNonCall() {
    const {
      access_token,
      fetchNonShree
    } = this.props;

    fetchNonShree({
      access_token,
    });
  }

  filterResults(list) {
    const {
      currentLocation,
      nonShreeSearchFilters
    } = this.props;


    if (!nonShreeSearchFilters['searchValue'] && !nonShreeSearchFilters['searchNearby']) {
      return [];
    }

    let filteredList =  HelperService.searchTextListFilter(list, nonShreeSearchFilters['searchBy'], nonShreeSearchFilters['searchValue']);

    filteredList =  HelperService.searchKeyValueInList(filteredList,'Shop_Type__c', nonShreeSearchFilters['shopType']);
    

    if (nonShreeSearchFilters['searchNearby']) {
      filteredList = HelperService.getNearbyList({currentLocation: currentLocation, list: filteredList, maxDistanceInMeters: 2000, latitudeField: 'Latitude__c', longitudeField: 'Longitude__c'});
    }

    return filteredList;
  }

  onSelectNonShree(params) {
    const {
      userId,
      selectNonShree,
      currentLocation
    } = this.props;


    let distance;
    if (currentLocation.latitude) {
      distance = HelperService.getDistanceBetweenTwoLocations(currentLocation, {latitude: params.data['Latitude__c'], longitude:params.data['Longitude__c']});
    } else {
      HelperService.showToast({
        message: 'Please Press Nearby counters',
        duration: 3000
      });

      return;
    }

    if (distance >2000) {
      HelperService.showToast({
        message: 'Cannot proceed. Dealer/Retailer is too far from your location',
        duration: 2000
      });

      try {
        bugsnag.notify(new Error('Too Far Non Shree: ' + JSON.stringify({userId: userId, agent_lat_long: `${currentLocation.latitude}, ${currentLocation.longitude}`, party_name: params.data['Name'], party_id: params.id, party_lat_long: `${params.data['Latitude__c']}, ${params.data['Longitude__c']}`, distance: `${distance}m`})));
      }catch (error) {
        console.log(error)
      }

      return;
    }

    selectNonShree(params.data);
    NavigationService.navigate('NonShreeInfo', params.data);
  }



  render() {
    const {
      nonShreeList,
      fetchNonShreeLoader,
    } = this.props;

    let visibleNode = [];


    if (nonShreeList && nonShreeList.length) {
      let filteredSitesList = this.filterResults(nonShreeList.map((obj) => obj));
      if (filteredSitesList.length) {
        visibleNode = (
          <FlatList
            data={filteredSitesList}
            renderItem={({ item }) => <NonShreeTuple data={item} id={item.Id}  onPress={() => this.onSelectNonShree.bind(this, { id: item.Id, data: item, type: 'Non Shree' })()} />} 
            keyExtractor={item => item.Id}
            onRefresh={() => this.fetchShreeNonCall()}
            refreshing={fetchNonShreeLoader}
          />
        );
      } else {
        visibleNode = <NoDataFound text={'Search Counters By Name or Location'} />
      }
    } else if (fetchNonShreeLoader) {
      visibleNode = <Loading />
    } else if (nonShreeList && !nonShreeList.length && !fetchNonShreeLoader) {
      visibleNode = <NoDataFound text={'Non Shree Not Found'} />
    }



    return (
      <View style={Style.container}>
        <View >
          {visibleNode}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.loginDetails.userId,
  nonShreeList: state.nonShree.nonShreeList,
  fetchNonShreeLoader: state.nonShree.fetchNonShreeLoader,
  nonShreeSearchFilters: state.nonShree.nonShreeSearchFilters,
  access_token: state.startDay.access_token,
  currentLocation: state.startDay.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  selectNonShree: (params) => dispatch(NonShreeAction.selectNonShree(params)),
  fetchNonShree: (params) => dispatch(NonShreeAction.fetchNonShree(params)),
  clearSelectNonShree: () => dispatch(NonShreeAction.clearSelectNonShree()),
  fetchCurrentLocation: (params)=> dispatch(StartDayActions.fetchCurrentLocation(params))    
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NonShreeListsScreens)
