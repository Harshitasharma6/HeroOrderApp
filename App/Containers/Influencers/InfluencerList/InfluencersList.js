import Loading from 'App/Components/Loading';
import NoDataFound from '../../../Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import InfluencersActions from 'App/Stores/Influencers/Actions';
import { Colors } from 'App/Theme';
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import InfluencersTuple from '../InfluencerTuple';
import Style from './InfluencersListStyle';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericIcon  from 'App/Components/GenericIcon';
import StartDayActions from 'App/Stores/StartDay/Actions'


class InfluencersListScreen extends Component {
  componentDidMount() {
    this.fetchInfluencersCall();
    this.props.fetchCurrentLocation({});
  }

  fetchInfluencersCall() {
    const {
      fetchInfluencers
    } = this.props;

    fetchInfluencers();
  }



  filterResults(list) {
    const {
      currentLocation,
      influencerSearchFilters
    } = this.props;

  

    if (!influencerSearchFilters['searchValue'] && !influencerSearchFilters['searchNearby']) {
      return [];
    }

    let filteredList =  HelperService.searchTextListFilter(list, influencerSearchFilters['searchBy'], influencerSearchFilters['searchValue']);

    if (influencerSearchFilters['searchNearby']) {
      filteredList = HelperService.getNearbyList({currentLocation: currentLocation, list: filteredList, maxDistanceInMeters: 2000, latitudeField: 'Latitude__c', longitudeField: 'Longitude__c'});
    }
    return filteredList;
  }

  onSelectInfluencer(params) {
    const {
      userId,
      selectInfluencer,
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
        message: 'Cannot proceed. Influencer is too far from your location',
        duration: 2000
      });

      try {
        bugsnag.notify(new Error('Too Far Influencer: ' + JSON.stringify({userId: userId, agent_lat_long: `${currentLocation.latitude}, ${currentLocation.longitude}`, party_name: params.data['Name'], party_id: params.id, party_lat_long: `${params.data['Latitude__c']}, ${params.data['Longitude__c']}`, distance: `${distance}m`})));
      }catch (error) {
        console.log(error)
      }


      return;
    }


    NavigationService.navigate('InfluencerInfoScreen', params);
    selectInfluencer(params); 
  }

  render() {
    const {
      influencersList,
      fetchInfluencersLoader,
      influencerSearchFilters
    } = this.props;

    let visibleNode = [];

    if (influencersList && influencersList.length) {

      let filteredInfluencerList = this.filterResults(influencersList.map((obj) => obj));

      if (filteredInfluencerList.length) {
        visibleNode = (
          <FlatList
            data={filteredInfluencerList}
            renderItem={({ item }) => <InfluencersTuple data={item} id={item.Id} onPress={() => this.onSelectInfluencer({ id: item.Id, data: item, type: 'Influencers' })} />}
            keyExtractor={item => item.Id}
            onRefresh={() => this.fetchInfluencersCall()}
            refreshing={fetchInfluencersLoader}
            ListEmptyComponent={() => <NoDataFound text={'No Influencers Found'} />}
          />
        );
      } else {
        visibleNode = <NoDataFound text={'Search Influencers By Name or Location'} />
      }
    } else if (fetchInfluencersLoader) {
      visibleNode = <Loading />
    } else if (influencersList && !influencersList.length && !fetchInfluencersLoader) {
      visibleNode = <NoDataFound text={'No Influencers Found'} />
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
  token:                      state.user.token,
  agentid:                    state.user.id,
  userId:                     state.user.loginDetails.userId,
  influencersList:            state.influencers.influencersList,
  fetchInfluencersLoader:     state.influencers.fetchInfluencersLoader,
  influencerSearchFilters:    state.influencers.influencerSearchFilters,
  currentLocation:            state.startDay.currentLocation
});

const mapDispatchToProps = (dispatch) => ({
  fetchInfluencers: (params) =>     dispatch(InfluencersActions.fetchInfluencers(params)),
  selectInfluencer: (params) =>     dispatch(InfluencersActions.selectInfluencer(params)),
  clearSelectInfluencer: () =>      dispatch(InfluencersActions.clearSelectInfluencer()),
  fetchInfluencerSites: (params) => dispatch(InfluencersActions.fetchInfluencerSites(params)),
  fetchCurrentLocation: (params)=> dispatch(StartDayActions.fetchCurrentLocation(params))  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfluencersListScreen)

