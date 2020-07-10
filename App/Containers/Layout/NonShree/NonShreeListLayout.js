import SearchBar from 'App/Components/SearchBar';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Header, Left } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import WhiteButton from 'App/Components/WhiteButton';
import GenericIcon from 'App/Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NonShreeAction from 'App/Stores/NonShree/Actions'
import StartDayActions from 'App/Stores/StartDay/Actions'
import Select from 'App/Components/Select'


class NonShreeListLayout extends React.Component {
  onHandlePressNearBy() {
     const {
      nonShreeSearchFilters,
      updateSearchFilters,
      fetchCurrentLocation
    } = this.props;

    if (!nonShreeSearchFilters['searchNearby']) {
      fetchCurrentLocation({
        callAction: (updateSearchFilters),
        args: { edited_field: 'searchNearby', edited_value: !nonShreeSearchFilters['searchNearby'] }
      });
    }else {
      updateSearchFilters({
        edited_field: 'searchNearby', 
        edited_value: !nonShreeSearchFilters['searchNearby']
      })
    }
  }


  render() {
    const {
      nonShreeSearchFilters,
      updateSearchFilters,
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
            value={nonShreeSearchFilters['searchValue']}
            ContainerStyles={Styles.searchContainer}
            key={'SearchNonShreeList'}
          />
          <Select style={Styles.selectPickerStyle}
            placeholder={'Search By'}
            list={nonShreeSearchFilters.searchByOptions}
            selected={nonShreeSearchFilters['searchBy']}
            onChange={(value) => updateSearchFilters({ edited_field: 'searchBy', 'edited_value': value })}
          />
          </View>
          <WhiteButton
            title={!!nonShreeSearchFilters['searchNearby'] ? 'Disable Nearby' : 'Nearby Counters'}
            loading={!!fetchCurrentLocationLoader}
            onPress={() => this.onHandlePressNearBy()}
            style={ApplicationStyles.nearbyButton}
            textStyle={Styles.actionButtonText}>
            {nonShreeSearchFilters['searchNearby'] ? [] : <GenericIcon name="locate" style={ApplicationStyles.nearbyButtonIcon} />}
          </WhiteButton>        
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: wp('90%')}}>
            <WhiteButton
              title={'Dealers'}
              selected={nonShreeSearchFilters['shopType'] == 'Dealer'}
              onPress={() => updateSearchFilters({ edited_field: 'shopType', 'edited_value': 'Dealer' })}
              style={{ ...Styles.actionButton, ...Styles.typeAction }}
              textStyle={Styles.actionButtonText}>
            </WhiteButton>        
           <WhiteButton
              title={'Retailers'}
              selected={nonShreeSearchFilters['shopType'] == 'Retailer'}
              onPress={() => updateSearchFilters({ edited_field: 'shopType', 'edited_value': 'Retailer' })}
              style={{ ...Styles.actionButton, ...Styles.typeAction }}
              textStyle={Styles.actionButtonText}>
          </WhiteButton>        
          </View>
        </Header>
        {this.props.children}
      </View>
    )
  }
}



const mapStateToProps = (state) => ({
  nonShreeSearchFilters:      state.nonShree.nonShreeSearchFilters,
  fetchCurrentLocationLoader: state.startDay.fetchCurrentLocationLoader
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters: (params) =>    dispatch(NonShreeAction.updateNonShreeSearchFilters(params)),
  openMoreFiltersOption: () =>        dispatch(NonShreeAction.openMoreFiltersOption()),
  closeMoreFiltersOption: () =>       dispatch(NonShreeAction.closeMoreFiltersOption()),
  fetchCurrentLocation: (params) =>   dispatch(StartDayActions.fetchCurrentLocation(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NonShreeListLayout)

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: hp('28%'),
    paddingTop: hp('2.2%'),
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
    borderWidth: 1.5, 
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
  callAction: {
    width: wp('20%')
  },
  locationAction: {
     width: wp('38%')
  },
  directionAction: {
    width: wp('38%')
  },
  typeAction: {
     width: wp('34%'),
     marginRight: wp('3%'),
     marginTop: wp('3%'),
     height: hp('5%')
  }
});