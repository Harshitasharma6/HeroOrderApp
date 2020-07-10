import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import DashboardActions from 'App/Stores/Dashboard/Actions';
import FinalObservationTuple from './FinalObservationTuple';



class FinalObservationList extends Component {
  componentDidMount() {
    const {
      fetchData
    } = this.props;

    fetchData();
  }

  render() {
    const {
      fetchData,
      loader,
      list
    } = this.props;

    let visibleNode = [];

    if (list && list.length) {
      if (list.length) {
        visibleNode = (
          <FlatList
            data={list}
            renderItem={({ item }) => <FinalObservationTuple data={item} id={item.Id} />}
            keyExtractor={item => item.Id}
            onRefresh={() => fetchData()}
            refreshing={loader}
          />
        );
      } else {
        visibleNode =<NoDataFound />
      }
    } else if (loader) {
      visibleNode = <Loading />
    } else if (list && !list.length && !loader) {
      visibleNode = <NoDataFound text={'No Observations for today'}/>
    }


    return (
      <View style={{flex: 1}}>
          {visibleNode}
      </View>
    )
  }
}



const mapStateToProps = (state) => ({
 	list: state.dashboard.finalObservationList,
  	loader:  state.dashboard.finalObservationFetchLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(DashboardActions.fetchFinalObservation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalObservationList)

