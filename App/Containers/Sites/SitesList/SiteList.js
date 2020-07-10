import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import SitesActions from 'App/Stores/Sites/Actions';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import SitesTuple from 'App/Containers/Sites/SitesTuple';
import Style from './SitesListStyle';
import GenericIcon from 'App/Components/GenericIcon';
import StartDayActions from 'App/Stores/StartDay/Actions'

class SiteListScreen extends Component {

  componentDidMount(){
    this.fetchSitesCall();
    this.props.fetchCurrentLocation({});
  }

  fetchSitesCall() {
    this.props.fetchSites();
  }

  filterResults(list) {
     const {
      currentLocation,
      siteSearchFilters
    } = this.props;

    if (!siteSearchFilters['searchValue'] && !siteSearchFilters['searchNearby']) {
      return [];
    }

    let filteredList =  HelperService.searchTextListFilter(list, siteSearchFilters['searchBy'], siteSearchFilters['searchValue']);

    if (siteSearchFilters['searchNearby']) {
      filteredList = HelperService.getNearbyList({currentLocation: currentLocation, list: filteredList, maxDistanceInMeters: 2000, latitudeField: 'Latitude__c', longitudeField: 'Longitude__c'});
    }

    return filteredList;
  }

  onSelectSite(params) {
     const {
      userId,
      selectSite,
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
        message: 'Cannot proceed. Site is too far from your location',
        duration: 2000
      })

      try {
        bugsnag.notify(new Error('Too Far Site: ' + JSON.stringify({userId: userId, agent_lat_long: `${currentLocation.latitude}, ${currentLocation.longitude}`, party_name: params.data['Name'], party_id: params.id, party_lat_long: `${params.data['Latitude__c']}, ${params.data['Longitude__c']}`, distance: `${distance}m`})));
      }catch (error) {
        console.log(error)
      }

      return;
    }

    selectSite(params.data);
    NavigationService.navigate('SitesInfoScreen', {data: params.data});
  }


  render() {
    const {
      sitesList,
      fetchSitesLoader,
      agentAreas,
      siteSearchFilters
    } = this.props;

    let visibleNode = [];

    if (sitesList && sitesList.length) {
      let filteredSitesList = this.filterResults(sitesList.map((obj) => obj));
      if (filteredSitesList.length) {
        visibleNode = (
          <FlatList
            data={filteredSitesList}
            renderItem={({ item }) => <SitesTuple data={item} id={item.Id} onPress={() => this.onSelectSite({ id: item.Id, data: item, type: 'Site' })} />}
            keyExtractor={item => item.Id}
            onRefresh={() => this.fetchSitesCall()}
            refreshing={fetchSitesLoader}
          />
        );
      } else {
        visibleNode = siteSearchFilters['searchValue'] ? <NoDataFound text={'No matching sites for this search.'} /> : <NoDataFound text={'Search Sites By Name or Location'} />;
      }
    } else if (fetchSitesLoader) {
      visibleNode = <Loading />
    } else if (sitesList && !sitesList.length && !fetchSitesLoader) {
      visibleNode = <NoDataFound text={'No Sites Found'} />
    }



    return (
      <View style={Style.container}>
        <View >
          {visibleNode}
        </View>
        <TouchableOpacity
          style={Style.plusIcon}
          onPress={() => NavigationService.navigate('NewSites')}>
          <GenericIcon
            name={'add'}
            style={{ color: Colors.white, fontSize: 40, alignSelf: 'center' }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.loginDetails.userId,
  sitesList: state.sites.sitesList,
  currentLocation: state.startDay.currentLocation,
  fetchSitesLoader: state.sites.fetchSitesLoader,
  siteSearchFilters: state.sites.siteSearchFilters
});

const mapDispatchToProps = (dispatch) => ({
  selectSite: (params) => dispatch(SitesActions.selectSite(params)),
  fetchSites: (params) => dispatch(SitesActions.fetchSites(params)),
  clearSelectSite: () => dispatch(SitesActions.clearSelectSite()),
  fetchCurrentLocation: (params)=> dispatch(StartDayActions.fetchCurrentLocation(params))  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteListScreen)