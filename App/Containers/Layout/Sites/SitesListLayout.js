import SearchBar from 'App/Components/SearchBar';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Header, Left } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import SitesActions from 'App/Stores/Sites/Actions';
import WhiteButton from 'App/Components/WhiteButton';
import GenericIcon from 'App/Components/GenericIcon';
import StartDayActions from 'App/Stores/StartDay/Actions';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class SitesListLayout extends React.Component {
  onHandlePressNearBy() {
     const {
      siteSearchFilters,
      updateSearchFilters,
      fetchCurrentLocation
    } = this.props;

    if (!siteSearchFilters['searchNearby']) {
      fetchCurrentLocation({
        callAction: (updateSearchFilters),
        args: { edited_field: 'searchNearby', edited_value: !siteSearchFilters['searchNearby'] }
      });
    }else {
      updateSearchFilters({
        edited_field: 'searchNearby', 
        edited_value: !siteSearchFilters['searchNearby']
      })
    }
  }

  render() {
    const {
      siteSearchFilters,
      updateSearchFilters,
      fetchCurrentLocationLoader
    } = this.props;


    return (
      <View>
        <Header style={Styles.header}>
          <SearchBar
            placeholder={`Search by ${siteSearchFilters['searchBy']}`}
            onInputChange={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
            onInputSubmit={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
            onInputClear={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': '' })}
            value={siteSearchFilters['searchValue']}
            ContainerStyles={Styles.searchContainer}
            key={'SearchSiteList'}
          />
         <WhiteButton
            title={!!siteSearchFilters['searchNearby'] ? ' Disable Nearby' : ' Nearby Sites'}
            loading={!!fetchCurrentLocationLoader}
            onPress={() => this.onHandlePressNearBy()}
            textStyle={Styles.actionButtonText}
            style={ApplicationStyles.nearbyButton}
          >
            {siteSearchFilters['searchNearby'] ? [] : <GenericIcon name="locate" style={ApplicationStyles.nearbyButtonIcon} />}
          </WhiteButton>
        </Header>
        {this.props.children}
      </View>
    )
  }
}



const mapStateToProps = (state) => ({
  siteSearchFilters: state.sites.siteSearchFilters,
  fetchCurrentLocationLoader: state.startDay.fetchCurrentLocationLoader
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters: (params) =>    dispatch(SitesActions.updateSiteSearchFilters(params)),
  openMoreFiltersOption: ()     =>    dispatch(SitesActions.openMoreFiltersOption()),
  closeMoreFiltersOption: ()    =>    dispatch(SitesActions.closeMoreFiltersOption()),
  fetchCurrentLocation: (params) =>   dispatch(StartDayActions.fetchCurrentLocation(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SitesListLayout)

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 160,
    paddingTop: 15,
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
    height: hp('6%')
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
    marginRight: 0, 
    marginLeft: 12
  },
  callAction: {
    width: wp('20%')
  },
  locationAction: {
     width: wp('38%')
  },
  directionAction: {
    width: wp('42%')
  }
});