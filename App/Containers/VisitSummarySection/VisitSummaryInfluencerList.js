import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import ShreeActions from 'App/Stores/Shree/Actions';
import VisitSummaryTuple from './VisitSummaryTuple';



class VisitSummaryInfluencerList extends Component {
  componentDidMount() {
    const {
      fetchAllVisits
    } = this.props;

    fetchAllVisits();
  }

  render() {
    const {
      allCountersSearchList,
      fetchAllVisits,
      loader,
      list
    } = this.props;

    let visibleNode = [];

    if (list && list.length) {
      if (list.length) {
        visibleNode = (
          <FlatList
            data={list}
            renderItem={({ item }) => <VisitSummaryTuple type={'Influencer'} data={item} id={item.Id} allCountersSearchList={allCountersSearchList} onPress={() => NavigationService.navigate('VisitSummaryCompetitorList', {data: item['Competitors__r']})} />}
            keyExtractor={item => item.Id}
            onRefresh={() => fetchAllVisits()}
            refreshing={loader}
            ListEmptyComponent={() => <NoDataFound text={'No Influencer Visits Found'} />}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No Influencer Visits Found'} />
      }
    } else if (loader) {
      visibleNode = <Loading />
    } else if (list && !list.length && !loader) {
      visibleNode = <NoDataFound text={'No Influencer Visits Found'} />
    }


    return (
      <View style={{flex: 1}}>
          {visibleNode}
      </View>
    )
  }
}



const mapStateToProps = (state) => ({
  list: state.shree.allInfluencerVisits,
  loader:  state.shree.allInfluencerVisitsLoader,
  allCountersSearchList  : state.shree.allCountersSearchList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllVisits: (params) => dispatch(ShreeActions.fetchAllInfluencerVisits(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitSummaryInfluencerList)

