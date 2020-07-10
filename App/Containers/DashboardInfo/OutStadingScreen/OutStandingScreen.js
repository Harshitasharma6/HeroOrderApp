import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import SearchableDropdown from 'App/Components/SearchableDropdown'
import Loading from 'App/Components/Loading'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import Style from './OutStandingScreenStyle'
import OutstandingTuple from './OutstandingTuple';
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class OutStandingScreen extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
     const {
      dealerId,
      searchFilters,
      fetchOutStandingAction
    } = this.props

    fetchOutStandingAction({
      dealerId,
      district: searchFilters['district']
    });
  }

  changeSearchFilter(params) {
     const {
      dealerId,
      searchFilters,
      updateSearchFilters,
      fetchOutStandingAction
    } = this.props

    fetchOutStandingAction({
      dealerId,
      district: params.edited_value
    });

    updateSearchFilters(params);
  }


  getPaymentsInfoNode() {
    let visibleNode = [];
    const {
      fetchOutStandingList,
      outStandingLoader,
      allCountersSearchList
    } = this.props;

    const dataLength = fetchOutStandingList.length;

    if (fetchOutStandingList && dataLength && !outStandingLoader) {
        visibleNode = (
          <FlatList
            data={fetchOutStandingList}
            renderItem={({ item }) => <OutstandingTuple obj={item} id={item.Id} allCountersSearchList={allCountersSearchList}/>
          }
            keyExtractor={item => item.Id}
            onRefresh={() => this.fetchData()}
            refreshing={outStandingLoader}
            ListEmptyComponent={() => <NoDataFound />}
          />
        );
    }  else if (outStandingLoader){//data is being fetched
      visibleNode = <Loading />;
    }else { // not loading and data is empty
      visibleNode = <NoDataFound />;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={Style.searchFiltersContainer}>
            <SearchableDropdown
              dataSource={this.props.allDistricts}
              placeHolderText={'Search By District'}
              selectedValue={this.props.searchFilters['district']}
              onChange={(value) => this.changeSearchFilter({ edited_field: 'district', edited_value: value })}
              placeholder={'Search By District'}
              invalid={false}
              customPickerStyles={{ ...Style.picker }}
              labelStyles={{ ...Style.pickerLabel }}
          />
        </View>
        <View style={{marginBottom: hp('10%')}}>
          {this.getPaymentsInfoNode()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dealerId: state.shree.selectedShree.id,
  fetchOutStandingList  : state.dashboard.fetchOutStandingList,
  outStandingLoader : state.dashboard.outStandingLoader,
  allDistricts:  state.shree.allDistricts,
  searchFilters:  state.dashboard.searchFilters,
  allCountersSearchList  : state.shree.allCountersSearchList
});

const mapDispatchToProps = (dispatch) => ({
  fetchOutStandingAction: (params) 	 => dispatch(DashboardActions.fetchOutStandingAction(params)),
  updateSearchFilters: (params)    => dispatch(DashboardActions.updateDashboardSearchFilters(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutStandingScreen)