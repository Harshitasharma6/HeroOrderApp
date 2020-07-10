import SearchBar from 'App/Components/SearchBar';
import InfluencersActions from 'App/Stores/Influencers/Actions';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Header } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import WhiteButton from 'App/Components/WhiteButton';
import GenericIcon from 'App/Components/GenericIcon'
import StartDayActions from 'App/Stores/StartDay/Actions'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class InfluencersListLayout extends React.Component {
  onHandlePressNearBy() {
     const {
      influencerSearchFilters,
      updateSearchFilters,
      fetchCurrentLocation
    } = this.props;

    if (!influencerSearchFilters['searchNearby']) {
      fetchCurrentLocation({
        callAction: (updateSearchFilters),
        args: { edited_field: 'searchNearby', edited_value: !influencerSearchFilters['searchNearby'] }
      });
    }else {
      updateSearchFilters({
        edited_field: 'searchNearby', 
        edited_value: !influencerSearchFilters['searchNearby']
      })
    }
  }

  render() {
    const {
      updateSearchFilters,
      influencerSearchFilters,
      fetchCurrentLocationLoader
    } = this.props;


    return (
      <View>
        <Header style={Styles.header}>
          <SearchBar
            placeholder={`Search by Name`}
            onInputChange={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
            onInputSubmit={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
            onInputClear={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': '' })}
            value={influencerSearchFilters['searchValue']}
            ContainerStyles={Styles.searchContainer}
            key={'SearchInflencersList'}
          />
          <WhiteButton
            title={!!influencerSearchFilters['searchNearby'] ? 'Disable Nearby' : 'Nearby Influencers'}
            onPress={() => this.onHandlePressNearBy()}
            style={ApplicationStyles.nearbyButton}
            textStyle={Styles.actionButtonText}
            loading={fetchCurrentLocationLoader}
          >
            <GenericIcon name="locate" style={ApplicationStyles.nearbyButtonIcon} />
          </WhiteButton>
        </Header>
        {this.props.children}
      </View>
    )
  }
}



const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  influencerOffset: state.influencers.influencerOffset,
  influencerLimit: state.influencers.influencerLimit,
  influencersList: state.influencers.influencersList,
  fetchInfluencersLoader: state.influencers.fetchInfluencersLoader,
  influencerSearchFilters: state.influencers.influencerSearchFilters,
  fetchCurrentLocationLoader: state.startDay.fetchCurrentLocationLoader
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters: (params) => dispatch(InfluencersActions.updateInfluencersSearchFilters(params)),
  openMoreFiltersOption: () => dispatch(InfluencersActions.openMoreFilters()),
  closeMoreFiltersOption: () => dispatch(InfluencersActions.closeMoreFilters()),
  fetchInfluencers: (params) => dispatch(InfluencersActions.fetchInfluencers(params)),
  fetchCurrentLocation: (params) => dispatch(StartDayActions.fetchCurrentLocation(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfluencersListLayout)

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 160,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  searchContainer: {
    width: Math.round(Dimensions.get('window').width - 20)
  },
  searchableDropdownContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  picker: {
    borderRadius: 100,
    width: 330
  },
  searchFilterContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchFilterTypeBox: {
    marginHorizontal: 5,
    width: 140,
    borderWidth: 1.5
  },
  searchFilterTypeText: {
    fontSize: 15,
    fontFamily: ApplicationStyles.textMediumFont
  },
  actionButton: {
    alignSelf: 'flex-start',
    height: hp('5.2%')
  },
  actionButtonText: {
    fontSize: wp('3.2%'),
    fontFamily: ApplicationStyles.textMediumFont
  },
  actionButtonIcon: {
    color: Colors.primary, 
    fontSize: wp('5%'),
    marginRight: 0
  },
  selectedactionButtonIcon: {
    color: Colors.white,
    fontSize: wp('5%'),
    marginRight: 0
  },
  callAction: {
    width: wp('20%')
  },
  locationAction: {
     width: wp('38%')
  },
  directionAction: {
    width: wp('38%')
  }
});
