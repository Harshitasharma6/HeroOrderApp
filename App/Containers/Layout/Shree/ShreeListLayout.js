import SearchBar from 'App/Components/SearchBar';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Header, Left } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import WhiteButton from 'App/Components/WhiteButton';
import GenericIcon from 'App/Components/GenericIcon'
import ShreeAction from 'App/Stores/Shree/Actions'
import StartDayActions from 'App/Stores/StartDay/Actions'
import Select from 'App/Components/Select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class ShreeListLayout extends React.Component {

  onHandlePressNearBy() {
     const {
      shreeSearchFilters,
      updateSearchFilters,
      fetchCurrentLocation
    } = this.props;

    if (!shreeSearchFilters['searchNearby']) {
      fetchCurrentLocation({
        callAction: (updateSearchFilters),
        args: { edited_field: 'searchNearby', edited_value: !shreeSearchFilters['searchNearby'] }
      });
    }else {
      updateSearchFilters({
        edited_field: 'searchNearby', 
        edited_value: !shreeSearchFilters['searchNearby']
      })
    }
  }


  render() {
    const {
      shreeSearchFilters,
      updateSearchFilters,
      fetchCurrentLocation,
      fetchCurrentLocationLoader
    } = this.props;



    return (
      <View>
        <Header style={Styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
          <SearchBar
            placeholder={`Search`}
            onInputChange={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
            onInputSubmit={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
            onInputClear={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': '' })}
            value={shreeSearchFilters['searchValue']}
            ContainerStyles={Styles.searchContainer}
            key={'SearchShreeList'}
          />
          <Select style={Styles.selectPickerStyle}
            placeholder={'Search By'}
            list={shreeSearchFilters.searchByOptions}
            selected={shreeSearchFilters['searchBy']}
            onChange={(value) => updateSearchFilters({ edited_field: 'searchBy', 'edited_value': value })}
          />
          </View>
          <WhiteButton
            title={!!shreeSearchFilters['searchNearby'] ? 'Disable Nearby' : 'Nearby Counters'}
            loading={!!fetchCurrentLocationLoader}
            onPress={() => this.onHandlePressNearBy()}
            textStyle={Styles.actionButtonText}
            style={ApplicationStyles.nearbyButton}
          >
            {shreeSearchFilters['searchNearby'] ? [] : <GenericIcon name="locate" style={ApplicationStyles.nearbyButtonIcon} />}
          </WhiteButton>
        </Header>
        {this.props.children}
      </View>
    )
  }
}



const mapStateToProps = (state) => ({
  shreeSearchFilters:         state.shree.shreeSearchFilters,
  fetchCurrentLocationLoader: state.startDay.fetchCurrentLocationLoader
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters: (params) =>  dispatch(ShreeAction.updateShreeSearchFilters(params)),
  openMoreFiltersOption: () =>      dispatch(ShreeAction.openMoreFiltersOption()),
  closeMoreFiltersOption: () =>     dispatch(ShreeAction.closeMoreFiltersOption()),
  fetchCurrentLocation: (params) => dispatch(StartDayActions.fetchCurrentLocation(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShreeListLayout)

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
    width: wp('60%')
  },
  selectPickerStyle: {
    width: wp('30%'),
    height: hp('4.2%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    marginTop: hp('1%'),
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