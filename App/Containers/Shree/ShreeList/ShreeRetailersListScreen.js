import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import SitesActions from 'App/Stores/Sites/Actions';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import SitesTuple from '../../Sites/SitesTuple';
import Style from './ShreeListsScreensStyle';
import ShreeAction from 'App/Stores/Shree/Actions';
import ShreeTuple from '../ShreeTuple';
import CommonActions from 'App/Stores/Common/Actions'
import StartDayActions from 'App/Stores/StartDay/Actions'
import ShreeLocationAction from 'App/Containers/Shree/ShreeLocationAction';


class ShreeRetailersListScreen extends Component {
  componentDidMount() {
    this.fetchShreeCall();
    this.props.fetchCurrentLocation({});
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  async updateDealerLocation(params){
    const {
      userId,
      updateLocation,
      updateLocationLoading,
      updateLocationLoadingStop
    } = this.props;

    updateLocationLoading();
    let location = await HelperService.requestLocation();
    updateLocationLoadingStop();

    if (location == 'DENIED'){
      Alert.alert("Location permission is required to proceed.", 
        "Go App Permissions and Turn on Location Permission for ShreeCementApp."
      );
      return;
    }else if (!location) {
      return;
    }

    updateLocation({
      "OwnerId": userId,
      "Id": params.id,
      "Latitude": location.latitude, //replace by location.latitude
      "Longitude": location.longitude //replace by location.longitude
    });

  }

  fetchShreeCall() {
    const {
      access_token,
      fetchShree
    } = this.props;

    fetchShree({
      access_token,
    });
  }

  filterResults(list) {
    const {
      currentLocation,
      shreeSearchFilters
    } = this.props;

    if (!shreeSearchFilters['searchValue'] && !shreeSearchFilters['searchNearby']) {
      return [];
    }

    let filteredList =  HelperService.searchTextListFilter(list, shreeSearchFilters['searchBy'], shreeSearchFilters['searchValue']);

    if (shreeSearchFilters['searchNearby']) {
      filteredList = HelperService.getNearbyList({currentLocation: currentLocation, list: filteredList, maxDistanceInMeters: 2000, latitudeField: 'Latitude__c', longitudeField: 'Longitude__c'});
    }

    return filteredList;
  }

  async onSelectShree(params) {
    const {
      userId,
      openModal,
      selectShree,
      updateLocation,
      currentLocation
    } = this.props


    if(HelperService.isNullOrUndefined(params.data['Latitude__c']) || HelperService.isNullOrUndefined(params.data['Longitude__c']) || HelperService.isNullOrUndefined(params.data['State__c'])) {
      openModal({
        content: (<ShreeLocationAction onPress={() => this.updateDealerLocation(params)} loading={false}/>),
        heading: params.data['Name'], 
        bodyFlexHeight: .4
      });
      return;
    }

    let distance;
    if (currentLocation.latitude) {
      distance = HelperService.getDistanceBetweenTwoLocations(currentLocation, {latitude: params.data['Latitude__c'], longitude: params.data['Longitude__c']});
    } else {
      HelperService.showToast({
        message: 'Please Press Nearby counters',
        duration: 3000
      });

      return;
    }

    if (distance > 2000) {
      HelperService.showToast({
        message: 'Cannot proceed. Retailer is too far from your location',
        duration: 2000
      })

      try {
        bugsnag.notify(new Error('Too Far Shree Retailer: ' + JSON.stringify({userId: userId, agent_lat_long: `${currentLocation.latitude}, ${currentLocation.longitude}`, party_name: params.data['Name'], party_id: params.id, party_lat_long: `${params.data['Latitude__c']}, ${params.data['Longitude__c']}`, distance: `${distance}m`})));
      }catch (error) {
        console.log(error)
      }

      return;
    }

    NavigationService.navigate('ShreeInfo', params.data);
    selectShree(params);
  }

  render() {
    const {
      shreeList,
      fetchShreeLoader,
    } = this.props;

    let visibleNode = [];

    if (shreeList && shreeList.length) {
      let filteredSitesList = this.filterResults(shreeList.map((obj) => obj));

      if (filteredSitesList.length) {
        visibleNode = (
          <FlatList
            data={filteredSitesList}
            renderItem={({ item }) => <ShreeTuple data={item} id={item.Id}  onPress={() => this.onSelectShree({ id: item.Id, data: item, type: 'Shree' })} />}            
            keyExtractor={item => item.Id}
            onRefresh={() => this.fetchShreeCall()}
            refreshing={fetchShreeLoader}
          />
        );
      } else {
        visibleNode = <NoDataFound text={'Search Counters'} />
      }
    } else if (fetchShreeLoader) {
      visibleNode = <Loading />
    } else if (shreeList && !shreeList.length && !fetchShreeLoader) {
      visibleNode = <NoDataFound text={'No Retailers Found'} />
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
  userId   : state.user.loginDetails.userId,
  shreeList: state.shree.shreeRetailersList,
  fetchShreeLoader: state.shree.fetchShreeRetailerLoader,
  shreeSearchFilters: state.shree.shreeSearchFilters,
  access_token: state.startDay.access_token,
  currentLocation: state.startDay.currentLocation,
  updateLocationLoader: state.shree.updateLocationLoader
});

const mapDispatchToProps = (dispatch) => ({
  openModal:(params)                 => dispatch(CommonActions.openModal(params)),
  closeModal:(params)                => dispatch(CommonActions.closeModal(params)),
  disableModal:(params)              => dispatch(CommonActions.disableModal(params)),
  selectShree: (params)              => dispatch(ShreeAction.selectShree(params)),
  fetchShree: (params)               => dispatch(ShreeAction.fetchShreeRetailers(params)),
  clearSelectShree: ()               => dispatch(ShreeAction.clearSelectShree()),
  updateLocation: (params)           => dispatch(ShreeAction.updateLocation(params)),
  updateLocationLoading: (params)    => dispatch(ShreeAction.updateLocationLoading()),
  updateLocationLoadingStop: (params)=> dispatch(ShreeAction.updateLocationLoadingStop()),
  fetchCurrentLocation: (params)     => dispatch(StartDayActions.fetchCurrentLocation(params))    
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShreeRetailersListScreen)